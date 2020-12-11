//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    indexname: "我是 只说代码的大饼",
    imglist: ["../../images/xiaochengxu01.png", "../../images/xiaochengxu03.png", "../../images/xiaochengxu02.png"],
    imgscroll: ["../../images/xiaochengxu01.png", "../../images/xiaochengxu03.png", "../../images/xiaochengxu02.png"],
    classimglist: [{
        imgsrc: "/images/market.png",
        classname: "京东超市"
      },
      {
        imgsrc: "/images/electrica.png",
        classname: "数码电器"
      },
      {
        imgsrc: "/images/dress.png",
        classname: "京东服饰"
      },
      {
        imgsrc: "/images/fresh.png",
        classname: "京东生鲜"
      },
      {
        imgsrc: "/images/tohome.png",
        classname: "京东到家"
      },
      {
        imgsrc: "/images/market.png",
        classname: "充值缴费"
      },
      {
        imgsrc: "/images/electrica.png",
        classname: "9.9元拼"
      },
      {
        imgsrc: "/images/dress.png",
        classname: "京东领券"
      },
      {
        imgsrc: "/images/fresh.png",
        classname: "京东赚钱"
      },
      {
        imgsrc: "/images/tohome.png",
        classname: "Plus会员"
      },
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
   //事件处理函数,跳转到tabbar 中的分类页面。
   bindswitchTab: function () {
    wx.switchTab({
      url: '../fgclass/fgclass'
    })
  },
  /**组件绑定的事件**/
  searchtxt: function (e) {
    //这里的e就是search-comp组件给页面的值。
    console.log(e.detail.value);
    wx.showModal({
      title: "提示:",
      content: e.detail.value,
      showCancel: true
    })
  },
  /**如何调用子组件中的方法，而不是用触发事件**/
  inlogin: function () {
    this.selectComponent("#searchid").indexlogin('只说代码的大饼')
  },
  /**图片预览 2020.5.23**/
  priviewImage:()=>{
  
    wx.chooseImage({
      complete: (res) => {
        console.log(res);
        wx.previewImage({
          current:res.tempFilePaths[0],
          urls: [res.tempFilePaths[0]],
        })
      },
    })
    // wx.previewImage({
    //   current:"https://p0.meituan.net/movie/5d4fa35c6d1215b5689257307c461dd2541448.jpeg",
    //   urls: ["https://p0.meituan.net/movie/5d4fa35c6d1215b5689257307c461dd2541448.jpeg","http://images/meate01.jpg"],
    // })
  },
  onLoad: function () {

  },
  getUserInfo: function (e) {

  }
})