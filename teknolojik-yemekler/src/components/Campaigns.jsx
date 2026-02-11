import { Link } from "react-router-dom";

export default function Campaigns() {
  return (
    <section className="campaigns-container">
      <div className="card large-card">
        <div className="card-content">
          <h2 className="card-title">
            <span>Özel</span>
            <span>Lezzetus</span>
          </h2>

          <p className="card-desc">Position: Absolute Acı Burger</p>
          <Link to="/order" className="card-btn">
            SİPARİŞ VER
          </Link>
        </div>
        <img
          src="/assets/iteration-2/cta/kart-1.png"
          alt="Ozel Lezzetus"
          className="bg-img"
        />
      </div>

      <div className="card small-card dark-bg">
        <div className="card-content">
          <h3 className="card-title">
            Hackathlon <br /> Burger Menü
          </h3>
          <Link to="/order" className="card-btn">
            SİPARİŞ VER
          </Link>
        </div>
        <img
          src="/assets/iteration-2/cta/kart-2.png"
          alt="Hackathlon"
          className="bg-img"
        />
      </div>

      <div className="card small-card red-bg">
        <div className="card-content">
          <h3 className="card-title">
            <span className="highlight">Çoooook</span> hızlı <br /> npm gibi kurye
          </h3>
          <Link to="/order" className="card-btn">
            SİPARİŞ VER
          </Link>
        </div>
        <img
          src="/assets/iteration-2/cta/kart-3.png"
          alt="Kurye"
          className="bg-img"
        />
      </div>
    </section>
  );
}
