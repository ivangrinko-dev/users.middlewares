const fs = require(`fs`);

const path = `./storage/storage.json`;

function getAllUsers() {
  const data = JSON.parse(fs.readFileSync(path));
  return data;
}

function getUserById(id) {
  const data = JSON.parse(fs.readFileSync(path));
  const filtered = data.filter((elem) => elem.id == id);
  return filtered;
}

function createUser(name, surname, email, pwd) {
  const data = JSON.parse(fs.readFileSync(path));
  data.push({
    id: data.length + 1,
    name,
    surname,
    email,
    pwd,
  });
  fs.writeFileSync(path, JSON.stringify(data));
  return data;
}

function deleteUser(id) {
  const data = JSON.parse(fs.readFileSync(path));
  const filtered = data.filter((elem) => elem.id != id);
fs.writeFileSync(path, JSON.stringify(filtered))
  return filtered;
}
module.exports = { getAllUsers, getUserById, createUser, deleteUser };
