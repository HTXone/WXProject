// pages/group/groupCreate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    relationships:[{title:"家庭",num:"family"},{title:"工作",num:"work"},{title:"好友",num:"friends"},{title:"伴侣",num:"companion"},{title:"同事",num:"colleague"}],
    RS : "family",
    UName:"",
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

  },
  AgeChange:function(e){
    let v = e.detail.value;
    console.log(v,this.data.relationships[v[0]].title)
    this.setData({RS:this.data.relationships[v[0]].num})
  },
  UNameChange:function(e){
    this.setData({UName:e.detail.value})
  },
  nextPage(){
    var app = getApp()
    var relationships = this.data.RS;
    var UName = this.data.UName;
    var uid = app.globalData.Uid;
    wx.request({
      url: 'url',
    })
    wx.request({
      url: app.globalData.ip+'/WXBack_end_war/newGroup.do',
      method: 'Get',
      data : {
        "Uid" : uid,
        "GName" : UName,
        "relationship" : relationships,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {//成功交互后触发
        console.log(res.data)//打印到控制台
        wx.setStorageSync('Comps', res.data)
        wx.switchTab({
          url: '/pages/group/group',
        })
      }
    })
  }
})