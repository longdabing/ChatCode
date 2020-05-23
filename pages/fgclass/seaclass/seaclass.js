// pages/fgclass/seaclass/seaclass.js
var utils = require("../../../utils/util.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {
   nowtime:"",
   classimglist:[
    {imgsrc:"/images/market.png",classname:"京东超市"},
    {imgsrc:"/images/electrica.png",classname:"数码电器"},
    {imgsrc:"/images/dress.png",classname:"京东服饰"},
    {imgsrc:"/images/fresh.png",classname:"京东生鲜"},
    {imgsrc:"/images/tohome.png",classname:"京东到家"},
    {imgsrc:"/images/market.png",classname:"充值缴费"},
    {imgsrc:"/images/electrica.png",classname:"9.9元拼"},
    {imgsrc:"/images/dress.png",classname:"京东领券"},
    {imgsrc:"/images/fresh.png",classname:"京东赚钱"},
    {imgsrc:"/images/tohome.png",classname:"Plus会员"},
]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var dt = new Date();
    this.setData({
      nowtime:utils.formatTime(dt)
    })
    console.log(dt);
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