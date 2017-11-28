let conn = new Mongo();
let db = conn.getDB("MusicPalace");
print(db.getUsers().toArray());
