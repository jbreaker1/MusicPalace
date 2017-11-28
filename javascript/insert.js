let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://127.0.0.1:27017/MusicPalace";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  let myquery = { filename: "/Users/Jay/Downloads/ANOMALIE - DAYBREAK.mp3" };
  let newvalues = { $set: { song: "DAYBREAK", artist: "ANOMALIE" } };
  db.collection("fs.files").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
