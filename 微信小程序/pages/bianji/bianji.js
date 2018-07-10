// pages/bianji/bianji.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    sex: "",
    age: "",
    adress: "",
    phone: "",
    emil: "",
    job_adress: "",
    job: "",
    job_ep: "",
    school: "",
    xueli: "",
    zhuanye: "",
    time: ""
  },
  // 获取输入账号  
  nameInput: function (e) {
    this.setData({
      name: e.detail.value
    })
  },

  // 获取输入密码  
  sexInput: function (e) {
    this.setData({
      sex: e.detail.value
    })
  },
  // 获取输入账号  
  ageInput: function (e) {
    this.setData({
      age: e.detail.value
    })
  },

  // 获取输入密码  
  adressInput: function (e) {
    this.setData({
      adress: e.detail.value
    })
  },
  // 获取输入账号  
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取输入密码  
  emilInput: function (e) {
    this.setData({
      emil: e.detail.value
    })
  },
  // 获取输入账号  
  job_adressInput: function (e) {
    this.setData({
      job_adress: e.detail.value
    })
  },

  // 获取输入密码  
  jobInput: function (e) {
    this.setData({
      job: e.detail.value
    })
  },
  // 获取输入账号  
  job_epInput: function (e) {
    this.setData({
      job_ep: e.detail.value
    })
  },

  // 获取输入密码  
  schoolInput: function (e) {
    this.setData({
      school: e.detail.value
    })
  },
  // 获取输入账号  
  xueliInput: function (e) {
    this.setData({
      xueli: e.detail.value
    })
  },

  // 获取输入密码  
  zhuanyeInput: function (e) {
    this.setData({
      zhuanye: e.detail.value
    })
  },
  // 获取输入账号  
  timeInput: function (e) {
    this.setData({
      time: e.detail.value
    })
  },

 
  //保存，把数据传送给后台
  save:function(){
      // wx.request({
      //   url: '',
      //   data:{
      //     name: this.data.name,
      //     sex: this.data.sex,
      //     age: this.data.age,
      //     adress: this.data.adress,
      //     phone: this.data.phone,
      //     emil: this.data.emil,
      //     job_adress: this.data.adress,
      //     job: this.data.job,
      //     job_ep: this.data.job_ep,
      //     school: this.data.school,
      //     xueli: this.data.xueli,
      //     zhuanye: this.data.zhuanye,
      //     time: this.data.time
      //   },
      //   success:function(){
      //     wx.showToast({
      //       title: '保存成功',
      //       icon: 'success',
      //       duration: 2000,
      //     },
      //     wx.navigateTo({
      //       url: '../cv/cv',
      //     })
      //     }
      // })
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
  //从本地缓存中加载数据
  onShow: function () {
    var message = wx.getStorageSync('message');
    this.setData({
      name:message.name,
      sex: message.sex,
      age: message.age,
      adress: message.adress,
      phone: message.phone,
      emil: message.emil,
      job_adress: message.job_adress,
      job: message.job,
      job_ep: message.job_ep,
      school: message.school,
      xueli: message.xueli,
      zhuanye: message.zhuanye,
      time: message.time
    })
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