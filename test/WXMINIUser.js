const {
    WXMINIUser,
} = require('../src');
const config = require('./config');

describe('miniprogram user', () => {
    it('getAccessToken', async () => {
        let {
            appId,
            secret
        } = config;

        let wXMINIUser = new WXMINIUser({
            appId,
            secret
        });

        let accessToken = await wXMINIUser.getAccessToken();

        expect(typeof accessToken).toBe('string');
    });
});