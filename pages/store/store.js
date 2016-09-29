var app = getApp()
const API_URL_STORE = 'https://reserve.cdn-apple.com/CN/zh_CN/reserve/iPhone/stores.json'
const API_URL_INVENTORY = "https://reserve.cdn-apple.com/CN/zh_CN/reserve/iPhone/availability.json"
var stores = []
Page({
  data:{
    // text:"这是一个页面"
    store:stores,
    selected:"",
    idxx:-1
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    app.fetchApi(API_URL_STORE, (err,data) => {
        console.log("Store："+data.stores)
        stores = data.stores
        this.setData({store:stores})
    })
  },
  onReady:function(){
    // 页面渲染完成
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
    this.setData({selected:"-item",idxx:e.currentTarget.dataset.idx})
  }

})