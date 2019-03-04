# 动态消息及其更新

## WXMINIActMessage

用于初始化的 `constructor`

### 返回值说明

| 字段 | 类型 | 说明
| --- | --- | ---
| WXMINIActMessage | object | `WXMINIActMessage` 对象

## createActivityId

 创建被分享动态消息的 activity_id。

### 参数说明

| 字段 | 类型 | 必填 | 默认值 | 说明
| --- | --- | --- | --- | ---
| access_token | string | 是 | | [接口调用凭证](https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html)

### 返回值说明

详见[官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/createActivityId.html)

## 示例

```js
const {
    WXMINIUser,
    WXMINIActMessage
} = require('wx-js-utils');

const appId = ''; // 小程序 appId
const secret = ''; // 小程序 secret

// 获取 access_token
let wXMINIUser = new WXMINIUser({
    appId,
    secret
});

let access_token = await wXMINIUser.getAccessToken();
let wXMINIUniformMessage = new WXMINIActMessage();
let result = await wXMINIUniformMessage.createActivityId(access_token);
```

## setUpdatableMsg

修改被分享的动态消息。

### 参数与返回值说明

详参[官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/setUpdatableMsg.html)

### 示例

```js
const {
    WXMINIUser,
    WXMINIActMessage
} = require('wx-js-utils');

const appId = ''; // 小程序 appId
const secret = ''; // 小程序 secret

// 获取 access_token
let wXMINIUser = new WXMINIUser({
    appId,
    secret
});

let access_token = await wXMINIUser.getAccessToken();
let wXMINIUniformMessage = new WXMINIActMessage();
let result = await wXMINIUniformMessage.setUpdatableMsg({
    access_token,
    activity_id: 'xxx',
    target_state: 1,
    template_info: {
        parameter_list: [
            {
                name: 'path',
                value: '/pages/index/index'
            },
            {
                name: 'version_type',
                value: 'develop'
            }
        ]
    }
});
```
