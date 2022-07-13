import { promisePool } from "../../../database/connection";

export default async function handler(req, res) {
  const [rows] = await promisePool.query("SELECT * FROM Blog");
  res.json(rows);
}
