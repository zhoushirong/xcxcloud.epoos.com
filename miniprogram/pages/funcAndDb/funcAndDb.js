// miniprogram/pages/funcAndDb/funcAndDb.js
Page({
  data: {
    list: [],
    httpReqData: '',
    cloudHttpReqData: ''
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
  /**
   * 调用外部 http 接口
   */
  requestHttp() {
    wx.request({
      url: 'https://www.epoos.com/api/article/getArticleTag',
      method: 'get',
      success: (res) => {
        this.setData({
          httpReqData:JSON.stringify(res)
        })
      },
      fail: (err) => {
        this.setData({
          httpReqData:JSON.stringify(err)
        })
      }
    });
  },
  /**
   * 云函数调用外部http接口
   */
  cloudRequestHttp() {
    wx.cloud.callFunction({
      name: 'http',
      data: {},
      success: res => {
        wx.showToast({
          title: '调用成功',
        })
        this.setData({
          cloudHttpReqData: JSON.stringify(res)
        })
        console.log(res)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '调用失败',
        })
        console.error('[云函数] [http] 调用失败：', err)
      }
    })
  }
})