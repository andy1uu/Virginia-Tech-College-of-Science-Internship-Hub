import mysql from "mysql";

const databaseConfig = {
  host: "db.cs.vt.edu",
  user: "andyluu",
  password: "cosInternshipDB4230",
  database: "andyluu_cosinternshipdb",
}; 

/* const databaseConfig = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "andyluu_cosinternshipdb",
}; */

// Create a connection to the database
var connection;

const handleDisconnect = () => {
  connection = mysql.createConnection(databaseConfig); // Recreate the connection, since
  // the old one cannot be reused.

  connection.connect((err) => {
    // The server is either down
    if (err) {
      // or restarting (takes a while sometimes).
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 10000); // We introduce a delay before attempting to reconnect,
    } // to avoid a hot loop, and to allow our node script to
  }); // process asynchronous requests in the meantime.
  console.log("Successfully connected to the database.");

  // If you're also serving http, display a 503 error.
  connection.on("error", (err) => {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      // Connection to the MySQL server is usually
      handleDisconnect(); // lost due to either server restart, or a
    } else {
      // connnection idle timeout (the wait_timeout
      throw err; // server variable configures this)
    }
  });
};

handleDisconnect();

export default connection;
