let conn = new Mongo();
let db = conn.getDB("MusicPalace");
let collec = db.getCollectionNames()
print(collec);
