// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'fuck you World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    var Uid = 1;
    wx.setStorageSync('Uid', Uid);
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  surveyStart(e){
    wx.navigateTo({
      url: '/pages/guide/guide_info'
    })
  },

  orderStart(){
    wx.navigateTo({
      url: '/pages/goodList/index?ifGroup=0'
    })
  },
  testBack_end(){
    var list = [1,3,2];
    var c = list.indexOf(3);
    console.log(c)
    list.splice(c,1);
    console.log(list)
    // wx.request({
    //   url: 'http://localhost:8080/WXBack_end_war/taginfo.do',
    //   method: 'Get',
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {//成功交互后触发
    //     console.log(res.data)//打印到控制台
    //   }
    // })
    // wx.login({
    //   success (res) {
    //     console.log("用户的code:" + res.code);
    //     if (res.code) {
    //       //发起网络请求
    //       wx.request({
    //           // 自行补上自己的 APPID 和 SECRET
    //           url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wxc3f404ae4e2eaed7&secret=046cfec1d3b38f32b447ba15bb0ecd7a&js_code=' + res.code + '&grant_type=authorization_code',
    //           success: res => {
    //               // 获取到用户的 openid
    //               console.log(res)
    //               console.log("用户的openid:" + res.data.openid);
    //           }
    //         });
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // })
  },

})
