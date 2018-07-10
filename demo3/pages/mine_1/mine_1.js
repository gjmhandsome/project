// pages/mine_1/mine_1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    company_job:[
      { company: "阿里", job: "前端工程师", status: "已接收" }, { company: "腾讯", job: "前端工程师",status: "待联系" }
    ],

  
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
  //从后台获取求职数据
  // onShow: function () {
  //   wx.request({
  //     url: '',
  //     success:function(res){
  //        this.setData({
  //          company_job:res.data
  //        })
  //     }
  //   })
  // },

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