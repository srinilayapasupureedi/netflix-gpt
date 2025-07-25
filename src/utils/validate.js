export const checkValidation = (email, password, fullName) => {
  const isValidEmail = /^\S+@\S+\.\S+$/.test(email);
  const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isValidFullName = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(fullName);
  
  if (!isValidEmail) {
    return "Invalid email format";
  }
  if (!isValidPassword) {
    return "Password must be at least 8 characters long and contain at least one letter and one number";
  }
  if (!isValidFullName) {
    return "Full name can only contain letters and spaces";
  }
  return null;
};