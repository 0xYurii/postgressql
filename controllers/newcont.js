import queries from "../db/queries.js";

async function getUsernames(req, res) {
  const usernames = await queries.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
}

async function createUsernameGet(req, res) {
  // render the form
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await queries.insertUsername(username);
  res.redirect("/");
}

export default {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
};
