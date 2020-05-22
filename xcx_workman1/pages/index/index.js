//index.js
//获取应用实例
const app = getApp()
//调用接口js
const apiconfig = require('../../utils/configdxy.js')

const qingqiu = require('../../utils/request.js')

Page({
  data: {
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
    bannerImg: [{
        id: 1,
        bannerimg: '../image/top.png'
      },
      {
        id: 2,
        bannerimg: '../image/top.png'
      },
      {
        id: 3,
        bannerimg: '../image/top.png'
      }
    ],
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
    ]
  },

  onLoad: function() {
    this.advertisement()
  },

  // 获取广告
  advertisement:function() {
    var data = {
      page:1,
      size:100      
    }
    qingqiu.get('bannerlist',data,function(re){
      debugger
      if(re.data.success == true){
        
      }
    })
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