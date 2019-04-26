// 云函数入口函数
exports.main = (event, context) => {
  console.log('===>',event)
  console.log('11--1->', context)
  return {
    sum: event.a + event.b
  }
}