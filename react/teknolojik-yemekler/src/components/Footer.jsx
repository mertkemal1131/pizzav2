export default function Footer() {
  return (
    <footer>
      <div className="footer-content">

        <div className="footer-col">
          <img
            src="/assets/iteration-2/footer/logo-footer.svg"
            alt="Teknolojik Yemekler Logo"
          />

          <address>
            <p>
              <img src="/assets/iteration-2/footer/icons/icon-1.png" />
              341 Londonderry Road, Istanbul Türkiye
            </p>
            <p>
              <img src="/assets/iteration-2/footer/icons/icon-2.png" />
              aciktim@teknolojikyemekler.com
            </p>
            <p>
              <img src="/assets/iteration-2/footer/icons/icon-3.png" />
              +90 216 123 45 67
            </p>
          </address>
        </div>

        <div className="footer-col">
          <h4>Hot Menu</h4>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Instagram</h4>
          <div className="insta-grid">
            <img src="/assets/iteration-2/footer/insta/li-0.png" />
            <img src="/assets/iteration-2/footer/insta/li-1.png" />
            <img src="/assets/iteration-2/footer/insta/li-2.png" />
            <img src="/assets/iteration-2/footer/insta/li-3.png" />
            <img src="/assets/iteration-2/footer/insta/li-4.png" />
            <img src="/assets/iteration-2/footer/insta/li-5.png" />
          </div>
        </div>

      </div>

      <div className="copyright">
        <div className="copyright-inner">
          <p>© 2023 Teknolojik Yemekler.</p>
          <a href="#" className="social-icon">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
