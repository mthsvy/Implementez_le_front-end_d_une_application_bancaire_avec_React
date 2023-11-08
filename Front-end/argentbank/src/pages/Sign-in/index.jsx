import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import FormSignIn from "../../components/FormSignIn";
import "./signin.css";

function SignIn() {
  return (
    <div className="page">
      <Nav />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <FormSignIn />
        </section>
      </main>
      <Footer />

      <script></script>
    </div>
  );
}

export default SignIn;
