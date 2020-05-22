var api = require('./config.js')
const baseUrl = "http://192.168.1.242:8081/work-boot/"

// 2.0需要工人，商家分类表：可选2个分类-编辑
const Edit = baseUrl + "work/userClass/Edit"

const getKeyInfo = baseUrl + "work/userClass/getKeyInfo"
// 图片上传
const upload = baseUrl + "/sys/common/upload"
// 获取广告列表
const bannerlist = baseUrl + "/work/banners/list"

module.exports = {
  Edit: Edit,
  getKeyInfo:getKeyInfo,
  upload:upload,
  bannerlist:bannerlist
};
