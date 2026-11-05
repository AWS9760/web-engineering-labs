function Hero() {
  // Change these variables, save, and the page updates (HMR)
  const headline = "Gear up for your next big project";
  const subtext = "Keyboards, mice and headphones picked for students and developers.";
  const discount = 15;
  const isSaleOn = true;
  const year = new Date().getFullYear();

  return (
    <section className="hero">
      <h2 className="hero-title">{headline}</h2>
      <p className="hero-text">{subtext}</p>
      <p className="hero-note">
        {isSaleOn ? `Winter sale: ${discount}% off everything` : "New arrivals every week"}
      </p>
      <button className="hero-btn" onClick={() => console.log("Shop now clicked")}>
        Shop now
      </button>
      <p className="hero-small">Serving happy customers since {year - 2}</p>
    </section>
  );
}

export default Hero;
