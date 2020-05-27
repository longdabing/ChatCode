// pages/fgood/fgood.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fgcount: 1,
    sumamount: 0,
    allcheckvalue: false,
    classimglist: [{
        imgsrc: "/images/fruit01.jpg",
        classname: "水果01",
        price: 12,
        checkvalue: false
      },
      {
        imgsrc: "/images/fruit02.jpg",
        classname: "水果02",
        price: 14,
        checkvalue: false
      },
      {
        imgsrc: "/images/fruit03.jpg",
        classname: "水果03",
        price: 11,
        checkvalue: false
      },
      {
        imgsrc: "/images/bever03.jpg",
        classname: "饮料03",
        price: 18,
        checkvalue: false
      }

    ]
  },
  //单选
  leftchage: function (e) {
    //check-group中自定义data-checkindex.
    var chindex = e.currentTarget.dataset.checkindex;
    var ischeck = e.detail.value[0];

    if (undefined !== chindex) {
      var checkprice = this.data.classimglist[chindex].price;
      var samount = this.data.sumamount;
      if (undefined !== ischeck) {
        samount += checkprice;
      } else {
        samount -= checkprice;
      }
 
      this.setData({
        sumamount: samount
      })
      console.log(samount,this.data.allcheckvalue);
      if (samount == 0) {
        this.setData({
          allcheckvalue: false
        })
      }
    }
  },
  // check all item
  allcheckchange: function (e) {
    var samount = this.data.sumamount;
    for (var i = 0; i < this.data.classimglist.length; i++) {
      // console.log(this.data.classimglist[i])
      console.log(e.detail);
      let chvalue = 'classimglist[' + i + '].checkvalue';
      if (this.data.classimglist[i].checkvalue === false) {
        samount += this.data.classimglist[i].price;
        console.log(chvalue)
        this.setData({
          [chvalue]: true,
          sumamount: samount,
          allcheckvalue:true
        })
      } else {
        samount -= this.data.classimglist[i].price;
        samount = samount <= 0 ? 0 : samount;
        if (samount === 0 && this.data.allcheckvalue === true) {
          this.setData({
            allcheckvalue: false,
            allcheckvalue:false
          })
        }
        console.log(chvalue)
        this.setData({
          [chvalue]: false,
          sumamount: samount
        })
      }
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