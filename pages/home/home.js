// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftname:['饮品','主食','凉菜','热门'],
    foodname:[],
    totalCost:3,
    orderNumber:3,

    bannerUrl:[
      '../../images/1.jpg',
      '../../images/2.jpg',
      '../../images/3.jpg'
      ],
    indicatordots:true,
    autoplay:true,
    interval:4000,
    duration:1000
  },

  changeIndicatorDots(e){
    this.setData({
      indicatordots:!this.data.indicatordots
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
