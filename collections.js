var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/MusicPalace";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var query = { song: "Pompei" };
  db.collection("fs.files").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
