const request = require('request')

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await new Promise((resolve, reject) => {
      request.get({
        url: 'https://www.epoos.com/api/article/getArticleTag',
      }, (err, response, body) => {
        if (err) {
          reject(err)
          return
        }
        resolve(response)
      })
    })
    
  } catch (e) {
    console.log(e)
  }
}

