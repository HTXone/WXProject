// pages/group/groupVote.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:[
      {
          "id":0,
          "pname":"商品1",
          "uname" : 1, 
          "agreeUsers":[1,2,3,4],

      },
      {
          "id": 1,
          "pname": "商品2",
          "uname" : 1, 
          "agreeUsers":[1,2,3,4],
          
      },
      {
          "id": 2,
          "pname": "商品3",
          "uname" : 1, 
          "agreeUsers":[1,2,3,4],
      },
      {
          "id": 3,
          "pname": "商品4",
          "uname" : 1, 
          "agreeUsers":[1,2,3,4],
      },
      {
          "id": 4,
          "pname": "商品5",
          "uname" : 1, 
          "agreeUsers":[1,2,3,4],
      }
  ],
    gName:"群组",
    gNumber:["111","222"],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var gid = options.gid;
    var ifAdmin = options.ifadmin;
    var app = getApp()
    var that = this
    this.setData({gName:options.gName})
    wx.request({
      url: app.globalData.ip+'/WXBack_end_war/recommendofGroup.do',
      method: 'Get',
      data : {
        "Gid" : gid,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {//成功交互后触发
        console.log(res.data)//打印到控制台
        that.setData({content:res.data,gid:gid,ifAdmin:ifAdmin})
      }
    })
    wx.request({
      url: app.globalData.ip+'/WXBack_end_war/usersofGroup.do',
      method: 'Get',
      data : {
        "Gid" : gid,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {//成功交互后触发
          console.log(res.data)//打印到控制台
          var GNS = ""+res.data[0].uname
          for(var gn =1;gn<res.data.length;gn++){
            GNS = GNS+","+(res.data[gn].uname)
          }
          that.setData({gNumber:GNS})
      }
    })
    console.log
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
  getRecommendInfo:function(){
    var that = this
    wx.request({
      url: app.globalData.ip+'/WXBack_end_war/recommendofGroup.do',
      method: 'Get',
      data : {
        "Gid" : that.data.gid,
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

  itemOperate(e){
    var that = this;
    var app = getApp();
    var Uid = app.globalData.Uid;
    var recommend = this.data.content[e.currentTarget.dataset.id];
    console.log(e.currentTarget.dataset.id)
    
    var List1  = ['选择','否决']
    
    console.log(List1)
    wx.showActionSheet({
        itemList: List1,
        success:function(res){
          console.log(res.tapIndex);
            if(res.tapIndex == 0){
              wx.request({
                url: app.globalData.ip+'/WXBack_end_war/agreeRecommend.do',
                method: 'Get',
                data :{
                  "Uid" : Uid,
                  "Rid": recommend.rid,
                  "ifAgree" : 1,
                },
                header: {
                  'content-type': 'application/json' // 默认值
                },
                success: function (res) {//成功交互后触发
                  console.log(res.data)//打印到控制台
                  that.getRecommendInfo();
                }
              })
            }
            else if (res.tapIndex == 1){
              wx.request({
                url: 'http://localhost:8080/WXBack_end_war/groupOrder.do',
                method: 'Get',
                data :{
                  "Gid":that.data.gid,
                  "Pid": recommend.pid,
                  "Rid": recommend.rid,
                  "ifAgree" : 1
                },
                header: {
                  'content-type': 'application/json' // 默认值
                },
                success: function (res) {//成功交互后触发
                  console.log(res.data)//打印到控制台
                  that.getRecommendInfo()
                }
              })
            }else{
              wx.request({
                url: app.globalData.ip+'/WXBack_end_war/agreeRecommend.do',
                method: 'Get',
                data :{
                  "Uid" : Uid,
                  "Rid": recommend.rid,
                  "ifAgree" : 0,
                },
                header: {
                  'content-type': 'application/json' // 默认值
                },
                success: function (res) {//成功交互后触发
                  console.log(res.data)//打印到控制台
                  that.getRecommendInfo();
                }
              })
            }
        },
        fail:function(res){
          console.log(res.errMsg);
        }
      })
  },
  infoJump(){
    var app = getApp();
    var Uid = app.globalData.Uid;
    var Gid = this.data.gid;
    wx.request({
      url: app.globalData.ip+'/WXBack_end_war/newRecommend.do',
      method: 'Get',
      data : {
        "Gid" : Gid,
        "Uid" : Uid,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {//成功交互后触发
        console.log(res.data)//打印到控制台
      }
    })  
    this.getRecommendInfo();
    
  }
})