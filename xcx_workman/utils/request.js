/**
 * 数据请求
 */
var api = require('./config.js')
const Get = function(url, data, huidiao, method = 'GET') {
	console.log('UserAuthorization:' + uni.getStorageSync('yrzuser'))
	var auth = uni.getStorageSync('yrzuser') != null ? uni.getStorageSync('yrzuser').access_token : ''
		var geturl = ""
	if (api[url] != null) {
		geturl = api[url]
	} else if (api.zhu[url] != null) {
		geturl = api.zhu[url]
	} else if (api.deng[url] != null) {
		geturl = api.deng[url]
	}
	uni.request({
		url: geturl,
		method: method,
		dataType: "json",
		data: data,
		sslVerify: false,
		header: {
			"Content-Type": "application/x-www-form-urlencoded",
			'Authorization': auth
		},
		success: function(res) {
			if (res.statusCode == 401) {
				huidiao("用户需要重新登入")
				uni.removeStorageSync('yrzuser');
				// uni.redirectTo({
				// 	url: "../login/login"
				// })
			} else {
				huidiao(res.data)
			}
		},
		fail(e) {
			console.log(e)
		}
	}, 1000)
}

module.exports = {
	get: Get
}