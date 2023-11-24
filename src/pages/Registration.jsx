import { useEffect, useState } from "react";
import suppericon from "../assets/icons/Superapp.png";
import banner from "../assets/images/banner.png";
import { evalute } from "../Functions";

const data = {
  name: "",
  username: "",
  email: "",
  mobile: "",
};
const Registration = () => {
  const [form, setForm] = useState(data);
  const [error, setError] = useState({});
  const [ischecked, setIschecked] = useState(false);
  const [issubmit, setIssubmit] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //checking if any input is not fillup
    setError(evalute(form, ischecked));
    setIssubmit(true);
  };

  useEffect(() => {
    //if the error stack is empty then save the data in local
    if (Object.keys(error).length === 0 && issubmit) {
      localStorage.setItem("form-data", JSON.stringify(form));
    }
  }, [error]);

  return (
    <div className="registration-page">
      <div className="page-banner">
        <img src={banner} alt="banner-image" />
        <h1>
          Discover new things on <br /> Superapp
        </h1>
      </div>

      <div className="registration-form">
        <img src={suppericon} alt="supericon" />
        <h3>Create your new account</h3>

        <form className="input-fields" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={(e) => handleChange(e)}
          />

          <span className="error">{error.name}</span>

          <input
            type="text"
            placeholder="Username"
            name="username"
            value={form.username}
            onChange={(e) => handleChange(e)}
          />
          <span className="error">{error.username}</span>

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={(e) => handleChange(e)}
          />
          <span className="error">{error.email}</span>

          <input
            type="number"
            placeholder="Mobile"
            name="mobile"
            value={form.mobile}
            onChange={(e) => handleChange(e)}
          />
          <span className="error">{error.mobile}</span>

          <label id="check-box">
            <input
              type="checkbox"
              name="checkbox"
              value={form.isChecked}
              onChange={(e) => setIschecked(!ischecked)}
            />
            <span>Share my registration data with Superapp</span>
          </label>
          <span className="error">{error.isChecked}</span>

          <button className="submit-btn">SIGN UP</button>
        </form>

        <div className="terms-condition">
          <p>
            By clicking on Sign up. you agree to Superapp
            <span>Terms and Conditions of Use</span>
          </p>
          <p>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp <span>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
