# User Manual

### This is a user's guide to creating your own Music Palace using mongo. These instructions are under the assumption that the user has mongodb installed under

#### Step 1 ~ Start mongodb

#### Step 2 ~ Connect to mongodb

#### Step 3 ~ 



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
