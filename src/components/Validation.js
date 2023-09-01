export const ValidateInputs = (name, value, validationErrors) => {
  const updatedValidationErrors = { ...validationErrors };
  switch (name) {
    case "name":
      if (!value.trim()) {
        updatedValidationErrors[name] = ["The name field is required."];
      } else {
        delete updatedValidationErrors[name];
      }
      break;
    case "email":
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(value)) {
        updatedValidationErrors[name] = ["The email field must be a valid."];
      } else {
        delete updatedValidationErrors[name];
      }
      break;
    case "subject":
      if (!value.trim()) {
        updatedValidationErrors[name] = ["The subject field is required."];
      } else {
        delete updatedValidationErrors[name];
      }
      break;
    case "message":
      if (!value.trim()) {
        updatedValidationErrors[name] = ["The message field is required."];
      } else {
        delete updatedValidationErrors[name];
      }
      break;
    default:
      break;
  }
  return updatedValidationErrors;
};
