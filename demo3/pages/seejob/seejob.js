// pages/seejob/seejob.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cv: [
      { name: "张三", sex: "男", age: "21", adress: "北京", phone: "1234", emil: "163.com", job_adress: "杭州", job: "前端工程师", job_ep: "无", school: "哈理工", xueli: "本科", zhuanye: "软件工程", time: "2019" }, { name: "李四", sex: "男", age: "21", adress: "北京", phone: "1234", emil: "163.com", job_adress: "杭州", job: "前端工程师", job_ep: "无", school: "哈理工", xueli: "本科", zhuanye: "软件工程", time: "2019" }
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
  //从后台获取数据
  // onShow: function () {
  //      wx.request({
  //        url: '',
  //        success:function(res){
  //           this.setData({
  //             cv:res.data
  //           })
  //        }
  //      })
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