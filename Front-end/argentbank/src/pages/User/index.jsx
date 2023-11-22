import Nav from "../../components/Nav";
import ArgentBalance from "../../components/ArgentBalance";
import "./user.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userProfile } from "../../actions/post.action";
import Profile from "../../components/Profile";
import { useNavigate } from "react-router-dom";

function User() {
  const token = useSelector((state) => state.token);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token || token.token === "") {
      navigate("/Error404");
      return;
    }
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      const userData = async () => {
        try {
          const response = await fetch(
            "http://localhost:3001/api/v1/user/profile",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token.token}`,
              },
            }
          );
          if (response.ok) {
            const data = await response.json();

            const userData = {
              createdAt: data.body.createdAt,
              updatedAt: data.body.updatedAt,
              id: data.body.id,
              email: data.body.email,
              firstname: data.body.firstName,
              lastname: data.body.lastName,
              username: data.body.userName,
              token: token.token,
            };
            /* Return user data in redux state */
            dispatch(userProfile(userData));
          } else {
            console.log("error while retrieving profile");
          }
        } catch (error) {
          console.error(error);
        }
      };
      userData();
    }
  }, [dispatch, token]);

  return (
    <div className="page">
      <Nav />
      <main className="main bg-dark">
        <Profile />
        <h2 className="sr-only">Accounts</h2>
        <ArgentBalance
          amount="2,082.79"
          title="Argent Bank Checking (x8349)"
          description="Available Balance"
        />
        <ArgentBalance
          amount="10,928.42"
          title="Argent Bank Savings (x6712)"
          description="Available Balance"
        />
        <ArgentBalance
          amount="184.30"
          title="Argent Bank Credit Card (x8349)"
          description="Current Balance"
        />
      </main>
    </div>
  );
}

export default User;
