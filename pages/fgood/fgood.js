// pages/fgood/fgood.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sumamount: 0,
    allcheckvalue: false,
    classimglist: [{
        imgsrc: "/images/fruit01.jpg",
        classname: "水果01",
        price: 12,
        checkvalue: false,
        fgcount:1
      },
      {
        imgsrc: "/images/fruit02.jpg",
        classname: "水果02",
        price: 14,
        checkvalue: false,
        fgcount:1
      },
      {
        imgsrc: "/images/fruit03.jpg",
        classname: "水果03",
        price: 11,
        checkvalue: false,
        fgcount:1
      },
      {
        imgsrc: "/images/bever03.jpg",
        classname: "饮料03",
        price: 18,
        checkvalue: false,
        fgcount:1
      }

    ]
  },
  //单选
  leftchage: function (e) {
    //check-group中自定义data-checkindex.
    var chindex = e.currentTarget.dataset.checkindex;
    var ischeck = e.detail.value[0];
    let chvalue = 'classimglist[' + chindex + '].checkvalue';
    if (undefined !== chindex) {
      var checkprice = this.data.classimglist[chindex].price * this.data.classimglist[chindex].fgcount;
      var samount = this.data.sumamount;
      if (undefined !== ischeck) {
        samount += checkprice;
        this.setData({
          [chvalue]: true
        })
      } else {
        samount -= checkprice;
        this.setData({
          [chvalue]: false
        })
      }
      this.setData({
        sumamount: samount
      })
      console.log(samount, this.data.allcheckvalue);
      if (samount == 0) {
        this.setData({
          allcheckvalue: false
        })
      }
    }
  },
  // check all item
  allcheckchange: function (e) {
    var samount = 0;
    for (var i = 0; i < this.data.classimglist.length; i++) {
      // console.log(this.data.classimglist[i])
      console.log(e.detail);
      let chvalue = 'classimglist[' + i + '].checkvalue';
      if (this.data.classimglist[i].checkvalue === false) {
        samount += this.data.classimglist[i].price* this.data.classimglist[i].fgcount;
        console.log(chvalue)
        this.setData({
          [chvalue]: true,
          allcheckvalue: true
        })
      } else {
        samount -= this.data.classimglist[i].price* this.data.classimglist[i].fgcount;
        samount = samount <= 0 ? 0 : samount;
        if (samount === 0 && this.data.allcheckvalue === true) {
          this.setData({
            allcheckvalue: false,
            allcheckvalue: false
          })
        }

        this.setData({
          [chvalue]: false,
          sumamount: samount
        })
      }
    }
    this.setData({
      sumamount: samount
    })
  },
  /**减数量**/
  bindsub: function (e) {
    // var samount = 0; //钱先不算。
    var index = e.currentTarget.dataset.subindex;
    let count = 'classimglist[' + index + '].fgcount';
    var list = this.data.classimglist[index];
    if (list.fgcount > 1) {
      this.setData({
        [count]: list.fgcount - 1
      })
    }

    var samount = 0;this.data.sumamount;
    for (var i = 0; i < this.data.classimglist.length; i++) {

      if (this.data.classimglist[i].checkvalue === true) {
        samount += this.data.classimglist[i].price* this.data.classimglist[i].fgcount;
        samount = samount <= 0 ? 0 : samount;
        this.setData({
          sumamount: samount
        })
      }
    }
    this.setData({
      sumamount: samount
    })
  },
  bindadd:function(e){
    //var samount = 0; //钱先不算。
    var index = e.currentTarget.dataset.addindex;
    var list = this.data.classimglist[index];
    let count = 'classimglist[' + index + '].fgcount';
    console.log(list.fgcount)
    if (list.fgcount >= 1 && list.fgcount<999) {
      this.setData({
        [count]: list.fgcount + 1
      })
    }
    // console.log(list.fgcount,list.price,list.checkvalue )
    var samount = 0;
    for (var i = 0; i < this.data.classimglist.length; i++) {
      let chvalue = 'classimglist[' + i + '].checkvalue';
      if (this.data.classimglist[i].checkvalue === true) {
        samount += this.data.classimglist[i].price* this.data.classimglist[i].fgcount;
      } 
    }
    this.setData({
      sumamount: samount
    })
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