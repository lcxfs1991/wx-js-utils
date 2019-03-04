# 下发小程序和公众号统一的服务消息

## WXUniformMessage

用于初始化的 `constructor`

* [官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/sendUniformMessage.html)

### 返回值说明

| 字段 | 类型 | 说明
| --- | --- | ---
| WXUniformMessage | object | `WXUniformMessage` 对象

## sendMessage

 发送模板消息

### 参数及返回值说明

详见[官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/sendUniformMessage.html)

## 示例

```js
const {
    WXMINIUser,
    WXUniformMessage
} = require('wx-js-utils');

const appId = ''; // 小程序 appId
const secret = ''; // 小程序 secret

// 获取 access_token
let wXMINIUser = new WXMINIUser({
    appId,
    secret
});

let access_token = await wXMINIUser.getAccessToken();

const touser = ''; // 小程序用户 openId，从用户端传过来，指明发送消息的用户
const form_id = ''; // 小程序表单的 form_id，或者是小程序微信支付的 prepay_id
const template_id = ''; // 小程序模板消息模板 id

// 发送模板消息
let wXMINIUniformMessage = new WXUniformMessage();
let result = await wXMINIUniformMessage.sendMessage({
    access_token,
    touser,
    form_id,
    "mp_template_msg": {
        "appid": "APPID ",
        "template_id": "TEMPLATE_ID",
        "url": "http://weixin.qq.com/download",
        "miniprogram": {
            "appid": "xiaochengxuappid12345",
            "pagepath": "index?foo=bar"
        },
        "data": {
            "first": {
                "value": "恭喜你购买成功！",
                "color": "#173177"
            },
            "keyword1": {
                "value": "巧克力",
                "color": "#173177"
            },
            "keyword2": {
                "value": "39.8元",
                "color": "#173177"
            },
            "keyword3": {
                "value": "2014年9月22日",
                "color": "#173177"
            },
            "remark": {
                "value": "欢迎再次购买！",
                "color": "#173177"
            }
        }
    },
});
```

