import { useState } from "react";
import "./formsignin.css";
import { useDispatch } from "react-redux";
import { login } from "../../actions/post.action";
import { useNavigate } from "react-router-dom";
function FormSignIn() {
  const [userEmail, setUsername] = useState("");
  const [userPassword, setPassword] = useState("");
  const [userCheckbox, setCheckbox] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const connect = async (event) => {
    event.preventDefault();
    const data = {
      email: userEmail,
      password: userPassword,
    };
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const data = await response.json();

        const token = data.body.token;
        dispatch(login(token));
        navigate("/user/2");
      } else {
        const error = "Incorrect email/password";
        console.log(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={(event) => setUsername(event.target.value)}
          value={userEmail}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
          value={userPassword}
        />
      </div>
      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          onChange={(event) => setCheckbox(event.target.value)}
          checked={userCheckbox}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      {/* PLACEHOLDER DUE TO STATIC SITE*/}

      {/* SHOULD BE THE BUTTON BELOW */}
      <button onClick={connect} className="sign-in-button">
        Sign In
      </button>
    </div>
  );
}

export default FormSignIn;
