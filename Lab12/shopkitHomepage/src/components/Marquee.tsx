// Scrolling Y2K ticker strip. The text is written twice so the loop is seamless.
function Marquee() {
  const message =
    "✦ WINTER SALE 15% OFF ✦ FREE DELIVERY OVER RS 5,000 ✦ CASH ON DELIVERY ✦ 7-DAY RETURNS ✦ 1-YEAR WARRANTY ";

  return (
    <div className="marquee" aria-label="Store announcements">
      <div className="marquee-track">
        <span>{message}</span>
        <span aria-hidden="true">{message}</span>
      </div>
    </div>
  );
}

export default Marquee;
