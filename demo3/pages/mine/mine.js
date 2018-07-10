// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  exit:function(){
    wx.showModal({
              title: '提示',
              content: '是否确定退出',
              success: function (res) {
                if (res.confirm) {
                  wx.redirectTo({
                    url: '../login/login',
                  })
                } else if (res.cancel) {}
              }
            })
  },
  tomine_1:function(){
      wx.navigateTo({
        url: '../mine_1/mine_1',
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
  //判断用户是否登录
  onShow: function () {
    // wx.request({
    //   url: '',
    //   success:function(res){
    //       if(res.status!="dled") {
    //         wx.showModal({
    //           title: '提示',
    //           content: '用户未登录',
    //           success: function (res) {
    //             if (res.confirm) {
    //               wx.navigateTo({
    //                 url: '../login/login',
    //               })
    //             } else if (res.cancel) {
    //               wx.navigateBack({

    //               })
    //             }
    //           }
    //         })
    //       }
    //       else
    //   }
    // })
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