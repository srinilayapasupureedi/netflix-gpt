export const checkValidation = (email, password, fullName = null) => {
  const isValidEmail = /^\S+@\S+\.\S+$/.test(email);
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isValidEmail) {
    return "Invalid email format";
  }

  if (!isValidPassword) {
    return "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
  }

  // Only check full name if it's provided
  if (fullName !== null) {
    const isValidFullName =
      /^([A-Za-z]{3,16})(\s[A-Za-z]{3,16}){0,3}$/.test(fullName.trim());

    if (!isValidFullName) {
      return "Full name can only contain letters and spaces";
    }
  }

  return null; // No validation errors
};
