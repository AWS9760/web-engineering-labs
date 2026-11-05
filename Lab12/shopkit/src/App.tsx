import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />

        <section className="featured">
          <h2>Featured</h2>
          <div className="grid">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
