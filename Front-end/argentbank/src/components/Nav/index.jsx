import { Link, useNavigate } from "react-router-dom";
import ArgentBankLogo from "../../assets/argentBankLogo.png";
import "./nav.css";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../actions/post.action";

function Nav() {
  const user = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const disconnect = async () => {
    Logout(dispatch);
    navigate("/");
  };

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={ArgentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      <div>
        {user.token === "" ? (
          <Link to="/sign-in" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        ) : (
          <a href=" " onClick={disconnect} className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign Out
          </a>
        )}
      </div>
    </nav>
  );
}

export default Nav;
