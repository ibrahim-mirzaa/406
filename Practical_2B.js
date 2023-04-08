const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, conn) {
    if (err) {
        console.log(err);
    }
    var dbo = conn.db("sycsPractical");
    
    var condition = {Pname: "Cellphone"};

    dbo.collection("products").deleteOne(condition, function(err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log("1 Document Deleted.");
        }
    });

    var condition1 = {Pname: "Earphone"};
    var newvalue = {$set: {price: 50000}};

    dbo.collection("products").updateOne(condition1, newvalue, function(err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log("1 Document Updated.");
        }
    });

    dbo.collection("products").find().toArray(function(err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log("Find all documents.");
            console.log(res);
        }
    });
});