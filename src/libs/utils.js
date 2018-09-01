const request = require('request');

/**
 * 发送请求
 * @param {Object} options 请求参数
 */
const rp = options =>
    new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (error) {
                reject(error);
            }
            resolve(response);
        });
    });

module.exports = {
    rp // request promise
};