// pages/enterprise/enterprise.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     company_name:"阿里巴巴"
  },
  tosend_job:function(){
     wx.navigateTo({
       url: '../sendjob/sendjob',
     })
  },
  tosee_job: function () {
    wx.navigateTo({
      url: '../seejob/seejob',
    })
  },
  exit: function () {
    wx.showModal({
      title: '提示',
      content: '是否确定退出',
      success: function (res) {
        if (res.confirm) {
          wx.redirectTo({
            url: '../login/login',
          })
        } else if (res.cancel) { }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})