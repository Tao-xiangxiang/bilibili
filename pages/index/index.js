Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 被点击的首页导航的菜单的索引
    currentIndexNav:0,
    // 首页导航数据
    navList:[],
    // 轮播图数据
    swiperList:[],
    // 视频列表数据
    videosList:[]
  },

  // 点击首页导航按钮
  activeNav(e) {
    // console.log(123)
    this.setData({
      // target 事件属性可返回事件的目标节点（触发该事件的节点）
      // 如生成事件的元素、文档或窗口。
      // dataset 获取自定义属性值的使用
      currentIndexNav:e.target.dataset.index
    })
  },

  // 获取首页导航数据
  getNavList() {
    let that = this;
    // 利用小程序内置发送请求的方法
    wx.request({
      url: 'https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/navList',
      success: function(res) {
        // console.log(res)
        if(res.data.code===0){
          that.setData({
            navList:res.data.data.navList
          })
        }
      }
    })
  },
  // 获取轮播图
  getSwiperList() {
    let that = this;
    wx.request({
      url:"https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/Swiper",
      success(res){
        // console.log(res)
        if(res.data.code===0){
            that.setData({
              swiperList:res.data.data.swiperList
            })
        }
      }
    })
  },
  getVideosList(){
    let that = this;
    wx.request({
      url:"https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/videosList",
      success(res){
        // console.log(res)
        if(res.data.code === 0){
          that.setData({
            videosList:res.data.data.videosList
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1 获取首页导航的数据
    this.getNavList();
    // 2 调用获取轮播图数据的函数
    this.getSwiperList();
    // 3 调用获取视频列表函数
    this.getVideosList();
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