// component/listcomp/list-comp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hidden: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
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

  /**
   * 组件的方法列表
   */
  methods: {

  }
})