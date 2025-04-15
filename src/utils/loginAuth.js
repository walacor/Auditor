const mailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const verifyInputs = (email, password) => {
  if (email.trim() === "" && password.trim() === "") return 1;
  //CONSTANTS.BOTH_FIELDS_EMPTY;
  else if (email.trim() === "") return 2;
  //CONSTANTS.ENTER_EMAIL;
  else if (password.trim() === "") return 3; //CONSTANTS.ENTER_PASSWORD;
  return 0;
};
const verifyMail = (email) => {
  if (email.trim() === "") return 2;
  else if (!email.match(mailRegex)) return 4;
  else return 0;
};
const verifyPassword = (password) => {
  if (password.trim() === "") return 3;
  else if(password.length<6) return 2;
  else if(password.length>14) return 1;
  else return 0;
};
// const verifyPasswords = (newPassword, confirmedNewPassword) => {};
export { verifyInputs, verifyMail, verifyPassword };
