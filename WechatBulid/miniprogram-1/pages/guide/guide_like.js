// pages/guide/guide_like.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:[
      {
          tid:0,
          "name":"类型1",
          chooseed : true
      },
      {
          tid: 1,
          "name": "类型1",
          chooseed : false
      },
      {
          tid: 2,
          "name": "类型1",
          chooseed : false
      },
      {
          tid: 3,
          "name": "类型1",
          chooseed : false
      },
      {
          tid: 4,
          "name": "类型1",
          chooseed : false
      },
      {
          tid: 5,
          "name": "类型1",
          chooseed : false
      },
      {
          tid: 6,
          "name": "类型1",
          chooseed : false
      }
    ],
    selectTags : []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    let tags = wx.getStorageSync('Tags')
    for(var i =0;i<tags.length;i++){
      tags[i].chooseed = false
    }
    console.log(tags)
    this.setData({content : tags})
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
    var str = "";
    if(this.data.selectTags.length>0){
      str = str+this.data.selectTags[0];
    }
    for(var i=1;i<this.data.selectTags.length;i++){
      str = str+","+this.data.selectTags[i];
    }
    console.log(str)
    var app = getApp();
    app.globalData.likeTags = str;

    wx.navigateTo({
      url: '/pages/guide/guide_dislike'
    })
  },
  chooseItem(e){
    var id = "content[" + e.currentTarget.dataset.id + "].chooseed"
    // console.log(id,this.data.content[e.currentTarget.dataset.id])
    var selectTags = this.data.selectTags;
    var chooseed = this.data.content[e.currentTarget.dataset.id].chooseed
    if(!chooseed){
      selectTags.push(this.data.content[e.currentTarget.dataset.id].tid);
    }else{
      var index = selectTags.indexOf(this.data.content[e.currentTarget.dataset.id].tid);
      selectTags.splice(index,1);
    }
    this.setData({
        [id] : !chooseed,
        selectTags:selectTags
    })
    
  }
})