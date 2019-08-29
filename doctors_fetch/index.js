'use strict'

var AWS = require('aws-sdk')
var ddb = new AWS.DynamoDB.DocumentClient()

var input = {
  TableName: 'Users',
};
var getItems = (event,context,callback)=>{
  
  ddb.scan(input,function(err,data){
    if(err)
    {
      callback(null,"error");
    }
    else
    {
      callback(null,data);
    }
  })
}
exports.getItems = getItems;

