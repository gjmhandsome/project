// pages/sendjob/sendjob.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name:"",
      job:"",
      wages:"",
      year:"",
      education:"",
      leixing:"",
      details:""

  },
  
  nameInput: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  
  jobInput: function (e) {
    this.setData({
      job: e.detail.value
    })
  },
  
  wagesInput: function (e) {
    this.setData({
      wages: e.detail.value
    })
  },

  
  yearInput: function (e) {
    this.setData({
      year: e.detail.value
    })
  },
 
  educationInput: function (e) {
    this.setData({
      education: e.detail.value
    })
  },

  
  leixingInput: function (e) {
    this.setData({
      leixing: e.detail.value
    })
  },
  detailsInput: function (e) {
    this.setData({
      details: e.detail.value
    })
  },
  submit:function(){
    if (this.data.name.length == 0 || this.data.job.length == 0 || this.data.wages.length == 0 || this.data.year.length == 0 || this.data.education.length == 0 || this.data.leixing.length == 0||this.data.details.length==0) {
      wx.showToast({
        title: '有内容为空',
        icon: 'loading',
        duration: 2000
      })
    }
    else {
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000,
      },
        wx.navigateTo({
          url: '../enterprise/enterprise',
        })
      )
      //向后台传递数据
      // wx.request({
      //   url: '',
      //   method:"post",
      //   data: {
      //     name: this.data.name,
      //     job: this.data.job,
      //     wages: this.data.wages,
      //     year: this.data.year,
      //     education: this.data.education,
      //     leixing: this.data.leixing,
      //     details: this.data.details

      //   },
      //   success:function(res){
      //     wx.showToast({
      //       title: '提交成功',
      //       icon: 'success',
      //       duration: 2000,
      //     },
      //       wx.navigateTo({
      //         url: '../enterprise/enterprise',
      //       })
      //     )
      //   }
      // })
    }
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