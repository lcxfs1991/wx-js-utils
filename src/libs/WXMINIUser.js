const {
    rp
} = require('./utils');

class WXMINIUser {

    constructor({ appId, secret }) {
        this.appId = appId;
        this.secret = secret;
    }

    // 获取 access_token
    async getAccessToken() {

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
        return rbody.access_token;
    }

    // 获取 openId
    async getOpenId(code) {
        const result = await rp({
            url: `https://api.weixin.qq.com/sns/jscode2session?appId=${this.appId}&secret=${this.secret}&js_code=${code}&grant_type=authorization_code`,
            method: 'GET'
        });

        const openId = JSON.parse(result.body).openId;

        if (!openId) {
            throw new Error({
                msg: 'failed to get openId',
                detail: result
            });
        }

        return openId;
    }
}

module.exports = WXMINIUser;