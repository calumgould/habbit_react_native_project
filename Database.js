import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = 'Reactoffline.db';
const database_version = '1.0';
const database_displayname = 'SQLite React Offline Database';
const database_size = 200000;

export default class Database {

    initDB() {
        let db;
        return new Promise((resolve) => {
          console.log('Plugin integrity check ...');
          SQLite.echoTest()
            .then(() => {
              console.log('Integrity check passed ...');
              console.log('Opening database ...');
              SQLite.openDatabase(
                database_name,
                database_version,
                database_displayname,
                database_size
              )
                .then(DB => {
                  db = DB;
                  console.log('Database OPEN');
                  db.executeSql('SELECT * FROM User LIMIT 1').then(() => {
                      console.log('Database is ready ... executing query ...');
                  }).catch((error) =>{
                      console.log('Received error: ', error);
                      console.log('Database not yet ready ... populating data');
                      db.transaction((tx) => {
                          tx.executeSql('CREATE TABLE IF NOT EXISTS User (userId, petName, petAge, dateCreated, totalSteps, dailySteps)');
                      }).then(() => {
                          console.log('Table created successfully');
                      }).catch(error => {
                          console.log(error);
                      });
                  });
                  resolve(db);
                })
                .catch(error => {
                  console.log(error);
                });
            })
            .catch(error => {
              console.log('echoTest failed - plugin not functional');
            });
          });
      };

      closeDatabase(db) {
        if (db) {
          console.log("Closing DB");
          db.close()
            .then(status => {
              console.log("Database CLOSED");
            })
            .catch(error => {
              this.errorCB(error);
            });
        } else {
          console.log("Database was not OPENED");
        }
      };

      listDetails() {
        return new Promise((resolve) => {
          const users = [];
          this.initDB().then((db) => {
            db.transaction((tx) => {
              tx.executeSql('SELECT * FROM User', []).then(([tx,results]) => {
                console.log("Query completed");
                const length = results.rows.length;
                for (let i = 0; i < length; i++) {
                  let row = results.rows.item(i);
                  console.log(`User ID: ${row.userId}, PetName: ${row.petName}`)
                  const { userId, petName, petAge, dateCreated, totalSteps, dailySteps } = row;
                  users.push({
                    userId,
                    petName,
                    petAge,
                    dateCreated,
                    totalSteps,
                    dailySteps
                  });
                }
                console.log(users);
                resolve(users);
              });
            }).then((result) => {
              this.closeDatabase(db);
            }).catch((err) => {
              console.log(err);
            });
          }).catch((err) => {
            console.log(err);
          });
        });  
      }

      userById(id) {
        console.log(id);
        return new Promise((resolve) => {
          this.initDB().then((db) => {
            db.transaction((tx) => {
              tx.executeSql('SELECT * FROM User WHERE userId = ?', [id]).then(([tx,results]) => {
                console.log(results);
                if(results.rows.length > 0) {
                  let row = results.rows.item(0);
                  resolve(row);
                }
              });
            }).then((result) => {
              this.closeDatabase(db);
            }).catch((err) => {
              console.log(err);
            });
          }).catch((err) => {
            console.log(err);
          });
        });  
      }

      addUser(user) {
        return new Promise((resolve) => {
          this.initDB().then((db) => {
            db.transaction((tx) => {
              tx.executeSql('INSERT INTO User VALUES (?, ?, ?, ?, ?)', [user.userId, user.petName, user.petAge, use.dateCreated, user.totalSteps, user.dailySteps]).then(([tx, results]) => {
                resolve(results);
              });
            }).then((result) => {
              this.closeDatabase(db);
            }).catch((err) => {
              console.log(err);
            });
          }).catch((err) => {
            console.log(err);
          });
        });  
      }

      updateUser(id, user) {
        return new Promise((resolve) => {
          this.initDB().then((db) => {
            db.transaction((tx) => {
              tx.executeSql('UPDATE user SET petName = ?, petAge = ?, dateCreated = ?, totalSteps = ?, dailySteps = ? WHERE userId = ?', [user.petName, user.petAge, user.dateCreated, user.totalSteps, user.dailySteps, id]).then(([tx, results]) => {
                resolve(results);
              });
            }).then((result) => {
              this.closeDatabase(db);
            }).catch((err) => {
              console.log(err);
            });
          }).catch((err) => {
            console.log(err);
          });
        });  
      }

      deleteUser(id) {
        return new Promise((resolve) => {
          this.initDB().then((db) => {
            db.transaction((tx) => {
              tx.executeSql('DELETE FROM User WHERE userId = ?', [id]).then(([tx, results]) => {
                console.log(results);
                resolve(results);
              });
            }).then((result) => {
              this.closeDatabase(db);
            }).catch((err) => {
              console.log(err);
            });
          }).catch((err) => {
            console.log(err);
          });
        });  
      }
}