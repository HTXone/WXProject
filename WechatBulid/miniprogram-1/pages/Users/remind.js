// pages/Users/remind.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:[
      {
          "gid":0,
          "name":"群组1"
      },
      {
          "gid": 1,
          "name": "群组2"
      },
      {
          "gid": 2,
          "name": "群组3"
      },
      {
          "gid": 3,
          "name": "群组4"
      },
      {
          "gid": 4,
          "name": "群组5"
      }
  ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/WXBack_end_war/userGroup.do',
      method: 'Get',
      data : {
        "Uid" : 1,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {//成功交互后触发
        console.log(res.data)//打印到控制台
        that.setData({content:res.data})
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
  goRecommend : function(event){
    var gid = event.currentTarget.dataset.gid
    wx.navigateTo({
      url: '/pages/group/groupVote?gid='+gid
      })
  }
})