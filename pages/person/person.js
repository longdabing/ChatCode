// pages/personal/personal.js
// var utils = require("../../utils/util.js")
// var wsocket = require("../../utils/socket.js");
let app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hage: 18,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    wscoket:WebSocket,
    msg:'小程序'
  },

  opensocket:function(){
     this.data.wscoket = wx.connectSocket({
      url: 'ws://localhost:50596/api/WSocket?fname=longdb',
    });
    this.data.wscoket.onOpen(res=>{
      console.log("连接成功！");
    });

    this.data.wscoket.onMessage(res=>{
      console.log(res,222);
      this.setData({
        msg:res.data
      })
    })
    this.data.wscoket.onClose(()=>{
      console.log("close");
    })
  },
  onmessage:function(res){
    this.setData({
      msg:res.Data
    });
    alert(res.Data)
  },
//发送内容
senddata: function () {
  if (this.data.wscoket.readyState == this.data.wscoket.OPEN) {
    this.data.wscoket.send({
      data: (JSON.stringify({
        RoomId:'1001',
            DataType: 0,
            SendType: 1,
            Data: '小程序发送的内容',
            SenderName:'小程序'
        })),
      success: () => {
        console.info('客户端发送成功');
      }
    });
  } else {
    console.error('连接已经关闭');
  }
},
//关闭连接
closesocket: function () {
  wscoket.close();
},
    
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(utils.formatTime(new Date()));
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  getUserInfo: function (e) {
    console.log(e)
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    }
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

  }
})