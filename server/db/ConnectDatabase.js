import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import pg from "pg";
const { Pool } = pg;
// reading file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pemPath = path.join(__dirname, "postgres-rds-kp.pem");

const pool = new Pool({
  user: "postgres",
  host: "postgres-test.cvu8us06ubtw.ap-south-1.rds.amazonaws.com",
  database: "projectAparna",
  password: "123456789",
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
    ca: fs.readFileSync(pemPath, "utf-8").toString(),
  },
});

async function testDatabaseConnection() {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log(
      "Connected to the database successfully. Server time is:",
      res.rows[0].now
    );
  } catch (err) {
    console.log("Connection to the database failed:", err);
  }
}

testDatabaseConnection();

export default pool;
