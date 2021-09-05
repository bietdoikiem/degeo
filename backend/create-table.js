const { client } = require('./connect-db');

function createTable(schema, name) {
  const query = `CREATE TABLE IF NOT EXISTS miraclekidsdb.${name} ${schema}`;
  try {
    return client.execute(query);
  } catch (error) {
    console.log(
      `Mistake at table${name}---------------------------------------------------------------`
    );
    console.log(error);
  }
}

async function createAllTable() {
  try {
    // user table
    var userTable = 'users';
    var userTableSchema =
      '(username text, password text, avatar text, PRIMARY KEY (username));';
    await createTable(userTableSchema, userTable);

    // City table
    var CityTable = 'location';
    var CityTableSchema =
      '(name text, latitude double, longitude double, code text, description text, \
       region text, thumbnail text , theme text, subthemes list<text>, videolink list<text>, PRIMARY KEY (code,name));';
    await createTable(CityTableSchema, CityTable);

    // location detail table
    // var detailTable = "locationdetail";
    // var detailTableSchema = "(name text, thumbnail text, describtion text ,videolink list<text>,themes list<text>, PRIMARY KEY (name));";
    // await createTable(detailTableSchema,detailTable)

    // Room table
    var RoomTable = 'room';
    var RoomTableSchema =
      '( name text, participants list<text>, Service list<text>,games list<text>, PRIMARY KEY (name));';
    await createTable(RoomTableSchema, RoomTable);

    // Playlist table
    var PlaylistTable = 'playlist';
    var PlaylistTableSchema =
      '( code text , theme text, name text , PRIMARY KEY (code,name));';
    await createTable(PlaylistTableSchema, PlaylistTable);

    // Game table
    var gameTable = 'game';
    var gameTableSchema = '( name text, apikey text,  PRIMARY KEY (name));';
    await createTable(gameTableSchema, gameTable);

    // Video table
    var VideoTable = 'video';
    var VideoTableSchema =
      '(name text,link text, theme text, PRIMARY KEY (name));';
    await createTable(VideoTableSchema, VideoTable);

    // message table
    var messageTable = 'message';
    var MessageTableSchema =
      '(time double,user text, room text,content text, PRIMARY KEY (time, room));';
    await createTable(MessageTableSchema, messageTable);

    // message room table
    var RoomMessageTable = 'roommessage';
    var RoomMessageTableSchema =
      '(room text,messages list<double>,PRIMARY KEY (room));';
    await createTable(RoomMessageTableSchema, RoomMessageTable);

    console.log('Successfully create all table!');
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createAllTable,
};
