# User Manual

### This is a user's guide to creating your own Music Palace using mongo. These instructions are under the assumption that the user has mongodb installed if not go to https://www.mongodb.com/download-center#community

#### Step 1 ~ Clone MusicPalace (https://github.com/jbreaker1/MusicPalace.git)

#### Step 2 ~ Open 2 terminals

#### Step 3 ~ Start mongo in one of the terminals and then move to the other one

#### Step 4 ~ In the second terminal once in the directory of MusicPalace run the command "npm install mongodb" and then go into the javascript directory

#### Step 5 ~ First insert the mp3 file by mongofiles -d MusicPalace put <file path> Ex.)mongofiles -d MusicPalace put user/Jay/song.mp3

#### Step 6 ~ Then run "node insert.js <file path> <song> <artist>" Ex.)node insert.js user/Jay/song.mp3 "Ryan sucks" "Elizabeth Shen"

#### Step 7 ~ Then the user has the option to add a genre, album, or year produced by running the command node addGenre.js <song or null> <artist or null> <genre name> Ex.) node addGenre.js "Ryan Sucks" "Elizabeth Shen" "hip-hop" or node addAlbum.js "Ryan Sucks" "Elizabeth Shen" "hip-hop" or node addYearProduced.js "Ryan Sucks" "Elizabeth Shen" "hip-hop"

#### Step 8 ~ A user can also search for their songs by using the commands find<property>.js <property> Ex.) node findAlbum.js "Dark side of the moon" or node findSong.js "Worst"

#### Step 9 ~ A user can delete a song by running the command node delete.js <song> <artist> Ex.)node delete.js "Waka-Waka" "Shakira"



commands:
- mongod -dbpath /Users/Jay/data/db
- show dbs
- use MusicPalace
- show collections
- mongofiles -d MusicPalace put <file path>
- db.fs.files.find
- db.fs.files.update({id: } , { $set: {"song": "Bastille"} })
- db.createUser(
  {
    user: "siteUserAdmin",
    pwd: "password",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
- mongo --username reportsUser --password password --authenticationDatabase MusicPalace
- db.runCommand({connectionStatus: 1})
