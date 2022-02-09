// pages/guide/guide_like.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:[
      {
          id:0,
          "name":"食材1",
          chooseed : 1
      },
      {
          id: 1,
          "name": "食材1",
          chooseed : 0
      },
      {
          id: 2,
          "name": "食材1",
          chooseed : 0
      },
      {
          id: 3,
          "name": "食材1",
          chooseed : 0
      },
      {
          id: 4,
          "name": "食材1",
          chooseed : 0
      },
      {
          id: 5,
          "name": "食材1",
          chooseed : 0
      },
      {
          id: 6,
          "name": "食材1",
          chooseed : 0
      }
    ],
    likefoods:[],
    dislikefoods:[],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let comps = wx.getStorageSync('Comps')
    for(var i =0;i<comps.length;i++){
      comps[i].chooseed = 0
    }
    console.log(comps)
    this.setData({content : comps})
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
  nextPage(e){
    var likestr = "";
    var dislikestr = ""
    if(this.data.likefoods.length>0){
      likestr = likestr+this.data.likefoods[0];
    }
    for(var i=1;i<this.data.likefoods.length;i++){
      likestr = likestr+","+this.data.likefoods[i];
    }
    if(this.data.dislikefoods.length>0){
      dislikestr = dislikestr+this.data.dislikefoods[0];
    }
    for(var i=1;i<this.data.dislikefoods.length;i++){
      dislikestr = dislikestr+","+this.data.dislikefoods[i];
    }
  
    var app = getApp();
    var liketags = app.globalData.likeTags;
    var disliketags = app.globalData.dislikeTags;
    var uid = app.globalData.Uid;
    var age = app.globalData.Age;
    var gender = app.globalData.Gender;
    var Uname = app.globalData.UName;

    console.log(uid,Uname,likestr,dislikestr,liketags)

    wx.request({
      url: app.globalData.ip+'/WXBack_end_war/updateUserInfo.do',
      method: 'Get',
      data : {
        "age":age,
        "UName":Uname,
        "Gender":gender,
        "likeC":likestr,
        "dlikeC":dislikestr,
        "likeT":liketags,
        "dlikeT":disliketags,
        "Userid":uid,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {//成功交互后触发
        console.log(res.data)//打印到控制台
      }
    })
    // wx.navigateTo({
    //   url: '/pages/recommend/recommend'
    // })

    wx.switchTab({
      url: '/pages/Users/user',
    })

  },
  chooseItem(e){
    var id = "content[" + e.currentTarget.dataset.id + "].chooseed"

    var likeFoods = this.data.likefoods;
    var disLikeFoods = this.data.dislikefoods;
    var chooseed = this.data.content[e.currentTarget.dataset.id].chooseed
    chooseed = (chooseed+1)%3
    console.log(chooseed)
    if(chooseed == 0){
      var index = disLikeFoods.indexOf(this.data.content[e.currentTarget.dataset.id].cid);
      disLikeFoods.splice(index,1);
      
    }else if(chooseed < 2){
      likeFoods.push(this.data.content[e.currentTarget.dataset.id].cid);
    }else {
      var index = likeFoods.indexOf(this.data.content[e.currentTarget.dataset.id].cid);
      likeFoods.splice(index,1);
      disLikeFoods.push(this.data.content[e.currentTarget.dataset.id].cid);
    }
    this.setData({
        [id] : chooseed
    })
    
  }
})