// app.js
App({
  // 生命周期函数
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  
  //全局函数
  getUserInfo(){
  var that = this

  },

  //全局数据
  globalData: {
    userInfo: null,
    Uid :1,
    caft : {},
    ip : "http://47.104.212.160:8080",
  }
})



// {
//   "pagePath": "pages/recommend/index",
//   "iconPath": "images/nav/qh-off.png",
//   "selectedIconPath": "images/nav/qh-on.png",
//   "text": "推荐"
// }