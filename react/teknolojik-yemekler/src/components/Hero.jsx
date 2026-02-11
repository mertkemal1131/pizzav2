import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="logo">Teknolojik Yemekler</div>

      <div className="hero-content">
        <div className="subtitle">fırsatı kaçırma</div>

        <h1 className="hero-title">
          <div className="hero-line">
            <span>KOD</span> <span>ACIKTIRIR</span>
          </div>
          <div className="hero-line">
            <span>PİZZA,</span> <span>DOYURUR</span>
          </div>
        </h1>

        <Link to="/order">
          <button className="hero-button">ACIKTIM</button>
        </Link>
      </div>
    </section>
  );
}
