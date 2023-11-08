import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import IconTag from "../../components/IconTag";
import Hero from "../../components/Hero";
import "./home.css";
import IconChat from "../../assets/icon-chat.png";
import IconMoney from "../../assets/icon-money.png";
import IconSecurity from "../../assets/icon-security.png";
function Home() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <IconTag
            img={IconChat}
            alt="Chat Icon"
            description="Need to talk to a representative? You can get in touch through our 24/7
        chat or through a phone call in less than 5 minutes."
            titre="You are our #1 priority"
          />
          <IconTag
            img={IconMoney}
            alt="Money Icon"
            description="The more you save with us, the higher your interest rate will be!"
            titre="More savings means higher rates"
          />
          <IconTag
            img={IconSecurity}
            alt="Security Icon"
            description="We use top of the line encryption to make sure your data and money
          is always safe."
            titre="Security you can trust"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
