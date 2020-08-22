const path = require('path');
// set development environment variables
const DEV = process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test" || process.env.NODE_ENV === "docker";
if (DEV) {
  console.log("~ Starting in DEV mode ~")
  require('dotenv').config({path: path.join(__dirname, ".env")});
}

const express = require('express');
const cors = require('cors');
const seed = require('./src/seed');
const db = require('./src/db');


// APP
const app = express();

// PORT
const SERVER_PORT = process.env.SERVER_PORT || 3002;

// CORS - must add new origins to list
// const whitelist = [process.env.CLIENT_ORIGIN];
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true
// };
app.use(cors());


// CREATE APP
const createApp = () => {
  // body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));

  // api routes
  app.use("/api", require("./src/api"));

  // error handling
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500);
    res.send('Internal server error.');
  });
}

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  app.listen(SERVER_PORT, () =>
    console.log(`Listening on port: ${SERVER_PORT}`)
  )
}

// development database setup
const syncDb = () => db.sync({force: true});

async function bootApp() {
  try {
    await syncDb();
    await seed();
  } catch (err) {
    console.log("Error syncing database: ", err)
  }

  await createApp();
  await startListening();
}
// This evaluates as true when this file is run directly from the command line,
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (require.main === module) {
  bootApp()
} else {
  createApp()
}
