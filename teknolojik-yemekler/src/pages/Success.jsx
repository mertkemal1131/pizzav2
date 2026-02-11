import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import "./Success.css";

export default function Success() {
  const { state } = useLocation();

  const data = state || {
    pizzaName: "Position Absolute Acı Pizza",
    size: "L",
    dough: "Süper İnce",
    toppings: ["Pepperoni", "Sosis", "Mısır", "Ananas", "Jalapeno"],
    totalToppingsPrice: "25.00₺",
    grandTotal: "110.50₺",
  };

  return (
    <>
      <section className="success">
        <p className="success-brand">Teknolojik Yemekler</p>

        <p className="success-subtitle">lezzetin yolda</p>

        <h1 className="success-title">
          SİPARİŞ ALINDI
        </h1>

        <hr className="success-divider" />

        <div className="success-order">
          <h3>{data.pizzaName}</h3>

          <p><strong>Boyut:</strong> {data.size}</p>
          <p><strong>Hamur:</strong> {data.dough}</p>
          <p>
            <strong>Ek Malzemeler:</strong>{" "}
            {data.toppings.join(", ")}
          </p>
        </div>

        <div className="success-summary">
          <h4>Sipariş Toplamı</h4>

          <div className="summary-row">
            <span>Seçimler</span>
            <span>{data.totalToppingsPrice}</span>
          </div>

          <div className="summary-row total">
            <span>Toplam</span>
            <span>{data.grandTotal}</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
