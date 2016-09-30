const API_URL_INVENTORY = "https://reserve.cdn-apple.com/CN/zh_CN/reserve/iPhone/availability.json"

var app = getApp()
var deviceJS = require('Resouces/Resouces.js')
var devices = []
var inventory = []
var navigateTitle = ""
Page({
  data:{
    // text:"这是一个页面"
    hidden:false,
    hidden1:false,
    device:[],
    inventory:[],
    selected:"",  // 实现选中状态
    idxx:-1
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    navigateTitle = options.name
    // console.log('options:'+options)
    // 获取本地device信息
    devices = deviceJS.getDevices()
    // console.log('json:'+jss.skus[0].part_number)
    // 网络请求
    app.fetchApi(API_URL_INVENTORY, (err, data)=>{
        // console.log('inventory:'+data[options.num]['MNH12CH/A'])
        // 获取库存数据
        inventory = data[options.num]
        // -> wxml
        var that = this
        that.setData({device:devices.skus, inventory:inventory})
    })
  },
  onReady:function(){
    // 页面渲染完成
    this.setData({hidden:true, hidden1:true})
    wx.setNavigationBarTitle({
        title: '<'+navigateTitle+'>库存'
    })
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})