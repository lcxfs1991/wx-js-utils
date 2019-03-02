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

let accessToken1 = await wXMINIUser.getAccessToken();

// 结合小程序·云开发获取并缓存 access_token
// 需要先创建名为 access_token 的一个数据库集合，如果想改名字，可以修改 collection 参数
// 在云函数中可以不需要填写参数，全部采用默认值

let accessToken2 = await wXMINIUser.getCacheAccessToken({
    env: 'tcb-production-xxxx', // 在云函数环境中不填写，表示用默认环境
    secretId: 'xxx', // 小程序绑定的腾讯云账号 secretId，在云函数中可以不用填写
    secretKey: 'xxx', // // 小程序绑定的腾讯云账号 secretKey，在云函数中可以不用填写
    collection = 'access_token', // 集合名默认为 access_token
    gapTime = 300000 // 提前多久失效，默认 5 分钟
});

// 用 code 换取 openid 和 session_key
let code = ''; // 从小程序端的 wx.login 接口传过来的 code 值
let info = await wXMINIUser.codeToSession();
```