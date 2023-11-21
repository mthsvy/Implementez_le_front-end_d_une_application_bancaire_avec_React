import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.token);
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {user.firstname} {user.lastname}
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}
export default Profile;
