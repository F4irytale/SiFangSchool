'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
 let res = await db.collection('news').orderBy('number','desc').get()
  return res
};
