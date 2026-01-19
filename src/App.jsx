import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
