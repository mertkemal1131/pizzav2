export default function FoodGrid() {
  return (
    <section className="food-grid">
      <div className="food-card">
        <img
          src="/assets/iteration-2/pictures/food-1.png"
          alt="Terminal Pizza"
        />
        <h3>Terminal Pizza</h3>
        <div className="food-info">
          <span className="rating">4.9</span>
          <span className="review-count">(200)</span>
          <span className="price">60₺</span>
        </div>
      </div>

      <div className="food-card">
        <img
          src="/assets/iteration-2/pictures/food-2.png"
          alt="Position Absolute"
        />
        <h3>Position Absolute Acı Pizza</h3>
        <div className="food-info">
          <span className="rating">4.9</span>
          <span className="review-count">(928)</span>
          <span className="price">85₺</span>
        </div>
      </div>

      <div className="food-card">
        <img
          src="/assets/iteration-2/pictures/food-3.png"
          alt="useEffect Burger"
        />
        <h3>useEffect Tavuklu Burger</h3>
        <div className="food-info">
          <span className="rating">4.9</span>
          <span className="review-count">(462)</span>
          <span className="price">75₺</span>
        </div>
      </div>
    </section>
  );
}
