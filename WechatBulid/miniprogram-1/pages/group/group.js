Page({
  data: {
      curNav: 0,
      title:[
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
      content:[
          [
            {
              id:2,
              "name":"用户1"
          },
          {
              id: 2,
              "name": "用户1"
          }],
          [
          {
              id: 2,
              "name": "用户1"
          },
          {
              id: 2,
              "name": "用户1"
          },
          {
              id: 2,
              "name": "用户1"
          }],
          [
          {
              id: 2,
              "name": "用户1"
          },
          {
              id: 2,
              "name": "用户1"
          },
          {
              id: 2,
              "name": "用户1"
          },
          {
              id: 2,
              "name": "用户1"
          }],
          [
          {
              id: 2,
              "name": "用户1"
          },
          {
              id: 2,
              "name": "用户1"
          },
          {
              id: 2,
              "name": "用户1"
          }]
      ],
      ifAdmin:false,
  },

  onLoad:function(){
  },
  onShow :function(){
    var that = this;
      var app = getApp();
      var Uid = app.globalData.Uid;
      wx.request({
        url: app.globalData.ip+'/WXBack_end_war/userGroup.do',
        method: 'Get',
        data : {
          "Uid" : 1,
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {//成功交互后触发
          console.log(res.data)//打印到控制台
          that.setData({title:res.data})
          wx.request({
            url: app.globalData.ip+'/WXBack_end_war/usersofGroup.do',
            method: 'Get',
            data : {
              "Gid" : that.data.title[0].gid,
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success: function (res) {//成功交互后触发
                console.log(res.data)//打印到控制台
                that.setData({content:res.data})
                for(var i = 0;i<res.data.length;i++){
                  if(res.data[i].uid == Uid){
                    that.setData({ifAdmin:res.data[i].ifAdmin})
                  }
                }
            }
          })
        }
      })
  },

  showActionSheet:function(e){
    var user = this.data.content[e.currentTarget.dataset.index]
    var uid = user.uid;
    var ifAdmin = user.ifAdmin;
    var gid = this.data.title[this.data.curNav].gid;
    if(ifAdmin){
      var List = ['查看','删除','解除代理人']
    }else {
      var List = ['查看','删除','设置代理人'] 
    }
    wx.showActionSheet({
      itemList: List,
      success:function(res){
        console.log(res.tapIndex);
        if(res.tapIndex==1){
          wx.request({
            url: app.globalData.ip+'0/WXBack_end_war/userRemove.do',
            method: 'Get',
            data : {
              "Gid" : gid,
              "Uid" : uid,
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success: function (res) {//成功交互后触发
                console.log(res.data)//打印到控制台
            }
          });
        }else if(res.tapIndex==2){
          wx.request({
            url: app.globalData.ip+'/WXBack_end_war/setAdmin.do',
            method: 'Get',
            data : {
              "Gid" : gid,
              "Uid" : uid,
              "ifAdmin" : ((ifAdmin+1)%2)
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success: function (res) {//成功交互后触发
                console.log(res.data)//打印到控制台
            }
          })
        }
      },
      fail:function(res){
        console.log(res.errMsg);
      }
    })
  },
  groupOperate(){
    var that = this;
    console.log(that.data.title[that.data.curNav].gid)
    if(this.data.ifAdmin){
      var List= ['推荐','邀请','创建新群组','解散',]
    }else{
      var List = ['推荐','邀请','创建新群组']
    }
    wx.showActionSheet({
        itemList: List,
        success:function(res){
          console.log(res.tapIndex);
            if(res.tapIndex == 0){
                wx.navigateTo({
                    url: '/pages/group/groupVote?gid='+ that.data.title[that.data.curNav].gid + '&ifadmin='+that.data.ifAdmin +'&gName='+that.data.title[that.data.curNav].name
                    })
            }else if(res.tapIndex == 2){
              wx.navigateTo({
                url: '/pages/group/groupCreate'
                })
            }else if(res.tapIndex == 1){
              wx.navigateTo({
                url: '/pages/group/userinvite?gid='+ that.data.title[that.data.curNav].gid
                })
            }
            else if(res.tapIndex == 3){
              wx.request({
                url: app.globalData.ip+'/WXBack_end_war/GroupDelete.do',
                method: 'Get',
                data : {
                  "Gid" : that.data.title[that.data.curNav].gid,
                },
                header: {
                  'content-type': 'application/json' // 默认值
                },
                success: function (res) {//成功交互后触发
                    console.log(res.data)//打印到控制台
                }
              })
            }
        },
        fail:function(res){
          console.log(res.errMsg);
        }
      })
  },
  switchRightTab:function(e){
    this.setData({
        curNav : e.currentTarget.dataset.index
    })
    var that = this
    var app = getApp()
    console.log(that.data)
    wx.request({
        url: app.globalData.ip+'/WXBack_end_war/usersofGroup.do',
        method: 'Get',
        data : {
          "Gid" : e.currentTarget.dataset.id,
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {//成功交互后触发
          console.log(res.data)//打印到控制台
          that.setData({content:res.data})
        }
      })
  }

})
