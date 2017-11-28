var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/MusicPalace";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  let song1 = process.argv[2] !== undefined ? process.argv[2] : null;
  let artist1 = process.argv[3] !== undefined ? process.argv[3] : null;
  let myquery = { song: song1, artist: artist1};
  db.collection("fs.files").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log(myquery[0]+ " by " + myquery[1] + " was deleted from your database.");
    db.close();
  });
});
