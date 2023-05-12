function isValidUserData(req, res, next) {
  const { name, surname, email, pwd } = req.body;

  if (!name) throw new Error(`Вы не передали имя`);
  if (!isNaN(name)) throw new Error(`Имя должно быть строковым типом данных`);

  if (!surname) throw new Error(`Вы не передали фамилию`);
  if (!isNaN(surname)) throw new Error(`Имя должно быть строковым типом данных`);

  if (!email) throw new Error(`Вы не передали email`);
  if (!/^[a-zA-Z0-9\.]+@[a-z]{1,6}\.[a-z]{1,6}/gm.test(email)) throw new Error(`Имя должно быть строковым типом данных`);

  if (!pwd) throw new Error(`Вы не передали pwd`);
  if (pwd.length < 9) throw new Error(`пароль менше 9 симвалов`);
  next();
}

function isVaidUserId(req, res, next) {
  const { id } = req.params;

  if (!id) throw new Error(`no id`);
  if (isNaN(id)) throw new Error(`id не число`);
  next();
}

module.exports = { isValidUserData, isVaidUserId };
