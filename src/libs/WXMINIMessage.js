const {
    rp
} = require('./utils');

class WXMINIMessage {

    constructor({ openId, formId, templateId }) {
        this.openId = openId;
        this.formId = formId;
        this.templateId = templateId;
    }

    setConfig({ openId, formId, templateId }) {
        this.openId = openId || this.openId;
        this.formId = formId || this.formId;
        this.templateId = templateId || this.templateId;
        return this;
    }

    async sendMessage({
        access_token,
        data,
        page
    }) {
        let url = `https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=${access_token}`;

        let postData = {
            touser: this.openId,
            template_id: this.templateId,
            form_id: this.formId,
            data,
            page
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