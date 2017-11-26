mongod -dbpath /Users/Jay/data/db
show dbs
use MusicPalace
show collections
mongofiles -d MusicPalace put <file path>
db.fs.files.find
db.fs.files.update({ _id:ObjectId("5a19b44fc414f93fabefc651")} , { $set: {"song": "Bastille"} })
