// component/searchcomp/search-comp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    searchcompdata: {
      type: String,
      value: "查找 大饼"
    }
  },
  externalClasses: ["search-style"],
  /**
   * 组件的初始数据
   */
  data: {
    username: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindSearch: function (e) {
      console.log(e);
      this.triggerEvent("searchtxt", e.detail);
    },
    indexlogin: function (name) {
      var temthis = this;
      this.setData({
        username: name
      })
      console.log(name);
      wx.showModal({
        title: '提示',
        content: name
      })
    },
  }
})