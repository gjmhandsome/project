Page({

  /**
   * 页面的初始数据
   */
  data: {
    status:"登录",
    job1 : "",
    job2: "",
    job3: "",
    job4: "",
    IT_hidden:"block",
    JR_hidden: "none",
    FDC_hidden: "none",
    XFP_hidden: "none",
    jt_right:'>',
    jt_left:"<"
  },
  dl:function(){
    wx.navigateTo({
      url: '../login/login',
    })
  },
  IT_show:function(){
    this.setData({
      IT_hidden: "block",
      JR_hidden: "none",
      FDC_hidden: "none",
      XFP_hidden: "none",
    })
  },
  JR_show: function () {
    this.setData({
      IT_hidden: "none",
      JR_hidden: "block",
      FDC_hidden: "none",
      XFP_hidden: "none",
    })
  },
  FDC_show: function () {
    this.setData({
      IT_hidden: "none",
      JR_hidden: "none",
      FDC_hidden: "block",
      XFP_hidden: "none",
    })
  },
  XFP_show: function () {
    this.setData({
      IT_hidden: "none",
      JR_hidden: "none",
      FDC_hidden: "none",
      XFP_hidden: "block",
    })
  },
  to_right:function(){
    if(this.data.IT_hidden=="block") {
       this.JR_show();   
    }
    else  if (this.data.JR_hidden == "block") {
      this.FDC_show();
    }
    else  if (this.data.FDC_hidden == "block") {
      this.XFP_show();
    }
  },
  to_left: function () {
    if (this.data.XFP_hidden == "block") {
      this.FDC_show();
    }
    else if (this.data.FDC_hidden == "block") {
      this.JR_show();
    }
    else if (this.data.JR_hidden == "block") {
      this.IT_show();
    }
  },
  
  return_map:function(){
    wx.navigateTo({
      url: '../suggestion/suggestion',
    })
  },
  return_weather: function () {
    wx.navigateTo({
      url: '../weather/weather',
    })
  },
  Tocompany:function(){
       wx.navigateTo({
         url: '../company/company',
       })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function () {
     
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  //改变首页用户状态和获取企业招聘数据
  onShow: function () {
    // wx.request({
    //   url: '',
    //   success: function (res) {
    //     if (res.staus == "dled") {
    //       this.setData({
    //         status: "注销"
    //       })
    //     }
    //     else {
    //       this.setData({
    //         status:"登录"
    //        })
    //     }
    //     this.setDate({
    //       job1: res.job[0],
    //       job2: res.job[1],
    //       job3: res.job[2],
    //       job4: res.job[3]
    //     })
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