'use strict'

var AWS = require('aws-sdk')
var ddb = new AWS.DynamoDB.DocumentClient()

var postItems = (event,context,callback)=>{
    
  var input = {
   TableName: 'Users',
    Item:{
      "User_Name": event.body.User_Name,
      "Expertise": event.body.Expertise,
      "Last_Name": event.body.Last_Name,
      "User_ID": event.body.User_ID,
      "First_Name": event.body.First_Name,
      "Experience": event.body.Experience
      }
};
  ddb.put(input,function(err,data){
    if (err) {
        callback(null,err);
    } else {
        callback(null,"Successfully Added");
    }
  })
}
exports.postItems = postItems;

