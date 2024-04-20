import { Pool } from "pg";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT || "5432"),
});

async function createTables() {
  const client = await pool.connect();
  try {
    const sql = fs.readFileSync("src/database/createTables.sql", "utf8");
    const result = await client.query(sql);

    if (
      result !== null &&
      result.rowCount &&
      result.rowCount > 0
    ) {
      const tableNames = result.rows
        .map((row: any) => row.table_name)
        .join(", ");
      console.log(`Tables created successfully: ${tableNames}`);
    } else {
      console.log("Tables in operation: users, files");
    }
  } catch (err) {
    console.error("Error creating tables:", err);
  } finally {
    client.release();
  }
}

// Chamada da função de criação de tabelas ao inicializar o pool de conexão
createTables();

export default pool;
