const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const encrypt = (payload) => {
  // encrypt the payload and return token
  const token = jwt.sign(payload, process.env.SECRET_KEY);
  return token;
};

const decrypt = (token) => {
  // return decoded payload
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  if (decoded) {
    return decoded;
  } else {
    return false;
  }
};

module.exports = {
  encrypt,
  decrypt,
};
