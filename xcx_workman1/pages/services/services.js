//获取应用实例
const app = getApp()

Page({
  data: {
    chooseworker: 0,
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
    goodsdata3: [{
        id: 1,
        name: '商家'
      },
      {
        id: 2,
        name: '工人'
      }
    ],
    workerlist: [{
        id: 1,
        workername: '王师傅',
        age: '42',
        degree: '2级工匠',
        jingyan: '11',
        firstclass: '下水道',
        twoclass: '下水道2',
        firstclass1: '修理',
        twoclass1: '修理1',
        area: '万载',
        street: '双桥镇'
      },
      {
        id: 2,
        workername: '王师傅',
        age: '52',
        degree: '2级工匠',
        jingyan: '11',
        firstclass: '下水道',
        twoclass: '下水道2',
        firstclass1: '修理',
        twoclass1: '修理1',
        area: '万载',
        street: '双桥镇'
      }
    ],
    businesslist: [{
        id: 1,
        businessname: '新飞电器万载店'
      },
      {
        id: 2,
        businessname: '新飞电器万载店'
      },
      {
        id: 3,
        businessname: '新飞电器万载店'
      }
    ]
  },

  onLoad: function() {

  },
  changeType: function(e) {
    var that = this
    if (that.data.chooseworker == 0) {
      that.setData({
        chooseworker: 1
      })
    } else {
      that.setData({
        chooseworker: 0
      })
    }
  },
  // 跳转到商家详情页面
  businessDetails: function () {
    wx.navigateTo({
      url: '../businessDetails/businessDetails',
    })
  },
  // 跳转到工人详情页面
  workerDetails: function () {
    wx.navigateTo({
      url: '../workerDetails/workerDetails',
    })
  },
})