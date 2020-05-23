//index.js
//获取应用实例
const app = getApp()
//调用接口js
const qingqiu = require('../../utils/request.js')
const configurl = require('../../utils/config.js')

Page({
  data: {
    viewUrl:configurl.viewUrl,
    msgList: [
      {
        id: "1",
        title: "恭喜王力入驻成功！"
      },
      {
        id: "2",
        title: "恭喜李鹏入驻成功！"
      },
      {
        id: "3",
        title: "恭喜王南入驻成功！"
      }
    ],
    bannerImg: [],
    needsList: [{
        id: 1,
        needType: 0,
        title: '祥源乡新农村工程点需要友们火速联系！',
        price: '350/天',
        location: '万载 | 双桥镇',
        number: 2,
        date: '2019.11.15',
        status: '进行中'
      },
      {
        id: 2,
        needType: 1,
        title: '祥源乡新农村工程点需要友们火速联系！',
        price: '350/天',
        location: '万载 | 双桥镇',
        number: 2,
        date: '2019.11.15',
        status: '进行中'
      },
      {
        id: 3,
        needType: 0,
        title: '祥源乡新农村工程点需要友们火速联系！',
        price: '350/天',
        location: '万载 | 双桥镇',
        number: 2,
        date: '2019.11.15',
        status: '进行中'


      }
    ],
    workerList: [],
    storeList: [],
    goodsList: [],
    xuqiulist:[],
    grlist:[],
    sjlist:[]

  },

  onLoad: function() {
    this.firstbanner() //banner
    this.pointList() //通知
    this.xqneedlist()
    this.grneedlist() //工人
    this.sjneedlist()  //商家

  },
// 需求列表
xqneedlist() {
  var that = this
  var data={
    pages: 1,
    size: 10
  }
  qingqiu.get("zuixinxq", data, function(re) {
    if (re.success == true) {
      if (re.result != null) {
        that.xuqiulist = re.result.records
        for(var i= 0 ; i < that.xuqiulist.length; i++){
          that.xuqiulist[i].publishTime = re.result.records[i].publishTime.split(" ")[0]
        }    
        that.setData ({
          xuqiulist : re.result.records
        })
      } else {
        qingqiu.tk('未查询到任何数据')
      }
    } else {
      qingqiu.tk('请求出错啦')
    }
  })
},
// 推荐工人
grneedlist() {
  var that = this
  var data={
    pages: 1,
    size: 10,
    wxState:1
  }
  qingqiu.get("wxUserPage", data, function(re) {
    if (re.success == true) {
      if (re.result != null) {
        console.log(re.result.records)
        for(let obj of re.result.records){
          if(obj.starClass == 0){
            obj.shopName = ""
          }else if(obj.starClass == 1){
            obj.shopName = "一级工匠"
          }else if(obj.starClass == 2){
            obj.shopName = "二级工匠"
          }else if(obj.starClass == 3){
            obj.shopName = "三级工匠"
          }else if(obj.starClass == 4){
            obj.shopName = "四级工匠"
          }if(obj.starClass == 5){
            obj.shopName = "五级工匠"
          }
          obj.picIurl = that.data.viewUrl + obj.picIurl
          obj.oneClassName = obj.oneClassName.replace(/,/, "|")
          obj.twoClassName = obj.twoClassName.replace(/,/, "|")
        }
        console.log(re.result.records)
        that.setData({
          storeList:re.result.records
        })
      } 
    } 
  })
},
// 推荐商家
sjneedlist() {
  var that = this
  var data={
    pages: 1,
    size: 10,
    wxState:0
  }
  qingqiu.get("wxUserPage", data, function(re) {
    if (re.success == true) {
      if (re.result != null) {
        for(let obj of re.result.records){
          obj.picIurl = that.data.viewUrl + obj.picIurl
          obj.oneClassName = obj.oneClassName.replace(/,/, "|")
          obj.twoClassName = obj.twoClassName.replace(/,/, "|")
        }
        that.setData({
          goodsList:re.result.records
        })
      } 
    } 
  })
},

  // 获取广告
  firstbanner:function() {
    var that = this
    var data = {
      page:1,
      size:100      
    }
    qingqiu.get("bannerlist", data , function(re){
      if(re.success == true){
        if(re.result != null){
          that.data.bannerImg = re.result
          for(let obj of that.data.bannerImg){
            obj.bannerUrl= that.data.viewUrl+obj.bannerUrl;
          }
          console.log(that.data.bannerImg)
          that.setData({
            bannerImg:that.data.bannerImg
          })
        }
      }
    })
  },

  // banner点击事件
  goBaidu:function(event){
    var data = (event.currentTarget.dataset)
    wx.navigateTo({
      url:'../outurl/outurl?goBaidu='+ data.url, //
      success:function() {
      },       //成功后的回调；
      fail:function() { },         //失败后的回调；
      complete:function() { },      //结束后的回调(成功，失败都会执行)
    })
  },

  // 通知
  pointList:function(){
    var that = this
    var data = {
      page:1,
      size:10      
    }
    qingqiu.get("pointList", data ,function(re){
      if(re.success == true){
        if(re.result != null){
          for(let obj of re.result.records){
            obj.name = "恭喜" + obj.name + "成功入驻";
          }
          that.setData({
            msgList:re.result.records
          })
        }
      }
    })
  },

  firstactivity:function(){

  },
  firstneeds:function(){

  },

  advertisement:function(){
    var that = this
    console.log(this)
    console.log(that.data.bannerImg)
  },
 

  // 跳转到工人入驻页面
  applyBusiness: function() {
    wx.navigateTo({
      url: '../applyBusiness/applyBusiness',
    })
  },
  // 跳转到推荐有礼页面
  activity: function() {
    wx.navigateTo({
      url: '../activity/activity',
    })
  },
  // 跳转到更多需求页面
  need: function() {
    wx.switchTab({
      url: '../need/need',
    })

  },
  // 跳转到需求详情页面
  needsDetails: function() {
    wx.navigateTo({
      url: '../needsDetails/needsDetails',
    })
  },
  // 跳转到推荐工人更多页面
  services: function() {
    wx.switchTab({
      url: '../services/services',
    })

  },
  // 跳转到工人详情页面
  workerDetails: function() {
    wx.navigateTo({
      url: '../workerDetails/workerDetails',
    })
  },
  // 跳转到商家详情页面
  businessDetails: function() {
    wx.navigateTo({
      url: '../businessDetails/businessDetails',
    })
  },
  // 跳转到商品列表页面
  goodsList: function() {
    wx.navigateTo({
      url: '../goodsList/goodsList',
    })
  },
  // 跳转到商品详情页面
  goodsDetails: function() {
    wx.navigateTo({
      url: '../goodsDetails/goodsDetails',
    })
  },
})