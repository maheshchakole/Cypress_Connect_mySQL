const { defineConfig } = require("cypress");

const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

const mysql =require('mysql');
const sqlServer= require('cypress-sql-server');
//const sqlServer from 'cypress-sql-server';
//sqlServer.loadDBCommands();


async function setupNodeEvents(on, config) {

  // implement node event listeners here
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  
  on("file:preprocessor", browserify.default(config));
   
  //await preprocessor.addCucumberPreprocessorPlugin(on, config);

 // on("file:preprocessor", browserify.default(config));

  return config;

}




module.exports = defineConfig({

  e2e: {

    setupNodeEvents(on, config){
      on ("task",{
        queryDb: (query) =>{
          return queryTestDb(query, config)
        }
     });
    },
    

  //specPattern: ['cypress/**/*.js'],
  "env":{
    "db":{
      "server": "16.0.1000",
      "user": "mahesh",
      "password": "M@2001chakole",
      "database": "maheshdb"
    }
  },

  },
  
 
  
});

function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = sqlServer.createConnection(config.env.db);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        // console.log(results)
        return resolve(results);
      }
    });
  });
}
