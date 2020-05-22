// pages/businessDetails/businessDetails.js
//获取应用实例
const app = getApp()

Page({
  data: {
    score: 3,
    CheckItem: 0,
    showList: [{
        id: 1,
        pinglun: '12',
        liulan: '12',
      },
      {
        id: 2,
        pinglun: '12',
        liulan: '12',
      },
      {
        id: 3,
        pinglun: '12',
        liulan: '12',
      },
    ],
    goodsdata1: [{
        colName: "商品",
        id: 0
      },
      {
        colName: "晒晒",
        id: 1
      }
    ],
    goodslist: [{
        id: 1,
        name: '室内F-10木门（含五室内F-10木门（含五',
        price: '12',
      },
      {
        id: 2,
        name: '室内F-10木门（含五室内F-10木门（含五',
        price: '12',
      },
      {
        id: 3,
        name: '室内F-10木门（含五室内F-10木门（含五',
        price: '12',
      },
    ],
    goodsdata1: [{
        colName: "商品",
        id: 0
      },
      {
        colName: "晒晒",
        id: 1
      }
    ],
  },

  onLoad: function() {

  },
  //最新最热样式变动
  serviceSelection1: function(e) {
    var navid = e.currentTarget.id;
    this.setData({
      CheckItem: navid
    })
  },
})