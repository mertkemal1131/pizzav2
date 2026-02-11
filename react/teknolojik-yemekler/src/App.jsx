import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OrderForm from "./components/OrderForm";
import Success from "./pages/Success";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<OrderForm />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
