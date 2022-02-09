// pages/guide/guide_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    age:[{title:"<10",num:5},{title:"10~20",num:10},{title:"20~30",num:20},{title:"30~40",num:30},{title:"40~50",num:40},{title:"50~60",num:50},{title:"60~70",num:60},{title:">70",num:70}],
    Age : 5,
    Gender:"male",
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
  nextPage(){
    console.log(this.data.Age,this.data.Gender,this.data.UName)
    var app = getApp()
    app.globalData.Age = this.data.Age;
    app.globalData.Gender = this.data.Gender;
    app.globalData.UName = this.data.UName;
    wx.request({
      url: 'url',
    })
    wx.request({
      url: app.globalData.ip+'/WXBack_end_war/compsinfo.do',
      method: 'Get',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {//成功交互后触发
        console.log(res.data)//打印到控制台
        wx.setStorageSync('Comps', res.data)
      }
    })
    wx.request({
      url: app.globalData.ip+'/WXBack_end_war/taginfo.do',
      method: 'Get',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {//成功交互后触发
        console.log(res.data)//打印到控制台
        wx.setStorageSync('Tags', res.data)
        wx.navigateTo({
          url: '/pages/guide/guide_like'
        })
      }
    })
   
  },
  AgeChange:function(e){
    let v = e.detail.value;
    console.log(v,this.data.age[v[0]].num)
    this.setData({Age:this.data.age[v[0]].num})
  },
  GenderChange:function(e){
    console.log(e.detail.value)
    this.setData({Gender:e.detail.value})
  },
  UNameChange:function(e){
    this.setData({UName:e.detail.value})
  }
})