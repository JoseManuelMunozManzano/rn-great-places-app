import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('places.db');

export const init = () => {
  // https://docs.expo.io/versions/v40.0.0/sdk/sqlite/#transaction--objects
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
          id INTEGER PRIMARY KEY NOT null, 
          title TEXT NOT NULL, 
          imageUri TEXT NOT NULL, 
          address TEST NOT NULL, 
          lat REAL NOT NULL, 
          lng REAL NOT NULL
        );`,
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};
