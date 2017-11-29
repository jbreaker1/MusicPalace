let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/MusicPalace";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  let yearProduced1 = process.argv[2] !== undefined ? process.argv[2] : null;
  let query = { yearProduced: yearProduced1 };
  db.collection("fs.files").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
