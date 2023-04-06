const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, conn) {
    if (err){
        console.log(err);
    }
    else {
        conn.db("sycsPractical").dropDatabase();

        const dbo = conn.db("sycsPractical");
        console.log("Database Created.");
    }

    let myObj = {Pname: "Earphone", price: 300};

    dbo.collection("products").insertOne(myObj, function(err, res) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("1 Document Inserted.");
        }
    });

    let myObj1 = [{Pname: "Cellphone", "price": 30000},
                {Pname: "pendrive", "price": 1200}];

    dbo.collection("products").insertMany(myObj1, function(err, res) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Multiple Document Inserted.");
        }
    });
});