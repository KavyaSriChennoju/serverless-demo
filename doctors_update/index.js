'use strict'

var AWS = require('aws-sdk')
var ddb = new AWS.DynamoDB.DocumentClient()

var updateItems = (event,context,callback)=>{
    
var params = {
    TableName:'Users',
    Key:{
        "User_ID":event.body.User_ID
    },
    
    UpdateExpression: "set Experience = :ex, Expertise = :et",
    ExpressionAttributeValues:{
        ":ex":event.body.Experience,
        ":et":event.body.Expertise,
    },
    ReturnValues:"UPDATED_NEW"
};
console.log("Updating the item...");
ddb.update(params, function(err, data) {
    if (err) {
         callback(null,err)
    } else {
        callback(null,"Successfully Updated")
    }
});
}
exports.updateItems = updateItems;

