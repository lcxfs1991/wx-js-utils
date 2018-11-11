const {
    rp
} = require('./utils');

class WXUniformMessage {
    /**
     * 发送统一服务消息
     * @param {String} access_token
     * @param {String} touser
     * @param {Object} weapp_template_msg
     * @param {String} weapp_template_msg.template_id
     * @param {String} weapp_template_msg.form_id
     * @param {Object} weapp_template_msg.data
     * @param {String} weapp_template_msg.page
     * @param {String} weapp_template_msg.emphasis_keyword
     * @param {Object} mp_template_msg 
     * @param {String} mp_template_msg.appid
     * @param {String} mp_template_msg.template_id
     * @param {String} mp_template_msg.url
     * @param {Object} mp_template_msg.miniprogram
     * @param {String} mp_template_msg.miniprogram.appid
     * @param {String} mp_template_msg.miniprogram.pagepath
     * @param {Object} mp_template_msg.data
     */
    async sendMessage({
        access_token,
        touser,
        weapp_template_msg,
        mp_template_msg
    }) {
        let url = `https://api.weixin.qq.com/cgi-bin/message/wxopen/template/uniform_send?access_token=${access_token}`;

        let postData = {
            touser
        };

        if (weapp_template_msg) {
            postData = Object.assign(postData, { weapp_template_msg })
        }
        if (mp_template_msg) {
            postData = Object.assign(postData, { mp_template_msg })
        }

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

module.exports = WXUniformMessage;