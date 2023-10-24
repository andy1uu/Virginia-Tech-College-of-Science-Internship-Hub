import mysql from "mysql";

// Create a connection to the database
const connection = mysql.createConnection({
  host: "db.cs.vt.edu",
  user: "andyluu",
  password: "cosInternshipDB4230",
  database: "andyluu_cosinternshipdb",
});

// open the MySQL connection
connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

export default connection;
