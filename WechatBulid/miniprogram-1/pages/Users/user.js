// pages/Users/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'fuck you World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
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
    var app = getApp()
    var uid = app.globalData.Uid;
    var that = this
    wx.request({
      url: app.globalData.ip+'/WXBack_end_war/userInfo.do',
      method: 'Get',
      data : {
        "Uid" : uid,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {//成功交互后触发
        console.log(res.data)//打印到控制台
        var like = ""
        var dislike = ""
        for(var t = 0;t<res.data.tags.length;t++){
          if(res.data.tags[t].ifLike>0){
            like = like+ " " + res.data.tags[t].name;
          }
          else{
            dislike = dislike+ " " + res.data.tags[t].name;
          }
        }
        for(var c = 0;c<res.data.compositions.length;c++){
          if(res.data.compositions[c].ifLike>0){
            like = like+" "+res.data.compositions[c].name;
          }else{
            dislike = dislike+" "+res.data.compositions[c].name;
          }
        }
        that.setData({age:res.data.age,tags:like,comps:dislike,uname:res.data.uname,uid:res.data.uid})
      }
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

  },

  infoJump(){
    wx.navigateTo({
      url: '/pages/Users/remind'
      })
  },
  RecommandStart(e) {
    wx.navigateTo({
      url: '/pages/recommend/recommend'
      })
}
})