import "./Footer.css";

function Footer() {
  return (
    <footer>
      <ul className="icons-social-network">
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Page Facebook"
          >
            <img
              src="https://i.ibb.co/LtmJkt3/facebook.png"
              alt="Logo Facebook"
              className="social-network-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Page Instagram"
          >
            <img
              src="https://i.ibb.co/1QrM2Bx/instagram.png"
              alt="Logo Instagram"
              className="social-network-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compte Twitter"
          >
            <img
              src="https://i.ibb.co/SK4H7d6/twitter.png"
              alt="Logo Twitter"
              className="social-network-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Page Pinterest"
          >
            <img
              src="https://i.ibb.co/x1JckcH/pinterest.png"
              alt="Logo Pinterest"
              className="social-network-icon"
            />
          </a>
        </li>
      </ul>
      <p className="copyright-footer">© 2025 Propulsé par la team Pot'Piette</p>
    </footer>
  );
}

export default Footer;
