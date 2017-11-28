let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://127.0.0.1:27017/MusicPalace";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  let song1 = process.argv[2] !== undefined ? process.argv[2] : null;
  let artist1 = process.argv[3] !== undefined ? process.argv[3] : null;
  let album1 = process.argv[4] !== undefined ? process.argv[4] : null;
  let myquery = { song: song1, artist: artist1};
  let newvalues = { $set: { album: album1} };
  db.collection("fs.files").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(myquery[0] + " by " + myquery[1] + " is in " + album1 + " album");
    db.close();
  });
});
