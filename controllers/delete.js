import queries from "../db/queries.js";

async function deleteUsername(req, res) {
  const { username } = req.params;
  await queries.deleteUsername(username);
  res.redirect("/");
}

export default {
  deleteUsername,
};
