import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: " admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Toyin",
    email: " toyin@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Aliu",
    email: " aliu@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
