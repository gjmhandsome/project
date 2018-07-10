Page({
  data: {
    phone: '',
    password: ''
  },

  // 获取输入账号  
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取输入密码  
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  qy_login:function(){
      wx.navigateTo({
        url: '../qy_login/qy_login',
      })
  },
  // 登录  
  login: function () {
    if (this.data.phone.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '用户名和密码不能为空',
        icon: 'loading',
        duration: 2000
      })
    } 
    else {
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 2000,
       },
        wx.switchTab({
          url: '../user/user',
        })
      )
    }
  //   else {
  //     wx.request({
  //       url: '',
  //       data:{phone:this.data.phone,password:this.data.password},
  //       success:function(res){
  //         //传回数据若为1，则数据库中有该账户信息
  //           if(res.data=='1') {
  //             wx.showToast({
  //               title: '登陆成功',
  //               icon:'success',
  //               duration:2000,
  //             })
  //           }else{
  //             wx.showToast({
  //               title: '登陆失败  ',
  //               icon: 'loading',
  //               duration: 2000,
  //             })
  //           }
  //       }
  //     })
  //   }
    }
  
})  