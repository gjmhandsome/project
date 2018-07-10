// pages/company/company.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    job_details: "block",
    company_details: "none",
    content:{
       job_name:"前端工程师",
       wages:"10k-15k",
       year: "3-5年",
       education:"本科",
       leixing:"全职",
       adress:"杭州市区内",
       job_introduce:"usiodfuoisadufiosudfioasudfousofd",
       company_name:"阿里巴巴",
       company_controduce: "阿里巴巴网络技术有限公司（简称：阿里巴巴集团）是以曾担任英语教师的马云为首的18人于1999年在浙江杭州创立。阿里巴巴集团经营多项业务，另外也从关联公司的业务和服务中取得经营商业生态系统上的支援。业务和关联公司的业务包括：淘宝网、天猫、聚划算、全球速卖通、阿里巴巴国际交易市场、1688、阿里妈妈、阿里云、蚂蚁金服、菜鸟网络等。2014年9月19日，阿里巴巴集团在纽约证券交易所正式挂牌上市，股票代码“BABA”，创始人和董事局主席为马云。2016年8月，阿里巴巴集团在2016中国企业500强中排名第148位"
    }
    },
   show_job:function(){
      this.setData({
        job_details:"block",
        company_details: "none"
      })
   },
   show_company: function () {
     this.setData({
       company_details: "block",
       job_details: "none",
     })
   },
  
   //投递简历接口
  //  deliver:function(){
  //    wx.request({
  //      url: '',
  //      data:"",
  //      success:function(){
  //        wx.showToast({
  //          title: '投递成功',
  //          icon: 'success',
  //          duration: 2000,
  //        }
  //      }
  //    })
  //  },

  /**
   * 生命周期函数--监听页面显示
   */
  //获取从后台来的数据
  // onShow: function () {
  //     wx.request({
  //       url: '',
  //       success:function(res){
  //            this.setData({
  //              content:res.data
  //            })
  //       }
  //     })
  // },

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