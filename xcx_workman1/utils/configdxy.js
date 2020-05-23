var api = require('./config.js')
const baseUrl = "http://192.168.1.250:3000/work-boot/"

// 2.0需要工人，商家分类表：可选2个分类-编辑
const Edit = baseUrl + "work/userClass/Edit"
// 登录
const GetKeyInfo = baseUrl + "/work/wxLogin/getKeyInfo"
// 图片上传
const Upload = baseUrl + "sys/common/upload"
// 获取广告列表
const Bannerlist = baseUrl + "pc/hall/list"
// 获取广告列表
const PointLIst = baseUrl + "pc/hall/pointList"
// 获取推荐工人/推荐商家
const WxUserPage = baseUrl + "/pc/hall/wxUserPage"

module.exports = {
  edit: Edit,
  getKeyInfo:GetKeyInfo,
  upload:Upload,
  bannerlist:Bannerlist,
  pointList:PointLIst,
  wxUserPage:WxUserPage
};
