
Page({
  data: {
      curNav: 0,
      caft:{},
      title:[
          {
              "id":0,
              "name":"本日推荐"
          },
          {
              "id": 1,
              "name": "类型1"
          },
          {
              "id": 2,
              "name": "类型2"
          },
          {
              "id": 3,
              "name": "类型3"
          },
          {
              "id": 4,
              "name": "类型4"
          }
      ],
      content:[ 
          {
              gid:2,
              "name":"商品1"
          },
          {
              gid: 2,
              "name": "商品1"
          },
          [
          {
              id: 2,
              "name": "商品1"
          },
          {
              id: 2,
              "name": "商品1"
          }],
          [
          {
              id: 2,
              "name": "商品1"
          },
          {
              id: 2,
              "name": "商品1"
          }],
          [
          {
              id: 2,
              "name": "商品1"
          },
          {
              id: 2,
              "name": "商品1"
          },
          {
              id: 2,
              "name": "商品1"
          }]
      ]
  },
  switchRightTab:function(e){
    var that = this;
    this.setData({
        curNav : e.currentTarget.dataset.id
    })
    wx.request({
        url: 'http://localhost:8080/WXBack_end_war/recommendofClass.do',
        method: 'Get',
        data : {
          "Uid" : 1,
          "classes" : that.data.curNav
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
  goCart(){
    var app = getApp()
    app.globalData.caft = this.data.caft;
    var ifGroup = this.data.ifGroup
    console.log(ifGroup)
    wx.navigateTo({
        url: '/pages/goodList/cart?ifGroup='+ifGroup
        })
  },
  onLoad : function (options){
    var ifGroup = options.ifGroup;
    var that = this;
    wx.request({
        url: 'http://localhost:8080/WXBack_end_war/recommendofClass.do',
        method: 'Get',
        data : {
          "Uid" : 1,
          "classes" : 0
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {//成功交互后触发
          console.log(res.data)//打印到控制台
          that.setData({content:res.data,ifGroup:ifGroup})
        }
      })  
  },
  onReady: function () {
    //获得popup组件
    this.popup = this.selectComponent("#popup")
    console.log(this.popup)
  },
 
  showPopup() {
    this.popup.showPopup();
  }, //取消事件
  _error() {
    console.log('你点击了取消');
    this.popup.hidePopup();
  },
  //确认事件
  _success() {
    console.log('你点击了确定');
    this.popup.hidePopup();
  },

  setProjectInCaft(e,recipe){
    pid = e.target.id;
    var caftList = wx.getStorageSync('caftList') || {};
    var p = caftList[pid];
    if(p == null){
        caftList[pid] = recipe
    }
    wx.setStorageSync('caftList', caftList)
  },
  onShow(){
      var app = getApp()
      console.log("BACK")
      this.setData({caft:app.globalData.caft})
  },
  
  checkItems(event){
      var caft = this.data.caft;
      var pid =event.currentTarget.dataset.gid;
      var recipe = this.data.content[pid];
      console.log(recipe)
      pid =recipe.pid;
      if(caft[pid]){
          delete caft[pid];
      }else{
          caft[pid] = recipe;
      }
      this.setData({caft:caft})
  }
})
