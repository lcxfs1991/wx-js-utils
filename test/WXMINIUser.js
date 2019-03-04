const {
    WXMINIUser,
} = require('../src');

let appId = null;
let secret = null;

if (process.env.TRAVIS) {
    appId = process.env.appId;
    secret = process.env.secret;
}
else {
    const config = require('./config');
    appId = config.appId;
    secret = config.secret;
    process.env.TENCENTCLOUD_SECRETID = config.secretId;
    process.env.TENCENTCLOUD_SECRETKEY = config.secretKey;
}

describe('miniprogram user', () => {
    it('getAccessToken', async () => {
        let wXMINIUser = new WXMINIUser({
            appId,
            secret
        });

        let accessToken = await wXMINIUser.getAccessToken();

        expect(typeof accessToken).toBe('string');
    });

    it('getCacheAccessToken', async () => {
        let wXMINIUser = new WXMINIUser({
            appId,
            secret
        });

        let accessToken = await wXMINIUser.getCacheAccessToken({
            env: 'tcb-advanced-a656fc'
        });

        expect(typeof accessToken).toBe('string');
    });
});