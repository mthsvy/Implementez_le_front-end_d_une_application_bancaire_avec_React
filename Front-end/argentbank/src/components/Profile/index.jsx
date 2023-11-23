import { useState } from "react";
import { useSelector } from "react-redux";
import "./profile.css";

function Profile() {
  const user = useSelector((state) => state.token);
  console.log(user);
  const [display, setDisplay] = useState(true);
  const [username, setUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const updateUserName = () => {};
  return (
    <div className="header">
      {display ? (
        <div>
          <h2>
            Welcome back
            <br />
            {user.firstname} {user.lastname} !
          </h2>
          <button className="edit-button" onClick={() => setDisplay(!display)}>
            Edit Name
          </button>
        </div>
      ) : (
        <div>
          <h2>Edit Profile</h2>
          <form>
            <div className="edit-input">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                defaultValue={user.username}
                onChange={(event) => setUserName(event.target.value)}
              />
            </div>
            <div className="edit-input">
              <label htmlFor="firstname">First name:</label>
              <input
                type="text"
                id="firstname"
                defaultValue={user.firstname}
                disabled={true}
              />
            </div>
            <div className="edit-input">
              <label htmlFor="lastname">Last name:</label>
              <input
                type="text"
                id="lastname"
                defaultValue={user.lastname}
                disabled={true}
              />
            </div>
            <div className="buttons">
              <button className="edit-username-button" onClick={updateUserName}>
                Save
              </button>
              <button
                className="edit-username-button"
                onClick={() => setDisplay(!display)}
              >
                Cancel
              </button>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
      )}
    </div>
  );
}
export default Profile;
