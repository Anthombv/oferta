import mysql from "mysql";

var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

con.connect(function(err) {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    // Puedes tomar medidas adicionales aquí, como registrar el error o intentar reconectar.
    // Por ejemplo:
    // con.end(); // Cerrar la conexión existente
    // con = mysql.createConnection({ ... }); // Crear una nueva conexión
  } else {
    console.log("Conexión exitosa a la base de datos");
  }
});

export const dataBase = con;