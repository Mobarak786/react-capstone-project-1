export const evalute = (values, check) => {
  const err = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.name) {
    err.name = "Name is required";
  }
  if (!values.username) {
    err.username = "Username is required";
  } else if (values.username.length < 4) {
    err.username = "Please enter atleast 4 characters";
  }
  if (!values.email) {
    err.email = "Email is required";
  } else if (!regex.test(values.email)) {
    err.email = "This is not a valid email";
  }
  if (!values.mobile) {
    err.mobile = "Mobile is required";
  } else if (values.mobile.length < 10) {
    err.mobile = "Please enter a 10 digit number";
  }
  if (!check) {
    err.isChecked = "Check this box if you want to proceed";
  }
  return err;
};
