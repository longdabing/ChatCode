// component/observecomp/observe-comp.js
// var commcode = require("../behavior.js");//共享代码暂时注释
Component({
// behaviors:[commcode],
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    sumvalue: 0,
  },
  /**组件数据字段监听器 520**/
  observers: {
    // "sumvalue": function (value) {
    //   console.log(value);
    //   wx.showModal({
    //     title: "提示",
    //     content: "字段监听器520"
    //   })
    // }
  },
  ready:function(){
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    bindsum: function () {
     console.log(this.properties.behaviorName);
     console.log(this.data.dataName);
     this.sayName();
      // wx.scanCode({
      //   complete: (res) => {
      //     console.log(res);
      //   },
      //   success(res){
      //     wx.showModal({
      //           title: "扫码结果",
      //           content: res.result
      //         })
      //   },
      // });
      var tempthis = this;
      this.setData({
        sumvalue: 2 + 2
      })
    }
  }
})