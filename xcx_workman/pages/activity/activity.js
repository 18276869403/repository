// pages/activity/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      height: wx.getSystemInfoSync().windowHeight,　　//屏幕高度
      width: wx.getSystemInfoSync().windowWidth　　//屏幕宽度
    
    })
    console.log(this.data.height)
  },

  
})