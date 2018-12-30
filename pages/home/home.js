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



    bannerUrl:[
      '../../images/1.jpg',
      '../../images/2.jpg',
      '../../images/3.jpg'
      ],
    indicatordots:true,
    autoplay:true,
    interval:4000,
    duration:1000,


  
    listData:[
      {
        name:'热门',
        foods:[
          {
            name:'niubi',
            image_url:'../../images/food-icon/1.jpg',
            price:'24'
          },
          {
            name:'sb'
          },
          {
            name:'dajiao'
          },
          {
            name:'jj'
          },
          {
            name:'jijijij'
          },
          {
            name:'jiangaonanshigedashabi'
          }
        ]
      },
      {
        name:'特色小炒',
        foods:[
          {
            name:'jiba'
          }
        ]
      },
      {
        name:'特色干锅',
        foods:[
          {
            name:'saohuo'
          }
        ]
      }
    ]




  },



  //提交订单
  submitClick:function(){
    wx.navigateTo({
      url: '../confirm/confirm'
    })
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
    if(dis>0 && dis<1189){
      this.setData({ activeIndex: 0 })
    }
    if(dis>1189 && dis<1867){
      this.setData({ activeIndex: 1 })
    }
    if(dis>1867 && dis<2180){
      this.setData({ activeIndex: 2 })
    }
    if (dis > 1867 && dis < 2180) {
      this.setData({ activeIndex: 3 })
    }
    if (dis > 2180 && dis < 2785) {
      this.setData({ activeIndex: 4 })
    }
    if (dis > 2785 && dis < 2879) {
      this.setData({ activeIndex: 5 })
    }

  },



//添加购物车
  addToCart: function () {
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