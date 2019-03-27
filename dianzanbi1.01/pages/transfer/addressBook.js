// pages/balance/addressBook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArray: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.fetchData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  fetchData: function() {
    this.setData({
      dataArray: [{
          "name": "刘志聪",
          "userId": "1"
        },
        {
          "name": "肖灿辉",
          "userId": "1"
        },
        {
          "name": "陈伟强",
          "userId": "1"
        }
      ]
    })
  },

  present: function(e) {
    let name = e.currentTarget.dataset.name
    let userId = e.currentTarget.dataset.userid
    wx.navigateTo({
      url: './present?name='+name+'&userId='+userId,
    })
  }
})