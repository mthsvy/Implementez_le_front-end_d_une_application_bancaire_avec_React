import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ArgentBalance from "../../components/ArgentBalance";
import "./user.css";

function User() {
  return (
    <div className="page">
      <Nav />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
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
      <Footer />
    </div>
  );
}

export default User;
