// pages/recommend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Recipes:{

    },
    ifchecked:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app = getApp()
    var uid = app.globalData.Uid;
    var that = this;
    wx.request({
      url: app.globalData.ip+'/WXBack_end_war/recommendofUser.do',
      method: 'Get',
      data : {
        "uid" : uid,
        "page" : 0
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {//成功交互后触发
        console.log(res.data)//打印到控制台
       that.setData({Recipes: res.data})
        
      }
  })
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

  },
  doCheck(e){
    console.log(e.detail.value)
    this.setData({ifchecked:e.detail.value})
  },
  Order(){
    var app = getApp();
    var Uid = app.globalData.Uid;
    var ifchecked = this.data.ifchecked;
    for (var i=0;i<ifchecked.length;i++){
      wx.request({
        url: app.globalData.ip+'/WXBack_end_war/userOrder.do',
        method: 'Get',
        data : {
          "Uid" : Uid,
          "Pid" : parseInt(ifchecked[i]),
          "ifAgree" : 1, 
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {//成功交互后触发
          console.log(res.data)//打印到控制台
        }
      }) 
    }
  }
})