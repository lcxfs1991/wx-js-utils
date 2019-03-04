const {
    WXMINIUser,
    WXMINIActMessage
} = require('../src');
const config = require('./config');

describe('miniprogram message', () => {
    it('createActivityId', async () => {
        let {
            appId,
            secret
        } = config;

        let wXMINIUser = new WXMINIUser({
            appId,
            secret
        });

        let access_token = await wXMINIUser.getAccessToken();

        let wXMINIActMessage = new WXMINIActMessage();
        let result = await wXMINIActMessage.createActivityId(access_token);

        expect(typeof result.activity_id).toBe('string');
        expect(typeof result.expiration_time).toBe('number');
    });

    it('setUpdatableMsg', async () => {
        let {
            appId,
            secret
        } = config;

        let wXMINIUser = new WXMINIUser({
            appId,
            secret
        });

        let access_token = await wXMINIUser.getAccessToken();

        let wXMINIActMessage = new WXMINIActMessage();
        let result = await wXMINIActMessage.createActivityId(access_token);

        expect(typeof result.activity_id).toBe('string');
        expect(typeof result.expiration_time).toBe('number');

        let updateResult = await wXMINIActMessage.setUpdatableMsg({
            access_token: access_token,
            activity_id: result.activity_id,
            target_state: 1,
            template_info: {
                parameter_list: [
                    {
                        name: 'path',
                        value: '/pages/index/index'
                    },
                    {
                        name: 'version_type',
                        value: 'develop'
                    }
                ]
            }
        });

        expect(updateResult.errcode).toBe(0);
    });
});