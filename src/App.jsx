import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Tentang from "./pages/Tentang";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Kontak from "./pages/Kontak";
import KuyPoint from "./pages/KuyPoint";
import YukAngkut from "./pages/YukAngkut";
import YukBuang from "./pages/YukBuang";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/kuypoint" element={<KuyPoint />} />
        <Route path="/yukangkut" element={<YukAngkut />} />
        <Route path="/yukbuang" element={<YukBuang />} />
      </Routes>
      <Footer />
    </>
  );
}