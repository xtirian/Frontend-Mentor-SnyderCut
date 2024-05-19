import { Pool } from "pg";

const pool = new Pool({
  user: 'xtirianadmin',
  host: 'db', // Nome do serviço do banco de dados no Docker Compose
  database: 'mydatabase',
  password: 'markbrodbpassword123',
  port: 5432, // Porta padrão do PostgreSQL
});


async function createTables() {
  const client = await pool.connect();
  try {
    const result = await client.query(`CREATE TABLE IF NOT EXISTS users (
      id VARCHAR(36) PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  
  CREATE TABLE IF NOT EXISTS files (
      id VARCHAR(36) PRIMARY KEY,
      file_name VARCHAR(255) NOT NULL,
      file_content TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      user_id VARCHAR(36) REFERENCES users(id)
  );
  `);

    if (result !== null && result.rowCount && result.rowCount > 0) {
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
