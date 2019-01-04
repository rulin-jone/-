// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftname: ['热门','特色小炒','特色干锅','主食', '凉菜', '饮品'],
    foodname:[],
    totalCost:150,
    orderNumber:0,
    activeIndex:4,
    scrollTop:100,
    toView:'a0',
    cartList:[],
    currentType:0,
    currentIndex:0,
    sumMoney:0,
    showCart:false,
    toastHidden:true,



    bannerUrl:[
      '../../images/1.jpg',
      '../../images/2.jpg',
      '../../images/3.jpg'
      ],
    indicatordots:true,
    autoplay:true,
    interval:4000,
    duration:1000,


  
  /*  listData:[
      {
        name:'热门',
        foods:[
          {
            name:'炒牛河',
            image_url:'../../images/food-icon/1.jpg',
            price:24
          },
          {
            name:'炒辣椒',
            price:37
          },
          {
            name:'炒青椒',
            price:59
          },
          {
            name:'炒韭菜'
          },
          {
            name:'炒鸡蛋'
          },
          {
            name:'炒黄瓜'
          }
        ]
      },
      {
        name:'特色小炒',
        foods:[
          {
            name:'炒豆芽'
          }
        ]
      },
      {
        name:'特色干锅',
        foods:[
          {
            name:'炒菠菜'
          }
        ]
      }
    ] */
    listData:[]

    


  },



  //提交订单
  submitClick:function(){
    if(this.data.sumMoney!=0){
      wx.setStorageSync('cartList', this.data.cartList);
      wx.setStorageSync('sumMoney', this.data.sumMoney);
      wx.setStorageSync('orderNumber', this.data.orderNumber);     
      wx.navigateTo({
        url: '../list/list'
      }) 
    }
    if(this.data.sumMoney == 0){
      

    }

  },

//选择左侧列表菜单函数
  selectMenu: function (e) {
    var index = e.currentTarget.dataset.index
    console.log(index)
    this.setData({
      activeIndex: index,
      toView: 'a' + index,
    })
    console.log(this.data.toView);
  },
  scroll:function(e){
    console.log(e)
    var dis=e.detail.scrollTop
    if(dis>0 && dis<300){
      this.setData({ activeIndex: 0 })
    }
    if(dis>300 && dis<600){
      this.setData({ activeIndex: 1 })
    }
    if(dis>600 && dis<900){
      this.setData({ activeIndex: 2 })
    }
    if (dis > 900 && dis < 1050) {
      this.setData({ activeIndex: 3 })
    }
    if (dis > 1200 && dis < 1350) {
      this.setData({ activeIndex: 4 })
    }
    if (dis > 1350 && dis < 1800) {
      this.setData({ activeIndex: 5 })
    }

  },




//添加购物车
  addToCart: function (e) {
    //传递菜品信息
    var type = e.currentTarget.dataset.type;
    var index = e.currentTarget.dataset.index;
    this.setData({
      currentType: type,
      currentIndex: index,
    });
    //加购物车
    var a = this.data
    var addItem = {
      "name": a.listData[a.currentType].foods[a.currentIndex].name,
      "price": a.listData[a.currentType].foods[a.currentIndex].price,
      "number": 1,
      "sum": a.listData[a.currentType].foods[a.currentIndex].price,
    }
    var sumMoney = a.sumMoney + a.listData[a.currentType].foods[a.currentIndex].price;
    var cartList = this.data.cartList;
    cartList.push(addItem);
    this.setData({
      cartList: cartList,
      showModalStatus: false,
      sumMoney: sumMoney,
      orderNumber: a.orderNumber + 1
    });
    console.log(this.data.cartList)

    //显示成功加入购物车的提示，持续一秒
    this.setData({
      toastHidden:false
    });
    
    var _this = this;
    setTimeout(function () {
      _this.setData({
        toastHidden: true
      });
    }, 1000);
  },

 

  //显示购物车物品
  showCart:function(){
    console.log(this.data.showCart)
    if (this.data.cartList.length != 0) {
      this.setData({
        showCart: !this.data.showCart,
      });
    }
  },

  //清空购物车中已选物品
  clearCart:function(){
    this.setData({
      cartList:[],
      showCart:false,
      sumMoney:0,
      orderNumber:0,
    })
  },

  //添加购物车中物品的数量
  addNumber: function (e) {
    var index = e.currentTarget.dataset.index;
    console.log(index)
    var cartList = this.data.cartList;
    cartList[index].number++;
    var sum = this.data.sumMoney + cartList[index].price;
    cartList[index].sum += cartList[index].price;

    this.setData({
      cartList: cartList,
      sumMoney: sum,
      orderNumber: this.data.orderNumber + 1
    });
  },

  //减少购物车中物品的数量
  decNumber: function (e) {
    var index = e.currentTarget.dataset.index;
    console.log(index)
    var cartList = this.data.cartList;

    var sum = this.data.sumMoney - cartList[index].price;
    cartList[index].sum -= cartList[index].price;
    cartList[index].number == 1 ? cartList.splice(index, 1) : cartList[index].number--;
    this.setData({
      cartList: cartList,
      sumMoney: sum,
      showCart: cartList.length == 0 ? false : true,
      orderNumber: this.data.orderNumber - 1
    });
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '点餐！'
    })
    //从数据库中获取数据
    var that = this;
    var sysinfo = wx.getSystemInfoSync().windowHeight;
    console.log(sysinfo)
    wx.showLoading({
      title: '努力加载中',
    })
    
    wx.request({
      url: 'https://easy-mock.com/mock/5c2e23e17096eb383e0cc254/laozhangfood/query#!method=get',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        wx.hideLoading();
        console.log(res)
        that.setData({
          listData: res.data.data.listData,
          loading: true
        })
      }
    })
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