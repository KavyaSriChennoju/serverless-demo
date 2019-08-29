'use strict'

var AWS = require('aws-sdk')
var ddb = new AWS.DynamoDB.DocumentClient()

var deleteItem = (event,context,callback)=>{
    
  var input = {
   TableName: 'Users',
    Key:{
      "User_ID": event.body.User_ID,
      }
};
  ddb.delete(input,function(err,data){
    if (err) {
        callback(null,err)
    } else {
        callback(null,"Deleted Successfully!")
    }
  })
}
exports.deleteItem = deleteItem;

