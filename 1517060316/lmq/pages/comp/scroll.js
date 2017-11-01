// pages/comp/scroll.js
var base64 = require("../example/images/base64");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEnd: false,
    messages: [{
      image:"01.jpg",
      name: "李医生",
      last: "好点了吗"
    }, {
      image: "02.jpg",
      name: "张医生",
      last: "注意好身体！"
    }, {
        image: "03.jpg",
      name: "林医生",
      last: "给您提供最好的服务"
    }, {
        image: "04.jpg",
      name: "王医生",
      last: "健康是资本"
    }, {
        image: "06.jpg",
      name: "林护士",
      last: "要记得按时吃饭"
    }, {
        image: "70.jpg",
      name: "隔壁阿姨",
      last: "早啊"
    }, {
        image: "05.jpg",
      name: "病患",
      last: "哈哈"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      icon20: base64.icon20,
      icon60: base64.icon60
    });
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

  },

  onEnd: function () {
    console.log("onEnd")
    var that = this;
    var data = that.data;
    that.setData({
      isEnd: true /*,
      messages: data.messages.concat([{
        name: "Tom",
        last: "Hello!"
      }, {
        name: "john",
        last: "yes."
      }]) */
    });

  }
})