# 微信支付

## 官方文档
* [微信支付](https://pay.weixin.qq.com/wiki/doc/api/index.html)
* [小程序](https://developers.weixin.qq.com/miniprogram/dev/api/api-pay.html#wxrequestpaymentobject)

## 支持的功能

| 方法 | 说明 | 是否需要证书
| --- | --- | ---
| microPay | 刷卡支付 | 否
| unifiedOrder | 统一下单 | 否
| orderQuery | 查询订单 | 否
| reverse | 撤销订单 | 是
| closeOrder | 关闭订单 | 否
| refund	 | 申请退款 | 是
| refundQuery | 查询退款 | 否
| downloadBill | 下载对账单 | 否
| report | 交易保障 | 否
| shortUrl | 转换短链接 | 否
| authCodeToOpenid | 授权码查询openid | 否

## 使用

```js
// 参数与官方文档对齐
 
const fs = require('fs');
const {
    WXPay,
    WXPayConstants
 } = require('wx-js-utils');
 
const appId = 'wx8888888888';
const mchId = '8888888',
const key = '8888888888888888888888888888888',
const certFileContent = fs.readFileSync('/path/to/apiclient_cert.p12'),
const caFileContent = fs.readFileSync('/path/to/rootca.pem'),
const timeout = 10000; // 毫秒
    
let wxpay = new WXPay({
    appId,
    mchId,
    key,
    certFileContent,
    caFileContent,
    timeout,
    signType: WXPayConstants.SIGN_TYPE_MD5,  // 使用 HMAC-SHA256 签名，也可以选择  WXPayConstants.SIGN_TYPE_MD5，小程序默认是 WXPayConstants.SIGN_TYPE_MD
    useSandbox: false   // 不使用沙箱环境
});
 
 
var reqObj = {
  body: '商城-商品1',
  out_trade_no: '1478582754970',
  total_fee: 1,
  spbill_create_ip: '123.12.12.123',
  notify_url: 'http://www.example.com/wxpay/notify',
  trade_type: 'NATIVE'
};
 
wxpay.unifiedOrder(reqObj).then(function(respObj) {
    console.log(respObj);
}).catch(function(err) {
    console.log(err);
});
```
