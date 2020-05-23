// pages/fgclass/fgclass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ishidden:false,
    showtxt:"我是 只说代码的大饼",
    currnavindex:0,
    rightitemindex:0,
    imgonesrc:"/images/xiaochengxu03.png",
    imgtwosrc:"/images/xiaochengxu01.png",
    txtclasslist:[
    {txt:"热门推荐",url:"/pages/fgclass/purecom/purecom"},
    {txt:"肉类",url:"/pages/fgclass/meateclass/meateclass"},
    {txt:"海鲜",url:"/pages/fgclass/seaclass/seaclass"},
    {txt:"蔬菜",url:"/pages/fgclass/meateclass/meateclass"},
    {txt:"水果",url:"/pages/fgclass/meateclass/meateclass"},
    {txt:"饮料",url:"/pages/fgclass/meateclass/meateclass"}],

    rightcomplist: [{compname:"热门推荐",url:"/pages/fgclass/purecom/purecom"},
    {compname:"肉类",url:"/pages/fgclass/meateclass/meateclass"},
    {compname:"海鲜",url:"/pages/fgclass/seaclass/seaclass"},
    {compname:"蔬菜",url:"/pages/fgclass/meateclass/meateclass"},
    {compname:"水果",url:"/pages/fgclass/meateclass/meateclass"},
    {compname:"饮料",url:"/pages/fgclass/meateclass/meateclass"}],
  },
  bindchangeimg:function(){
    this.setData({
      imgonesrc:"/images/xiaochengxu01.png"
    })
  },
  /**左侧菜单点击事件**/
  leftcatchtap:function(e){
    console.log(e.currentTarget.dataset.curritem);
    this.setData({currnavindex:e.currentTarget.dataset.curritem});
    if(this.data.ishidden===true){
      this.setData({
        ishidden:false
      })
    }else{
      this.setData({
        ishidden:true
      })
    }
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

  }
})