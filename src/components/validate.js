export const validate = (name, value) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  switch (name) {
    case "name":
      if (!value) return "Name is a required field";
      if (value.trim().length < 3) return "Name must have atleast 3 letters";
      break;
    case "email":
      if (!value) return "Email is a required field";
      if (!emailRegex.test(value)) return "Invalid email address";
      break;
    case "universitiesSelected":
      if (value.length <= 0) return "Select atleast one university";
      break;
    case "checkBox":
      if (!value) return "Required";
      break;
    case "phone":
      if (!value) return "Required";
      if (value.length < 8) return "Mobile number is too short";
      const regex = /^[0-9]*$/;
      if (!regex.test(value)) return "Enter a valid a mobile number";
      break;
    default:
      return "";
  }
  return "";
};
