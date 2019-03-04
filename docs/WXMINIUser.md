# 与用户相关的信息获取

## 官方文档
* [access_token](https://developers.weixin.qq.com/miniprogram/dev/api/token.html)
* [登录凭证校验](https://developers.weixin.qq.com/miniprogram/dev/api/api-login.html)

## WXMINIUser

用于初始化的 `constructor`

### 参数说明

| 字段 | 类型 | 必填 | 默认值 | 说明
| --- | --- | --- | --- | ---
| options | object | 是 | | 初始化参数

* `options` 详情

| 字段 | 类型 | 必填 | 默认值 | 说明
| --- | --- | --- | --- | ---
| appId | string | 是 | | 小程序 appId
| secret | string | 是 | | 小程序 secret

### 返回值说明

| 字段 | 类型 | 说明
| --- | --- | ---
| WXMINIUser | object | `WXMINIUser` 对象

### 示例

```js
const {
    WXMINIUser,
} = require('wx-js-utils');

const appId = ''; // 小程序 appId
const secret = ''; // 小程序 secret

let wXMINIUser = new WXMINIUser({
    appId,
    secret
});
```

## getAccessToken

获取新的 `access_token`

### 返回值说明

| 字段 | 类型 | 说明
| --- | --- | ---
| accessToken | string | access_token

### 示例

```js
let accessToken1 = await wXMINIUser.getAccessToken();
```

## getCacheAccessToken

结合小程序·云开发缓存并获取 `access_token`

### 参数说明

| 字段 | 类型 | 必填 | 默认值 | 说明
| --- | --- | --- | --- | ---
| options | object | 是 | | 初始化参数

* `options` 详情

| 字段 | 类型 | 必填 | 默认值 | 说明
| --- | --- | --- | --- | ---
| env | string | 否 | | 云开发环境 id，在云函数环境中不填写，表示用默认环境
| secretId | string | 否 | | 小程序绑定的腾讯云账号 secretId，在云函数中可以不用填写
| secretKey | string | 否 | | 小程序绑定的腾讯云账号 secretKey，在云函数中可以不用填写
| collection | string | 否 | access_token | 集合名默认为 access_token
| gapTime | string | 否 | 300000ms | 提前多久失效，默认 5 分钟

### 返回值说明

| 字段 | 类型 | 说明
| --- | --- | ---
| accessToken | string | access_token

### 示例

```js
// 结合小程序·云开发获取并缓存 access_token
// 需要先创建名为 access_token 的一个数据库集合，如果想改名字，可以修改 collection 参数
// 在云函数中可以不需要填写参数，全部采用默认值

let accessToken2 = await wXMINIUser.getCacheAccessToken({
    env: 'tcb-production-xxxx', // 在云函数环境中不填写，表示用默认环境
    secretId: 'xxx', // 小程序绑定的腾讯云账号 secretId，在云函数中可以不用填写
    secretKey: 'xxx', // 小程序绑定的腾讯云账号 secretKey，在云函数中可以不用填写
    collection = 'access_token', // 集合名默认为 access_token
    gapTime = 300000 // 提前多久失效，默认 5 分钟
});
```

## codeToSession

将小程序侧 `wx.login` 传过来的 `code` 转换成 `session`

### 参数说明

| 字段 | 类型 | 必填 | 默认值 | 说明
| --- | --- | --- | --- | ---
| code | string | 是 | | 从小程序端的 `wx.login` 接口传过来的 `code` 值

### 返回值说明

| 字段 | 类型 | 说明
| --- | --- | ---
| session | string | session 值 

### 示例

```js
// 用 code 换取 openid 和 session_key
let code = ''; // 从小程序端的 wx.login 接口传过来的 code 值
let info = await wXMINIUser.codeToSession(code);
```