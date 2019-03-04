const {
    rp
} = require('./utils');

class WXMINIMessage {

    async sendMessage({
        touser,
        template_id,
        form_id,
        access_token,
        data,
        page,
        emphasis_keyword
    }) {
        let url = `https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=${access_token}`;

        let postData = {
            touser,
            template_id,
            form_id,
            data,
            page,
            emphasis_keyword
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

module.exports = WXMINIMessage;