// pages/cv/cv.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:{
      name: '张三',
      sex: "nan",
      age: "21",
      adress: "beijing",
      phone: "132",
      emil: "163.com",
      job_adress: "beijing",
      job: "前端工程师",
      job_ep: "无",
      school: "wsdf",
      xueli: "asdf",
      zhuanye: "we",
      time: "2019"
    }
    
  },
  tobianji:function(){
      wx.setStorage({
        key: 'message',
        data: this.data.content,
      })
      wx.navigateTo({
        url: '../bianji/bianji',
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
    // wx.request({
    //   url: '',
    //   success:function(res){
  //判断用户是否登录了
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
  //登录后从后台获取数据
    //       else{
    //         this.setData({
    //             content:res.data
    //         })
    //       }
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