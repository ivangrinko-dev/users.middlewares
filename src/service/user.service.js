const fs = require(`fs`);

class User {
  path = `./storage/storage.json`;

  getAllUsers() {
    const data = JSON.parse(fs.readFileSync(this.path));
    return data;
  }

  getUserById(id) {
    const data = JSON.parse(fs.readFileSync(this.path));
    const filtered = data.filter(elem => elem.id == id);
    return filtered;
  }

  upUserById(id, name, surname, email, pwd) {
    const data = JSON.parse(fs.readFileSync(this.path));
    const filtered = data.filter(elem => elem.id != id);
    if (filtered.length == data.length) throw new Error('такого id нет');
    filtered.push({
      id,
      name,
      surname,
      email,
      pwd,
    });

    fs.writeFileSync(this.path, JSON.stringify(filtered));
    return filtered;
  }

  deleteUser(id) {
    const data = JSON.parse(fs.readFileSync(this.path));
    const filtered = data.filter(elem => elem.id != id);
    fs.writeFileSync(this.path, JSON.stringify(filtered));
    return filtered;
  }
}

module.exports = {
  User,
};
