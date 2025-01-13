import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <ul className="icons-social-network">
          <img
            src="https://i.ibb.co/LtmJkt3/facebook.png"
            alt="logo facebook"
            className="social-network-icon"
          />
          <img
            src="https://i.ibb.co/1QrM2Bx/instagram.png"
            alt="logo instagram"
            className="social-network-icon"
          />
          <img
            src="https://i.ibb.co/SK4H7d6/twitter.png"
            alt="logo Twitter"
            className="social-network-icon"
          />
          <img
            src="https://i.ibb.co/x1JckcH/pinterest.png"
            alt="logo Pinterest"
            className="social-network-icon"
          />
        </ul>
        <p className="copyright-footer">
          © 2025 Propulsé par la team Pot'Piette
        </p>
      </footer>
    </>
  );
}

export default Footer;
