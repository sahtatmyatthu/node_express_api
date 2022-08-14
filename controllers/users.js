import { v4 as uuidv4 } from "uuid";
let users = [];

export const createUser = (req, res) => {
  console.log(req.body);

  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the name ${user.name} added to the database!`);
};

export const getUsers = (req, res) => {
  res.send(users);
};

export const getUser = (req, res) => {
  // console.log(req.params);
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deletUser = (req, res) => {
  const { id } = req.params;
  // id to delete 123
  // Jonh 123
  // Jane 321
  // တူတယ်ဆိုမှ false ပြန်လာမှာကိုး  အာ့မှာ delete ခံရမှာ
  users = users.filter((user) => user.id != id);

  res.send(`User with the id ${id} deleted from the database`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User with the id ${id} has been updated`);
};
