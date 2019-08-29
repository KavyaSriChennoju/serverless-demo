'use strict'

var AWS = require('aws-sdk')
var ddb = new AWS.DynamoDB.DocumentClient()

var getItem = (event,context,callback)=>{
    
  var input = {
   TableName: 'Users',
    Key:{
      "User_ID": event.body.User_ID,
      }
};
ddb.get(input,function(err,data){
    if(err)
    {
      callback(null,err);
    }
    else
    {
      callback(null,data);
    }
  })
  
}
exports.getItem = getItem;

