import React, { useState, useEffect } from "react";
import "./OrderForm.css";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const toppingsList = [
  "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan", "Domates",
  "Mısır", "Sucuk", "Biber", "Ananas", "Sarımsak", "Kabak"
];

export default function OrderForm() {
  const [form, setForm] = useState({
    size: "",
    dough: "",
    toppings: [],
    note: ""
  });
  const [quantity, setQuantity] = useState(1);
  const [isValid, setIsValid] = useState(false);

  const navigate = useNavigate();

  const PIZZA_BASE_PRICE = 85.50;
  const TOPPING_PRICE = 5;

  const toppingsTotal = form.toppings.length * TOPPING_PRICE * quantity;
  const total = (PIZZA_BASE_PRICE * quantity) + toppingsTotal;

  useEffect(() => {
    setIsValid(
      form.size !== "" &&
      form.dough !== "" &&
      form.toppings.length >= 4
    );
  }, [form]);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "toppings") {
      let newToppings = [...form.toppings];

      if (checked) {
        if (newToppings.length < 10) {
          newToppings.push(value);
        } else {
          alert("En fazla 10 malzeme seçebilirsiniz.");
          return;
        }
      } else {
        newToppings = newToppings.filter(t => t !== value);
      }

      setForm({ ...form, toppings: newToppings });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // 🔥 ASIL ÖNEMLİ KISIM
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    const orderData = {
      size: form.size,
      dough: form.dough,
      toppings: form.toppings,
      note: form.note,
      quantity,
      total: total.toFixed(2),
    };

    try {
      const response = await axios.post(
        "https://reqres.in/api/pizza",
        orderData,
        {
          headers: {
            "x-api-key": "reqres_7354abb332424bd88b362e5f5369a3aa",
            "Content-Type": "application/json",
          },
        }
      );

      // ✅ API response console'a basılır
      console.log("Sipariş Özeti (API Response):", response.data);

      // ✅ POST başarılı → success sayfasına yönlendirme
      navigate("/success", {
        state: {
          pizzaName: "Position Absolute Acı Pizza",
          size: form.size,
          dough: form.dough,
          toppings: form.toppings,
          totalToppingsPrice: `${toppingsTotal.toFixed(2)}₺`,
          grandTotal: `${total.toFixed(2)}₺`,
        },
      });

    } catch (error) {
      console.error("Sipariş gönderilirken hata oluştu:", error);
    }
  };

  return (
    <>
      <header className="header">
        <h1>Teknolojik Yemekler</h1>
        <div className="breadcrumbs">
          Anasayfa - <span className="active">Sipariş Oluştur</span>
        </div>
      </header>

      <div className="container">
        <div className="hero-image-container">
          <img
            src="/assets/iteration-2/pictures/form-banner.png"
            alt="Pizza"
            className="hero-image"
          />
        </div>

        <div className="form-content">
          <h2 className="product-title">Position Absolute Acı Pizza</h2>

          <div className="price-row">
            <span className="price">{PIZZA_BASE_PRICE.toFixed(2)}₺</span>
            <div className="rating">
              <span>4.9</span> <span>(200)</span>
            </div>
          </div>

          <p className="desc">
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
            Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış,
            geleneksel olarak odun ateşinde pişirilen lezzetli bir yemektir.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="options-grid">
              <div className="form-group">
                <h3>Boyut Seç <span className="red">*</span></h3>
                <div className="size-options">
                  {["S", "M", "L"].map((s) => (
                    <label key={s} className="size-label">
                      <input
                        type="radio"
                        name="size"
                        value={s}
                        onChange={handleChange}
                        checked={form.size === s}
                      />
                      <span className="size-span">{s}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <h3>Hamur Seç <span className="red">*</span></h3>
                <select
                  name="dough"
                  value={form.dough}
                  onChange={handleChange}
                  className="dough-select"
                >
                  <option value="" disabled>- Hamur Kalınlığı Seç -</option>
                  <option value="ince">İnce</option>
                  <option value="normal">Normal</option>
                  <option value="kalin">Kalın</option>
                </select>
              </div>
            </div>

            <div className="toppings-section">
              <h3>Ek Malzemeler</h3>
              <p>En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺</p>

              <div className="toppings-grid">
                {toppingsList.map((t) => (
                  <label key={t} className="checkbox-label">
                    <input
                      type="checkbox"
                      name="toppings"
                      value={t}
                      onChange={handleChange}
                      checked={form.toppings.includes(t)}
                    />
                    <span className="custom-checkbox"></span>
                    {t}
                  </label>
                ))}
              </div>
            </div>

            <div className="note-section">
              <h3>Sipariş Notu</h3>
              <textarea
                name="note"
                value={form.note}
                onChange={handleChange}
                placeholder="Siparişine eklemek istediğin bir not var mı?"
              />
            </div>

            <hr className="divider" />

            <div className="bottom-row">
              <div className="counter-group">
                <button type="button" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                <span>{quantity}</span>
                <button type="button" onClick={() => setQuantity(q => q + 1)}>+</button>
              </div>

              <div className="summary-card">
                <h3>Sipariş Toplamı</h3>

                <div className="summary-line">
                  <span>Seçimler</span>
                  <span>{toppingsTotal.toFixed(2)}₺</span>
                </div>

                <div className="summary-line total">
                  <span>Toplam</span>
                  <span>{total.toFixed(2)}₺</span>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={!isValid}
                >
                  SİPARİŞ VER
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
