import SiteNavbar from "./components/SiteNavbar";
import Marquee from "./components/Marquee";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <SiteNavbar />
      <Marquee />
      <main>
        <Hero />
        <Features />
        <Products />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default App;
