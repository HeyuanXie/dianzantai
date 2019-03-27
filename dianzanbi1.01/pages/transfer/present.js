// pages/transfer/present.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    amount: 1,
    mark: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.name != null) {
      this.setData({
        name: options.name
      })
    }
    if (options.userId != null) {
      this.setData({
        userId: options.userId
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  amountInputing: function(e) {
    if (e.detail.value <= 0 || e.detail.value > 3) {
      wx.showToast({
        title: '赠送范围为1-3',
        icon: 'none'
      })
      return;
    }
  },

  amountInput: function(e) {
    this.setData({
      amount: e.detail.value
    })
  },

  markInput: function(e) {
    this.setData({
      mark: e.detail.value
    })
  },

  add: function() {
    if (this.data.amount == 3) {
      wx.showToast({
        title: '最多赠送三枚额',
        icon: 'none'
      })
      return;
    }
    this.setData({
      amount: this.data.amount + 1
    })
  },

  sub: function() {
    if (this.data.amount == 1) {
      wx.showToast({
        title: '最少赠送一枚额',
        icon: 'none'
      })
      return;
    }
    this.setData({
      amount: this.data.amount - 1
    })
  }
})