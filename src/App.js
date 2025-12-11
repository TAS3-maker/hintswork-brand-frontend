import Content6 from "./pages/Content6";
import DryCry from "./pages/DryCry";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DryCry />} />

        <Route path="/contact" element={<Content6 />} />
      </Routes>
    </BrowserRouter>


  )
}
