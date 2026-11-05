// Optional small component — static for now (props come later)
function Button() {
  const text = "Add to cart";
  return (
    <button className="btn" onClick={() => console.log("Added to cart")}>
      {text}
    </button>
  );
}

export default Button;
