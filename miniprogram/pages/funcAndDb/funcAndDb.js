// miniprogram/pages/funcAndDb/funcAndDb.js
Page({
  data: {
    list: []
  },
  /**
   * 后端查询数据库
   */
  searchCounters() {
    wx.cloud.callFunction({
      name: 'db',
      data: {},
      success: res => {
        wx.showToast({
          title: '调用成功',
        })
        this.setData({
          list: res.result.data
        })
        console.log(res)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '调用失败',
        })
        console.error('[云函数] [db] 调用失败：', err)
      }
    })
  },
  
})