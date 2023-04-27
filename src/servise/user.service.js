const arr = [
  {
    id: 1,
    name: "Hanna",
    surname: "Pleshko",
    email: "hannapleshko@gmail.com",
    pwd: "12345678",
  },
  {
    id: 2,
    name: "Есения",
    surname: "Грант",
    email: "yesgrant@mail.ru",
    pwd: "12345678",
  },
  {
    id: 3,
    name: "Анастасия",
    surname: "Павлова",
    email: "pavlova@gmail.com",
    pwd: "12345678",
  },
  {
    id: 4,
    name: "Мария",
    surname: "Гардон",
    email: "gardon@mail.ru",
    pwd: "12345678",
  },
  {
    id: 5,
    name: "Марта",
    surname: "Котикова",
    email: "martaktik@gmail.com",
    pwd: "12345678",
  },
  {
    id: 6,
    name: "Борис",
    surname: "Юревич",
    email: "testdata@gmail.com",
    pwd: "12345678",
  },
  {
    id: 7,
    name: "Рыжик",
    surname: "Рыжий",
    email: "email@gmail.com",
    pwd: "12345678",
  },
  {
    id: 8,
    name: "Рейна",
    surname: "Собачкова",
    email: "dogdoggav@mail.ru",
    pwd: "12345678",
  },
  {
    id: 9,
    name: "Максим",
    surname: "Николаев",
    email: "hanna@gmail.com",
    pwd: "12345678",
  },
  {
    id: 10,
    name: "Константин",
    surname: "Константинов",
    email: "konst@mail.ru",
    pwd: "12345678",
  },
  {
    id: 11,
    name: "Иван",
    surname: "Иванов",
    email: "ivaniv@gmail.com",
    pwd: "12345678",
  },
  {
    id: 12,
    name: "Николай",
    surname: "Николаев",
    email: "nikkkk@mail.ru",
    pwd: "12345678",
  },
];

function getAllUsers() {
  return arr;
}

function getUsersById(id) {
  const feiltered = arr.filter((elem) => elem.id == id);
  return feiltered;
}

function createUsersById(name, surname, email, pwd) {
  arr.push({
    id: arr.length + 1,
    name: name,
    surname: surname,
    email: email,
    pwd: pwd,
  });
  return arr;
}

function upUsersById(id, name, surname, email, pwd) {
  const feiltered = arr.filter((elem) => elem.id != id);
  if (feiltered.length == arr.length) throw new Error(`Такого id нет`);
  feiltered.push({
    id: id,
    name: name,
    surname: surname,
    email: email,
    pwd: pwd,
  });

  return feiltered;
}

function deleteUsersById(id) {
  const feiltered = arr.filter((elem) => elem.id != id);
  if (feiltered.length == arr.length) throw new Error(`Такого id нет`);
  return feiltered;
}

module.exports = {
  getAllUsers,
  getUsersById,
  createUsersById,
  upUsersById,
  deleteUsersById,
};
