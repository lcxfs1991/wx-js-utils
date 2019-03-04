const {
    rp
} = require('./utils');

class WXMINIActMessage {

    async createActivityId(access_token) {
        let url = `https://api.weixin.qq.com/cgi-bin/message/wxopen/activityid/create?access_token=${access_token}`;

        const msg = await rp({
            url: url,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return JSON.parse(msg.body);
    }

    async setUpdatableMsg({
        access_token,
        activity_id,
        target_state,
        template_info
    }) {
        let url = `https://api.weixin.qq.com/cgi-bin/message/wxopen/updatablemsg/send?access_token=${access_token}`;

        let postData = {
            activity_id,
            target_state,
            template_info
        };

        const msg = await rp({
            url: url,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });

        return JSON.parse(msg.body);
    }
}

module.exports = WXMINIActMessage;