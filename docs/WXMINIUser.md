# 与用户相关的信息获取

## 官方文档
* [access_token](https://developers.weixin.qq.com/miniprogram/dev/api/token.html)
* [登录凭证校验](https://developers.weixin.qq.com/miniprogram/dev/api/api-login.html)

## 使用

```js
const {
    WXMINIUser,
} = require('wx-js-utils');

const appId = ''; // 小程序 appId
const secret = ''; // 小程序 secret

// 获取 access_token
let wXMINIUser = new WXMINIUser({
    appId,
    secret
});

let accessToken = await wXMINIUser.getAccessToken();

// 用 code 换取 openid 和 session_key
let code = ''; // 从小程序端的 wx.login 接口传过来的 code 值
let info = await wXMINIUser.codeToSession();
```