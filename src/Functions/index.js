import action from "../assets/images/action.png";
import drama from "../assets/images/drama.png";
import romance from "../assets/images/romance.png";
import thriller from "../assets/images/thriller.png";
import western from "../assets/images/western.png";
import horror from "../assets/images/horror.png";
import fantacy from "../assets/images/fantacy.png";
import music from "../assets/images/music.png";
import fiction from "../assets/images/fiction.png";
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

export const imageArray = [
  { title: "Action", color: "rgba(255, 82, 9, 1)", img: action },
  { title: "Drama", color: "rgba(215, 164, 255, 1)", img: drama },
  { title: "Romance", color: "rgba(17, 184, 0, 1)", img: romance },
  { title: "Thriller", color: "rgba(132, 194, 255, 1)", img: thriller },
  { title: "Western", color: "rgba(144, 37, 0, 1)", img: western },
  { title: "Horror", color: "rgba(115, 88, 255, 1)", img: horror },
  { title: "Fantacy", color: "rgba(255, 74, 222, 1)", img: fantacy },
  { title: "Music", color: "rgba(230, 30, 50, 1)", img: music },
  { title: "Fiction", color: "rgba(108, 208, 97, 1)", img: fiction },
];

export const calculateDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const currentDate = `${day}-${month}-${year}`;
  return currentDate;
};
export const calculateTime = () => {
  return new Date().toString().slice(15, 21);
};
