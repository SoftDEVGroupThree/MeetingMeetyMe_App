import SQLite from "react-native-sqlite-storage";
SQLite.enablePromise(true);

const database_name = "Reactoffline.db";
const database_version = "1.0";
const database_displayname = "SQLite React Offline Database";
const database_size = 200000;

const db = SQLite.openDatabase(
  {
    name: database_name,
    version: database_version, 
    displayName: database_displayname,
    size: database_size,
    location: 'default',
  },
  () => {},
  error => {
    console.log(error);  
  }
);

export default db;