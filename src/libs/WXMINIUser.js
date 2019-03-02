const {
    rp
} = require('./utils');

const cloud = require('tcb-admin-node');

class WXMINIUser {

    constructor({ appId, secret }) {
        this.appId = appId;
        this.secret = secret;
    }

    // 获取 access_token 并缓存
    async getCacheAccessToken(options = {}) {
        let {
            env = null,
            secretId = null,
            secretKey = null,
            collection = 'access_token',
            gapTime = 300000 // 5 分钟
        } = options;

        cloud.init({
            secretId,
            secretKey,
            env
        });

        let db = cloud.database();
        let result = await db.collection(collection).get();

        if (result.code) {
            return null;
        }

        // 没有缓存，获取
        if (!result.data.length) {
            let accessTokenBody = await this.getAccessToken(false);
            // console.log(accessTokenBody);
            await db.collection(collection).add({
                accessToken: accessTokenBody.access_token,
                expiresIn: accessTokenBody.expires_in * 1000,
                createTime: Date.now()
            });
            return accessTokenBody.access_token;
        }
        else {
            let data = result.data[0];
            let {
                _id,
                accessToken,
                expiresIn,
                createTime
            } = data;
            
            // access_token 依然有效
            if (Date.now() < createTime + expiresIn - gapTime) {
                return accessToken;
            }
            // 失效，重新拉取
            else {
                let accessTokenBody = await this.getAccessToken(false);
                await db.collection(collection).doc(_id).set({
                    accessToken: accessTokenBody.access_token,
                    expiresIn: accessTokenBody.expires_in * 1000,
                    createTime: Date.now()
                });
                return accessTokenBody.access_token;
            }
        }
    }

    // 获取 access_token
    async getAccessToken(isTokenOnly = true) {
        const result = await rp({
            url: `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appId=${this.appId}&secret=${this.secret}`,
            method: 'GET'
        });

        if (result.code || result.errcode || !result.body) {
            throw new Error({
                msg: 'failed to get access_token',
                detail: result
            });
        }

        let rbody = (typeof result.body === 'object') ? result.body : JSON.parse(result.body);
        return isTokenOnly ? rbody.access_token : rbody;
    }

    // 获取 openid  和 session_key
    async codeToSession(code) {
        const result = await rp({
            url: `https://api.weixin.qq.com/sns/jscode2session?appId=${this.appId}&secret=${this.secret}&js_code=${code}&grant_type=authorization_code`,
            method: 'GET'
        });

        try {
            return JSON.parse(result.body);
        }
        catch (e) {
            throw e;
        }
    }
}

module.exports = WXMINIUser;