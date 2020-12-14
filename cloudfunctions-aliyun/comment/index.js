'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
    //event为客户端上传的参数
    const collection = db.collection('comment').add({
		data:{
			info:event.info
		},
	}) // 获取表'unicloud-test'的集合对象
    console.log(event)
    return event // 返回json给客户端
};