// pages/user2/user2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     content:[
       { job: "前端工程师", wages: "15k-20k", company: "阿里" }, { job: "前端工程师", wages: "15k-20k", company: "阿里" }, { job: "前端工程师", wages: "15k-20k", company: "阿里" }, { job: "前端工程师", wages: "15k-20k", company: "阿里" }, { job: "前端工程师", wages: "15k-20k", company: "阿里" }, { job: "前端工程师", wages: "15k-20k", company: "阿里" }, { job: "前端工程师", wages: "15k-20k", company: "阿里" }, { job: "前端工程师", wages: "15k-20k", company: "阿里" }, { job: "前端工程师", wages: "15k-20k", company: "阿里" }, { job: "前端工程师", wages: "15k-20k", company: "阿里" }, { job: "前端工程师", wages: "15k-20k", company: "阿里" }, { job: "前端工程师", wages: "15k-20k", company: "阿里" }, { job: "前端工程师", wages: "15k-20k", company: "阿里" }, { job: "前端工程师", wages: "15k-20k", company: "阿里" }, { job: "前端工程师", wages: "15k-20k", company: "阿里" }, { job: "前端工程师", wages: "15k-20k", company: "阿里" }, { job: "前端工程师", wages: "15k-20k", company: "阿里" }, { job: "前端工程师", wages: "15k-20k", company: "阿里" }
     ],
     pageindex:1,
     count:10,
     Loading:false,
     Complete:false
  },
  //跳转到对应的公司招聘界面
  tocompany:function(){
    wx.navigateTo({
      url: '../company/company',
    })
  },
  //每次上拉加载
   loadingmore:function(){
       this.setData({
         content: this.data.content.concat([{ job: "java", wages: "15k-20k", company: "阿里" }]),
         Loading:true
       })
       //一次获取后台count条数据
      // wx.request({
      //   url: '',
      //   data:{
      //         count:10,
      //         pageindex:this.data.pageindex
      //   },
      //   success:function(res){
      //     this.setData({
      //       content: this.data.content.concat(res.data),
      //       Loading: true,
      //       pageindex:res.pageindex
      //     })
      //   }
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