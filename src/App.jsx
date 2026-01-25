import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/About/About";
import VehiclesPage from "./pages/Vehicles/Vehicles";
import ContactPage from "./pages/Contact/Contact";


export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vehicles" element={<VehiclesPage />} />
      </Route>
    </Routes>
  );
}
