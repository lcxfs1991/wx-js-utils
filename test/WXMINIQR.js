const {
    WXMINIUser,
    WXMINIQR
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
}

describe('miniprogram user', () => {
    it('getMiniQRLimit', async () => {
        let wXMINIUser = new WXMINIUser({
            appId,
            secret
        });

        let access_token = await wXMINIUser.getAccessToken();

        let wXMINIQR = new WXMINIQR();
        let qrResult = await wXMINIQR.getMiniQRLimit({
            access_token,
            path: 'pages/index/index',
            is_hyaline: true
        });

        expect(typeof qrResult.toString('base64')).toBe('string');
    });

    it('getMiniQR', async () => {
        let wXMINIUser = new WXMINIUser({
            appId,
            secret
        });

        let access_token = await wXMINIUser.getAccessToken();

        let wXMINIQR = new WXMINIQR();
        let qrResult = await wXMINIQR.getMiniQR({
            scene: '?code=123',
            access_token,
            path: 'pages/index/index',
            is_hyaline: true
        });

        expect(typeof qrResult.toString('base64')).toBe('string');
    });

    it('getQR', async () => {
        let wXMINIUser = new WXMINIUser({
            appId,
            secret
        });

        let access_token = await wXMINIUser.getAccessToken();

        let wXMINIQR = new WXMINIQR();
        let qrResult = await wXMINIQR.getQR({
            access_token,
            path: 'pages/index/index'
        });

        expect(typeof qrResult.toString('base64')).toBe('string');
    });
});