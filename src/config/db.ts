import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const db = mysql.createPool({
  host: process.env.DB_HOST || "",
  user: process.env.DB_USER || "",
  database: process.env.DB_NAME || "",
  password: process.env.DB_PASSWORD || "",
  port: parseInt(process.env.DB_PORT || "17701"),
});

export const connectToDB = async () => {
  try {
    const connection = await db.getConnection();
    console.log("Connected to Database");
    connection.release();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error message: " + error.message);
    } else {
      console.error("Error unknown: " + error);
    }
  }
};
