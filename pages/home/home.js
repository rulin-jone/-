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



    bannerUrl:[
      '../../images/1.jpg',
      '../../images/2.jpg',
      '../../images/3.jpg'
      ],
    indicatordots:true,
    autoplay:true,
    interval:4000,
    duration:1000,


  
    foodlistData:[
      {
        name:'热门',
        foods:[
          {
            name:'niubi'
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