import { useState } from "react";
import "./formsignin.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Login } from "../../actions/post.action";
import { useNavigate } from "react-router-dom";
function FormSignIn() {
  const [userName, setUsername] = useState("");
  const [userPassword, setPassword] = useState("");
  const [userCheckbox, setCheckbox] = useState(false);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const user = useSelector((state) => state.token);

  const Connect = async () => {
    const data = {
      email: userName,
      password: userPassword,
    };

    dispatch(Login(data));

    if (user.token !== "") {
      console.log("connected");
      Navigate("/");
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
          value={userName}
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
      <button onClick={() => Connect()} className="sign-in-button">
        Sign In
      </button>
    </div>
  );
}

export default FormSignIn;
