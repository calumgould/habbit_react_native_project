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
          SQLite.echoTest()
            .then(() => {
              SQLite.openDatabase(
                database_name,
                database_version,
                database_displayname,
                database_size
              )
                .then(DB => {
                  db = DB;
                  db.executeSql('SELECT * FROM User LIMIT 1').then(() => {
                  }).catch((error) =>{
                      console.log('Received error: ', error);
                      db.transaction((tx) => {
                          tx.executeSql('CREATE TABLE IF NOT EXISTS User (userId, petName, petAge, dateCreated, totalSteps, dailySteps, lastLogin, stepGoal)');
                      })
                      .catch(error => {
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
              console.log('echoTest failed - plugin not functional', error);
            });
          });
      };

      closeDatabase(db) {
        if (db) {
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
                const length = results.rows.length;
                for (let i = 0; i < length; i++) {
                  let row = results.rows.item(i);
                  const { userId, petName, petAge, dateCreated, totalSteps, dailySteps, lastLogin, stepGoal } = row;
                  users.push({
                    userId,
                    petName,
                    petAge,
                    dateCreated,
                    totalSteps,
                    dailySteps,
                    lastLogin,
                    stepGoal
                  });
                }
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
        return new Promise((resolve) => {
          this.initDB().then((db) => {
            db.transaction((tx) => {
              tx.executeSql('SELECT * FROM User WHERE userId = ?', [id]).then(([tx,results]) => {
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
              tx.executeSql('INSERT INTO User VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [user.userId, user.petName, user.petAge, user.dateCreated, user.totalSteps, user.dailySteps, user.lastLogin, user.stepGoal]).then(([tx, results]) => {
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
              tx.executeSql('UPDATE user SET petName = ?, petAge = ?, dateCreated = ?, totalSteps = ?, dailySteps = ?, lastLogin = ?, stepGoal = ? WHERE userId = ?', [user.petName, user.petAge, user.dateCreated, user.totalSteps, user.dailySteps, user.lastLogin, user.stepGoal, id]).then(([tx, results]) => {
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

      deleteAllUsers() {
        return new Promise((resolve) => {
          this.initDB().then((db) => {
            db.transaction((tx) => {
              tx.executeSql('DELETE FROM User').then(([tx, results]) => {
                resolve(results);
              })
              
            })
            db.transaction((tx) => {
                tx.executeSql('DROP TABLE User').then(([tx, results]) => {
                resolve(results);
              })
            })
            .then((result) => {
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