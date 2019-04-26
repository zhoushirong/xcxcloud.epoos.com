const cloud = require('wx-server-sdk')

cloud.init()
// 云函数入口函数
exports.main = async (event, context) => {
  let res = await cloud.callFunction({
    name: 'sum',
    data: {
      a: 1,
      b: 2
    }
  })
  console.log('现在的时间是：', new Date(), '时刻提醒，周世熔，你始终是最帅的！', res)

  return {
    data: 'success:' + new Date()
  }
}