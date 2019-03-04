# 发送模板消息

## WXMINIMessage

用于初始化的 `constructor`

* [官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/sendTemplateMessage.html)

### 返回值说明

| 字段 | 类型 | 说明
| --- | --- | ---
| WXMINIMessage | object | `WXMINIMessage` 对象


## sendMessage

 发送模板消息

### 参数及返回值说明

详见[官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/sendTemplateMessage.html)


## 示例

```js
const {
    WXMINIUser,
    WXMINIMessage
} = require('wx-js-utils');

const appId = ''; // 小程序 appId
const secret = ''; // 小程序 secret


// PS : 参数与官方的对齐

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
let wXMINIMessage = new WXMINIMessage();
let result = await wXMINIMessage.sendMessage({
    access_token,
    touser,
    form_id,
    template_id,
    data: {
        keyword1: {
            value: '' // keyword1 的值
        },
        keyword2: {
            value: '' // keyword2 的值
        }
    },
    page: 'pages/index/index' // 点击模板消息后，跳转的页面
});
```

