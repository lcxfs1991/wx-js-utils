# 获取小程序码或小程序二维码

## 官方文档
* [官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/qrcode.html)

## 使用

```js
const {
    WXMINIUser,
    WXMINIQR
} = require('wx-js-utils');

const appId = ''; // 小程序 appId
const secret = ''; // 小程序 secret

// PS : 参数与官方的对齐


// 获取小程序码，A接口
let wXMINIUser = new WXMINIUser({
    appId,
    secret
});

let access_token = await wXMINIUser.getAccessToken();

let wXMINIQR = new WXMINIQR();
let qrResult = await wXMINIQR.getMiniQRLimit({
    access_token,
    path: 'pages/index/index',
    is_hyaline: true
});

// 获取小程序码，B接口
let wXMINIUser = new WXMINIUser({
    appId,
    secret
});

let access_token = await wXMINIUser.getAccessToken();

let wXMINIQR = new WXMINIQR();
let qrResult = await wXMINIQR.getMiniQR({
    scene: '?code=123',
    access_token,
    path: 'pages/index/index',
    is_hyaline: true
});

// 获取小程序二维码
let wXMINIUser = new WXMINIUser({
    appId,
    secret
});

let access_token = await wXMINIUser.getAccessToken();

let wXMINIQR = new WXMINIQR();
let qrResult = await wXMINIQR.getQR({
    access_token,
    path: 'pages/index/index'
});

```

