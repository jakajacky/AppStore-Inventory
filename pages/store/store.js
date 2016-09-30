var app = getApp()
const API_URL_STORE = 'https://reserve.cdn-apple.com/CN/zh_CN/reserve/iPhone/stores.json'
var stores = []
Page({
  data:{
    // text:"这是一个页面"
    store:stores, // 数据源
    selected:"",  // 实现选中状态
    idxx:-1,
    hidden1:false,
    hidden:false  // loading的显示与隐藏 
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    wx.showNavigationBarLoading()
    app.fetchApi(API_URL_STORE, (err,data) => {
        console.log("Store："+data.stores)
        stores = data.stores
        this.setData({store:stores})
        wx.hideNavigationBarLoading()
        // var dat = this.data
        // dat.hidden = false
        
    })
  },
  onReady:function(){
    // 页面渲染完成
    this.setData({hidden:true, hidden1:true})
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  selectstore:function(e) {
    //选中的indexindex
    var index = e.currentTarget.dataset.idx
    // 传值 实现选中状态
    this.setData({selected:"-item",idxx:index})
    // 导航栏
    wx.navigateTo({
      // url传值
      url: '../inventory/inventory?num='+stores[index].storeNumber+'&name='+stores[index].storeName
    })
  }

})