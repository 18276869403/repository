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
    workerList: [{
        id: 1,
        degree: '二级工匠',
        workername: '222',
        workersort1: '水电工 | 泥瓦工 ',
        workersort2: '水电工 | 泥瓦工 '
      },
      {
        id: 2,
        workername: '222',
        degree: '二级工匠',
        workersort1: '水电工 | 泥瓦工 ',
        workersort2: '水电工 | 泥瓦工 '
      },
      {
        id: 3,
        workername: '222',
        degree: '二级工匠',
        workersort1: '水电工 | 泥瓦工 ',
        workersort2: '水电工 | 泥瓦工 '
      },
      {
        id: 4,
        workername: '222',
        degree: '二级工匠',
        workersort1: '水电工 | 泥瓦工 ',
        workersort2: '水电工 | 泥瓦工 '
      }
    ],
    storeList: [{
        id: 1,
        storename: '新飞电新飞电器万载店器万载店',
        storesort1: '水电工 | 泥瓦工 ',
        storesort2: '水电工 | 泥瓦工 '
      },
      {
        id: 2,
        storename: '新飞电器万载店',
        storesort1: '水电工 | 泥瓦工 ',
        storesort2: '水电工 | 泥瓦工 '
      },
      {
        id: 3,
        storename: '新飞电器万载店',
        storesort1: '水电工 | 泥瓦工 ',
        storesort2: '水电工 | 泥瓦工 '
      },
      {
        id: 4,
        storename: '新飞电器万载店',
        storesort1: '水电工 | 泥瓦工 ',
        storesort2: '水电工 | 泥瓦工 '
      }
    ],
    goodsList: [{
        id: 1,
        goodsname: '新飞电新飞电器万载店器万载店',
        goodsprice: '5.00',
        storename: '马克波罗瓷砖'
      },
      {
        id: 2,
        goodsname: '新飞电新飞电器万载店器万载店',
        goodsprice: '5.00',
        storename: '马克波罗瓷马克波罗瓷砖砖'
      },
      {
        id: 3,
        goodsname: '新飞电新飞电器万载店器万载店',
        goodsprice: '5.00',
        storename: '马克波罗瓷砖'
      },
      {
        id: 4,
        goodsname: '新飞电新飞电器万载店器万载店',
        goodsprice: '5.00',
        storename: '马克波罗瓷砖'
      }
    ],
    xuqiulist:[],
    grlist:[],
    sjlist:[]

  },

  onLoad: function() {
    this.firstbanner()
    this.pointList()
    this.xqneedlist()
    this.grneedlist()
    this.sjneedlist()

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
    size: 10
  }
  qingqiu.get("tjgr", data, function(re) {
    if (re.success == true) {
      if (re.result != null) {
        that.grlist = re.result.records
        for(var i= 0 ; i < that.grlist.length; i++){
          that.grlist[i].publishTime = re.result.records[i].publishTime.split(" ")[0]
        }    
        that.setData ({
          grlist : re.result.records
        })
      } else {
        qingqiu.tk('未查询到任何数据')
      }
    } else {
      qingqiu.tk('请求出错啦')
    }
  })
},
// 推荐商家
sjneedlist() {
  var that = this
  var data={
    pages: 1,
    size: 10
  }
  qingqiu.get("tjsj", data, function(re) {
    if (re.success == true) {
      if (re.result != null) {
        that.sjlist = re.result.records
        for(var i= 0 ; i < that.sjlist.length; i++){
          that.sjlist[i].publishTime = re.result.records[i].publishTime.split(" ")[0]
        }    
        that.setData ({
          sjlist : re.result.records
        })
      } else {
        qingqiu.tk('未查询到任何数据')
      }
    } else {
      qingqiu.tk('请求出错啦')
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
            obj.bannerUrl= configurl.viewUrl+obj.bannerUrl;
          }
          console.log(that.data.bannerImg)
          that.setData({
            bannerImg:that.data.bannerImg
          })
        }
      }
    })
  },

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
          // that.data.msgList = re.result
          // console.log(that.data.msgList)
          // for(let obj of that.data.bannerImg){
          //   obj.bannerUrl= configurl.viewUrl+obj.bannerUrl;
          // }
          // console.log(that.data.bannerImg)
          // that.setData({
          //   bannerImg:that.data.bannerImg
          // })
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