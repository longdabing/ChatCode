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
        imgsrc: "/images/meate01.jpg",
        classname: "五花肉片"
      },
      {
        imgsrc: "/images/meate02.jpg",
        classname: "五花肉块"
      },
      {
        imgsrc: "/images/meate03.jpg",
        classname: "五花肉"
      },
      {
        imgsrc: "/images/meate04.jpg",
        classname: "猪耳朵"
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
    priviewImage: function () {
      wx.previewImage({
        current: "http://localhost/webapp/img/meate01.jpg",
        urls: ["http://localhost/webapp/img/meate01.jpg", "http://localhost/webapp/img/meate02.jpg",
      "http://localhost/webapp/img/meate03.jpg",
    "http://localhost/webapp/img/meate04.jpg"],
        success: (res) => {
          console.log("success",res);
        },
        fail: (res) => {
          console.log("failed",res);
        }
      })
    }
  }
})