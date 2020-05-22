// const baseUrl = "https://localhost:5001/api/app/"
// const sysUrl = "https://localhost:5001/api/sys/"
var deng = require('./configdxy.js')
const imgurl = "https://www.fudan-pediat.com:5005"
// const imgurl = "http://localhost:5001"
const baseUrl = imgurl + "/api/wx/"
// 获取用户openid
const GetwxLogin = baseUrl + "wxlogin/GetLogin"
module.exports = {
	GetwxLogin: GetwxLogin,
	imgurl: imgurl,
	deng: deng,
};
