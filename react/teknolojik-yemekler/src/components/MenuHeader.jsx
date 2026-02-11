export default function MenuHeader() {
  return (
    <section className="menu-header">
      <p className="cursive-subtitle">en çok paketlenen menüler</p>

      <h2 className="menu-title">
        Acıktıran Kodlara Doyuran Lezzetler
      </h2>

      <div className="menu-nav">
        <button className="nav-btn">
          <img src="/assets/iteration-2/icons/1.svg" alt="Ramen" />
          Ramen
        </button>

        <button className="nav-btn active">
          <img src="/assets/iteration-2/icons/2.svg" alt="Pizza" />
          Pizza
        </button>

        <button className="nav-btn">
          <img src="/assets/iteration-2/icons/3.svg" alt="Burger" />
          Burger
        </button>

        <button className="nav-btn">
          <img src="/assets/iteration-2/icons/4.svg" alt="French Fries" />
          French Fries
        </button>

        <button className="nav-btn">
          <img src="/assets/iteration-2/icons/5.svg" alt="Fast Food" />
          Fast Food
        </button>

        <button className="nav-btn">
          <img src="/assets/iteration-2/icons/6.svg" alt="Soft Drinks" />
          Soft Drinks
        </button>
      </div>
    </section>
  );
}
