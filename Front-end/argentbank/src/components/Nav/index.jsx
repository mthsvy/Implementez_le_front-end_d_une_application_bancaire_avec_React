import { Link, useNavigate } from "react-router-dom";
import ArgentBankLogo from "../../assets/argentBankLogo.webp";
import "./nav.css";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../actions/post.action";

function Nav() {
  const user = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const disconnect = async () => {
    dispatch(Logout());
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
            <i className="fa fa-user-circle"></i> &nbsp; Sign In
          </Link>
        ) : (
          <span>
            <span className="main-nav-item">
              {user.username} <i className="fa fa-user-circle"></i>&nbsp;
            </span>{" "}
            <a href=" " onClick={disconnect} className="main-nav-item">
              Sign Out&nbsp;
              <i className="fa fa-sign-out" aria-hidden="true"></i>
            </a>
          </span>
        )}
      </div>
    </nav>
  );
}

export default Nav;
