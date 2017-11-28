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