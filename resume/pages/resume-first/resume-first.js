// pages/resume-first/resume-first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs: [{
        img: "/images/Plum-1.png",
        text: "点击查看信息",
        url: "/pages/information/information"
      },
      {
        img: "/images/orchid.png",
        text: "点击查看信息",
        url: "/pages/information/information"
      },
      {
        img: '/images/bamboo-1.png',
        text: "点击查看信息",
        url: "/pages/information/information"
      },
      {
        img: '/images/chrysanthemum.png',
        text: "点击查看信息",
        url: "/pages/information/information"
      },
      {
        img: '',
        text: "点击重新排序",
        url: "/pages/information/information"
      },
      {
        img: "/images/Piano.png",
        text: "点击查看信息",
        url: "/pages/information/information"
      },
      {
        img: '/images/chess.png',
        text: "点击查看信息",
        url: "/pages/information/information"
      },
      {
        img: '/images/book.png',
        text: "点击查看信息",
        url: "/pages/information/information"
      },
      {
        img: '/images/painting.png',
        text: "点击查看信息",
        url: "/pages/information/information"
      }
    ]
  },
  clickMe: function (event) {
    console.log(event)
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