/**
 * Created by linweihao on 16/5/23.
 */
var request = require('request');

//client_id
var t_client_id = 'papers3';
//client_secret
var t_client_secret = '123';
//clientCredentials  以client_id：client_secret形式组合并转换成Base64-encoded
var clientCredentials = (t_client_id + ':'+t_client_secret).toString('base64');
//用户名
var t_username = 'alex@example.com';
//密码
var t_password = 'test';

console.log(clientCredentials);

//发送Post请求获取Token
request.post({
    url: 'http://' + clientCredentials + '@127.0.0.1:3000/oauth/token',
    form: {
        grant_type: 'password',
        username: t_username,
        password: t_password,
        client_id: t_client_id,
        client_secret: t_client_secret
    }
}, function(err, res, body) {
    console.log(body);
    //获得Token
    var accessToken = JSON.parse(body).access_token;

    request.get({
        url: 'http://127.0.0.1:3000/secret',
        headers: { Authorization: 'Bearer ' + accessToken }
    }, function(err, res, body) {
        console.log(body);
    });
});