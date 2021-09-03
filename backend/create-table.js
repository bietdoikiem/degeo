const { client } = require('./connect-db');


function createTable(schema,name){
    const query = `CREATE TABLE IF NOT EXISTS miraclekidsdb.${name} ${schema}`;
    return client.execute(query);
}

async function createAllTable(){
    // user table
    var userTable = "user";
    var userTableSchema = "(username text ,email text, avater text, password text, PRIMARY KEY (email,username));";
    createTable(userTableSchema,userTable);

    // City table
    var CityTable = "location";
    var CityTableSchema = "(name text, lattitude double, longtitude double, code text ,region text, theme list<text>, PRIMARY KEY (code,name) );" ;
    createTable(CityTableSchema,CityTable);

    // Room table
    var RoomTable = "room";
    var RoomTableSchema = "( participants list<text>, name text, Service list<text>, messages list<frozen<map<text,text>>>,games list<text>, PRIMARY KEY (name));";
    createTable(RoomTableSchema,RoomTable);

    // Playlist table
    var PlaylistTable = "playlist";
    var PlaylistTableSchema = "( code text , theme text, name text , PRIMARY KEY (code,name));";
    createTable(PlaylistTableSchema,PlaylistTable);

    // Game table
    var gameTable = "game";
    var gameTableSchema = "( name text, apikey text,  PRIMARY KEY (name));" ;
    createTable(gameTableSchema,gameTable);

    // Video table
    var VideoTable = "video";
    var VideoTableSchema = "(name text,link text, theme text, PRIMARY KEY (name));";
    createTable(VideoTableSchema,VideoTable);

    // message table
    var messageTable = "message" ;
    var MessageTableSchema = "(user text, time timeuuid, room text,content text, PRIMARY KEY (room,time, user));";
    createTable(MessageTableSchema,messageTable);

				console.log("Successfully create all table!")
}

module.exports = {
	createAllTable
};