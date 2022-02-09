// pages/goodList/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:[
      {
          "id":0,
          "name":"商品1"
      },
      {
          "id": 1,
          "name": "商品2"
      },
      {
          "id": 2,
          "name": "商品3"
      },
      {
          "id": 3,
          "name": "商品4"
      },
      {
          "id": 4,
          "name": "商品5"
      }
  ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var ifGroup = options.ifGroup;
    this.setData({ifGroup:ifGroup})
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
    var app = getApp();
    var caft = app.globalData.caft;
    console.log(caft)
    this.setData({title:caft})
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
  itemOperate(event){
    var id = event.currentTarget.dataset.pid
    var caft = this.data.title;
    var that = this;
    wx.showActionSheet({
        itemList: ['删除'],
        success:function(res){
          console.log(res.tapIndex);
          delete caft[id];
          that.setData({title:caft})
        },
        fail:function(res){
          console.log(res.errMsg);
        }
      })
  },
  recommendItem(){
    var app = getApp();
    var Uid = app.globalData.Uid;
    if(this.data.ifGroup>0){
      var Pid = ""
      for (var key in this.data.title) {
        Pid = Pid + key+",";
      }
      var Gid = app.globalData.Gid;
      console.log(Gid,Uid,Pid)
      wx.request({
        url: 'http://localhost:8080/WXBack_end_war/newRecommend.do',
        method: 'Get',
        data : {
          "Gid" : Gid,
          "Uid" : Uid,
          "Pid" : Pid,
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {//成功交互后触发
          console.log(res.data)//打印到控制台
        }
      })  
    }else{
      for (var key in this.data.title) {
        wx.request({
          url: 'http://localhost:8080/WXBack_end_war/userOrder.do',
          method: 'Get',
          data : {
            "Uid" : Uid,
            "Pid" : key,
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
  }
})