const {
    rp
} = require('./utils');

class WXMINIQR {

    async getMiniQRLimit({
        access_token,
        path,
        width,
        auto_color,
        line_color,
        is_hyaline
    }) {
        let url = `https://api.weixin.qq.com/wxa/getwxacode?access_token=${access_token}`;

        let postData = {
            path,
            width,
            auto_color,
            line_color,
            is_hyaline
        };

        const msg = await rp({
            url: url,
            encoding: null,
            method: 'POST',
            body: JSON.stringify(postData)
        });

        return msg.body;
    }

    async getMiniQR({
        access_token,
        scene,
        page,
        width,
        auto_color,
        line_color,
        is_hyaline
    }) {
        let url = `https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=${access_token}`;

        let postData = {
            scene,
            page,
            width,
            auto_color,
            line_color,
            is_hyaline
        };

        const msg = await rp({
            url: url,
            encoding: null,
            method: 'POST',
            body: JSON.stringify(postData)
        });

        return msg.body;
    }

    async getQR({
        access_token,
        path,
        width
    }) {
        let url = `https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode?access_token=${access_token}`;

        let postData = {
            path,
            width
        };

        const msg = await rp({
            url: url,
            encoding: null,
            method: 'POST',
            body: JSON.stringify(postData)
        });

        return msg.body;
    }
}

module.exports = WXMINIQR;