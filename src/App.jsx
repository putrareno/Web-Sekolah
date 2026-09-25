import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../Components/navbar";
import Hero from "../Components/hero";
import About from "../Components/about";
import Akademik from "../Components/akademik";
import Ekstrakurikuler from "../Components/ekstrakurikuler";
import Kontak from "../Components/kontak";
import Footer from "../Components/footer";

// Komponen tak terlihat: menangani scroll otomatis
// - kalau URL punya hash (mis. /#profil), scroll ke elemen dengan id itu
// - kalau tidak ada hash (pindah halaman biasa), scroll ke paling atas
function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // beri jeda sedikit supaya elemen tujuan sudah selesai di-render
      const timeout = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 80);
      return () => clearTimeout(timeout);
    }
    window.scrollTo({ top: 0 });
  }, [location]);

  return null;
}

// Halaman utama: gabungan semua section
function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Akademik />
      <Ekstrakurikuler />
      <Footer />
    </>
  );
}

// Halaman Kontak: halaman terpisah
function KontakPage() {
  return (
    <>
      <Kontak />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kontak" element={<KontakPage />} />
      </Routes>
    </>
  );
}

export default App;