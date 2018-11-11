const {
    rp
} = require('./utils');

class WXUniformMessage {
    /**
     * 发送统一服务消息
     * @param {String} access_token 接口调用凭证
     * @param {String} touser 用户openid，可以是小程序的openid，也可以是mp_template_msg.appid对应的公众号的openid
     * @param {Object} weapp_template_msg 小程序模板消息相关的信息
     * @param {String} weapp_template_msg.template_id 小程序模板ID
     * @param {String} weapp_template_msg.form_id 小程序模板消息formid
     * @param {Object} weapp_template_msg.data 小程序模板数据
     * @param {String} weapp_template_msg.page 小程序页面路径
     * @param {String} weapp_template_msg.emphasis_keyword  小程序模板放大关键词
     * @param {Object} mp_template_msg  公众号模板消息相关的信息
     * @param {String} mp_template_msg.appid 公众号appid，要求与小程序有绑定且同主体
     * @param {String} mp_template_msg.template_id 公众号模板id
     * @param {String} mp_template_msg.url 公众号模板消息所要跳转的url
     * @param {Object} mp_template_msg.miniprogram 公众号模板消息所要跳转的小程序，小程序的必须与公众号具有绑定关系
     * @param {String} mp_template_msg.miniprogram.appid 小程序appId
     * @param {String} mp_template_msg.miniprogram.pagepath 小程序页面路径
     * @param {Object} mp_template_msg.data 公众号模板消息的数据
     * 具体参数名称参见官网 https://developers.weixin.qq.com/miniprogram/dev/api/open-api/uniform-message/sendUniformMessage.html
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