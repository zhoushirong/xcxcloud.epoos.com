const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  var filedvalue1 = 'a:' + Math.random()
  var filedvalue2 = 'b:' + Math.random()
  try {
    return await db.collection('counters').get()
  } catch (e) {
    console.log(e)
  }
}