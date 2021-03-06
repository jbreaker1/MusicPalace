let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://127.0.0.1:27017/MusicPalace";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  let filename1 = process.argv[2];
  let myquery = { filename: filename1};
  let song1 = process.argv[3] !== undefined ? process.argv[3] : null;
  let artist1 = process.argv[4] !== undefined ? process.argv[4] : null;
  let newvalues = { $set: { song: song1, artist: artist1} };
  db.collection("fs.files").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(song1 + " by " + artist1 + " was added to your database.");
    db.close();
  });
});
