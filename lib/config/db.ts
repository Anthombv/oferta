import mysql from "mysql";

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  charset: "utf8mb4_general_ci",
});

con.connect();

con.on("err", (err: any) => {
  if (err) {
    con.end;
  }
});

export const dataBase = con;
