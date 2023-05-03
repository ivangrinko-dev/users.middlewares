const fs = require(`fs`);

const path = `./storage/storage.json`;
class User {
  path = `./storage/storage.json`
  getAllUsers() {
    const data = JSON.parse(fs.readFileSync(this.path));
    return data;
  }

  getUserById(id) {
    const data = JSON.parse(fs.readFileSync(this.path));
    const filtered = data.filter((elem) => elem.id == id);
    return filtered;
  }

  createUser(name, surname, email, pwd) {
    const data = JSON.parse(fs.readFileSync(this.path));
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

  upUserById(id, name, surname, email, pwd) {
    const data = JSON.parse(fs.readFileSync(this.path));
    const filtered = data.filter((elem) => elem.id != id);
    if (filtered.length != data.length) {
      filtered.push({
        id,
        name,
        surname,
        email,
        pwd,
      });
    } else {
      throw new Error("такого id нет");
    }
    fs.writeFileSync(this.path, JSON.stringify(filtered));
    return filtered;
  }

  deleteUser(id) {
    const data = JSON.parse(fs.readFileSync(this.path));
    const filtered = data.filter((elem) => elem.id != id);
    fs.writeFileSync(this.path, JSON.stringify(filtered));
    return filtered;
  }
}
module.exports = {
  User,
};
