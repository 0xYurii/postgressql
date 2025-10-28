import pool from "./pool.js";

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}
async function deleteUsername(username) {
  await pool.query("DELETE FROM usernames WHERE username = $1", [username]);
}

export default {
  getAllUsernames,
  insertUsername,
  deleteUsername,
};
