const {
    WXMINIUser,
    WXMINIQR
} = require('../src');
const config = require('./config');

describe('miniprogram user', () => {
    it('getMiniQRLimit', async () => {
        let {
            appId,
            secret
        } = config;

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
        let {
            appId,
            secret
        } = config;

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
        let {
            appId,
            secret
        } = config;

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