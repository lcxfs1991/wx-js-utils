# 获取小程序码或小程序二维码

## WXMINIQR

用于初始化的 `constructor`

### 返回值说明

| 字段 | 类型 | 说明
| --- | --- | ---
| WXMINIUser | object | `WXMINIUser` 对象

### 示例

```js
const {
    WXMINIUser,
    WXMINIQR
} = require('wx-js-utils');

const appId = ''; // 小程序 appId
const secret = ''; // 小程序 secret

// 获取小程序码，A接口
let wXMINIUser = new WXMINIUser({
    appId,
    secret
});

// 一般需要先获取 access_token
let access_token = await wXMINIUser.getAccessToken();
let wXMINIQR = new WXMINIQR();
```

## getMiniQRLimit

获取小程序码，适用于需要的码数量较少的业务场景。

* [官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/getWXACode.html)

### 参数说明

| 字段 | 类型 | 必填 | 默认值 | 说明
| --- | --- | --- | --- | ---
| options | object | 是 | | 调用参数

* `options` 详情

| 字段 | 类型 | 必填 | 默认值 | 说明
| --- | --- | --- | --- | ---
| access_token | string | 是 | | [接口调用凭证](https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html)
| path | string | 是 | | 扫码进入的小程序页面路径，最大长度 128 字节，不能为空
| width | number | 否 | 430 | 二维码的宽度，单位 px。最小 280px，最大 1280px
| auto_color | boolean | 否 | false | 自动配置线条颜色，如果颜色依然是黑色，则说明不建议配置主色调
| line_color | object | 否 | `{"r":0,"g":0,"b":0}` | auto_color 为 false 时生效，使用 rgb 设置颜色 例如 `{"r":"xxx","g":"xxx","b":"xxx"}` 十进制表示
| is_hyaline | boolean | 否 | false | 是否需要透明底色，为 true 时，生成透明底色的小程序码

### 返回值说明

| 字段 | 类型 | 说明
| --- | --- | ---
| errcode | number | 错误码
| errmsg | string | 错误信息

### 示例

```js
let qrResult = await wXMINIQR.getMiniQRLimit({
    access_token,
    path: 'pages/index/index',
    is_hyaline: true
});
```

## getMiniQR

获取小程序码，适用于需要的码数量极多的业务场景。

* [官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/getWXACodeUnlimit.html)

### 参数说明

| 字段 | 类型 | 必填 | 默认值 | 说明
| --- | --- | --- | --- | ---
| options | object | 是 | | 调用参数

* `options` 详情

| 字段 | 类型 | 必填 | 默认值 | 说明
| --- | --- | --- | --- | ---
| access_token | string | 是 | | [接口调用凭证](https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html)
| scene | string | 是 | | 最大32个可见字符，只支持数字，大小写英文以及部分特殊字符：`!#$&'()*+,/:;=?@-._~`，其它字符请自行编码为合法字符（因不支持`%`，中文无法使用 `urlencode` 处理，请使用其他编码方式）
| width | number | 否 | 430 | 二维码的宽度，单位 px。最小 280px，最大 1280px
| auto_color | boolean | 否 | false | 自动配置线条颜色，如果颜色依然是黑色，则说明不建议配置主色调
| line_color | object | 否 | `{"r":0,"g":0,"b":0}` | auto_color 为 false 时生效，使用 rgb 设置颜色 例如 `{"r":"xxx","g":"xxx","b":"xxx"}` 十进制表示
| is_hyaline | boolean | 否 | false | 是否需要透明底色，为 true 时，生成透明底色的小程序码

### 返回值说明

| 字段 | 类型 | 说明
| --- | --- | ---
| errcode | number | 错误码
| errmsg | string | 错误信息

### 示例

```js
let qrResult = await wXMINIQR.getMiniQR({
    scene: '?code=123',
    access_token,
    path: 'pages/index/index',
    is_hyaline: true
});

```

## getQR

获取小程序二维码，适用于需要的码数量较少的业务场景。

* [官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/createWXAQRCode.html)

### 参数说明

| 字段 | 类型 | 必填 | 默认值 | 说明
| --- | --- | --- | --- | ---
| options | object | 是 | | 调用参数

* `options` 详情

| 字段 | 类型 | 必填 | 默认值 | 说明
| --- | --- | --- | --- | ---
| access_token | string | 是 | | [接口调用凭证](https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html)
| path | string | 是 | | 扫码进入的小程序页面路径，最大长度 128 字节，不能为空
| width | number | 否 | 430 | 二维码的宽度，单位 px。最小 280px，最大 1280px

### 返回值说明

| 字段 | 类型 | 说明
| --- | --- | ---
| errcode | number | 错误码
| errmsg | string | 错误信息

### 示例

```js
// 获取小程序二维码
let qrResult = await wXMINIQR.getQR({
    access_token,
    path: 'pages/index/index'
});
```

