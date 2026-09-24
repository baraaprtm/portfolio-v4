"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function MakananSehatLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className="min-h-screen bg-gray-50 text-gray-800 leading-normal"
      style={{
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
      }}
    >
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>

      {/* Project Header */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-white/10 bg-[#1a1a1a] relative z-50">
        <Link href="/" className="text-2xl font-bold text-white">
          Baraa<span className="text-[#00ff99]">.</span>
        </Link>
        <Link
          href="/work"
          className="text-sm text-white/70 hover:text-[#00ff99] transition-colors"
        >
          ← Back to Work
        </Link>
      </nav>

      {/* Navbar Makanan Sehat */}
      <nav className="sticky top-0 w-full z-40 bg-white bg-opacity-80 backdrop-blur shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-green-600">
            Makanan Sehat
          </a>

          <div className="space-x-4 hidden md:flex">
            <a href="#home" className="text-gray-800 hover:text-green-600">
              Beranda
            </a>
            <a href="#about" className="text-gray-800 hover:text-green-600">
              Tentang
            </a>
            <a href="#menu" className="text-gray-800 hover:text-green-600">
              Menu
            </a>
            <a href="#testimoni" className="text-gray-800 hover:text-green-600">
              Testimoni
            </a>
            <a href="#kontak" className="text-gray-800 hover:text-green-600">
              Kontak
            </a>
          </div>

          <div
            className="md:hidden cursor-pointer space-y-1 z-[80] transition-all duration-300"
            onClick={toggleMenu}
          >
            <span
              className={`block w-6 h-0.5 bg-green-800 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-green-800 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-green-800 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Slide */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-[70] md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <nav className="flex flex-col p-6 space-y-4 text-lg font-medium mt-16 text-gray-800">
          <a
            href="#home"
            className="text-gray-800 hover:text-green-600"
            onClick={toggleMenu}
          >
            Beranda
          </a>
          <a
            href="#about"
            className="text-gray-800 hover:text-green-600"
            onClick={toggleMenu}
          >
            Tentang
          </a>
          <a
            href="#menu"
            className="text-gray-800 hover:text-green-600"
            onClick={toggleMenu}
          >
            Menu
          </a>
          <a
            href="#testimoni"
            className="text-gray-800 hover:text-green-600"
            onClick={toggleMenu}
          >
            Testimoni
          </a>
          <a
            href="#kontak"
            className="text-gray-800 hover:text-green-600"
            onClick={toggleMenu}
          >
            Kontak
          </a>
        </nav>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-transparent z-[60] md:hidden ${menuOpen ? "block" : "hidden"}`}
        onClick={toggleMenu}
      ></div>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-32 pb-24 bg-gradient-to-br from-green-100 to-blue-100 overflow-hidden"
      >
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
              Makan Sehat, <br />
              <span className="text-green-600">Hidup Berkualitas</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              Sajian sehat berbahan organik dengan gizi seimbang yang mendukung
              gaya hidup aktif dan bahagia.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#menu"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition-shadow shadow-lg"
              >
                Lihat Menu
              </a>
              <a
                href="#about"
                className="border border-green-600 text-green-600 hover:bg-green-100 px-6 py-3 rounded-xl font-medium transition"
              >
                Tentang Kami
              </a>
            </div>
          </div>
          <div className="animate-fade-in relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ca4d32d2-1b00-44c7-b99e-69d5a93f0e39.png"
                alt="Ilustrasi makanan sehat"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Kenapa Memilih{" "}
              <span className="text-green-600">MakananSehat</span>?
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/92c6610f-d1be-43d8-bbac-c3220bff5064.png"
                alt="Proses pembuatan makanan sehat"
                className="rounded-lg shadow-md w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <i className="fas fa-leaf text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Bahan Organik Berkualitas
                    </h3>
                    <p className="text-gray-600">
                      Kami hanya menggunakan bahan-bahan organik terbaik yang
                      ditanam tanpa pestisida dan bahan kimia berbahaya.
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <i className="fas fa-heart text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Gizi Seimbang
                    </h3>
                    <p className="text-gray-600">
                      Setiap menu dirancang oleh ahli gizi untuk memenuhi
                      kebutuhan nutrisi harian Anda.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <i className="fas fa-bolt text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Praktis dan Segar
                    </h3>
                    <p className="text-gray-600">
                      Makanan kami dikemas dengan baik dan tetap segar ketika
                      sampai di tangan Anda.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Menu <span className="text-green-600">Kami</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilihan makanan sehat untuk berbagai kebutuhan nutrisi Anda
            </p>
            <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl">
              <div className="relative">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/54066783-5a39-4ec8-89d2-600042112b81.png"
                  alt="Quinoa Power Bowl"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Baru!
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Quinoa Power Bowl
                </h3>
                <p className="text-gray-600 mb-4">
                  Quinoa organik dengan sayuran segar, dada ayam panggang, dan
                  saus lemon thyme.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold">Rp 45.000</span>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl">
              <div className="relative">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a1b2ef68-a53a-4289-a675-e9d71b555c35.png"
                  alt="Tropical Smoothie Bowl"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Tropical Smoothie Bowl
                </h3>
                <p className="text-gray-600 mb-4">
                  Campuran buah tropis segar dengan granola renyah dan kelapa
                  parut.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold">Rp 38.000</span>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl">
              <div className="relative">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c1bfeca6-2df4-45c8-8f8a-7a96f327528f.png"
                  alt="Nasi Merah Sehat"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Best Seller
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Nasi Merah Sehat
                </h3>
                <p className="text-gray-600 mb-4">
                  Nasi merah organik dengan sayuran tumis, tahu, dan telur ayam
                  kampung.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold">Rp 42.000</span>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl">
              <div className="relative">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/67f30cb9-aeac-4421-977b-4c1a5b552b37.png"
                  alt="Fresh Greens Salad"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Fresh Greens Salad
                </h3>
                <p className="text-gray-600 mb-4">
                  Campuran sayuran hijau segar dengan dressing yogurt dan biji
                  bunga matahari.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold">Rp 35.000</span>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl">
              <div className="relative">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8085e42c-e1a4-40e3-ac27-2ebc7ea56ba7.png"
                  alt="Creamy Pumpkin Soup"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Creamy Pumpkin Soup
                </h3>
                <p className="text-gray-600 mb-4">
                  Sup labu kuning organik dengan krim rendah lemak dan rempah
                  pilihan.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold">Rp 32.000</span>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl">
              <div className="relative">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2fe91fd7-0483-48e5-860b-cc0ff789c91f.png"
                  alt="Fruit Yogurt Delight"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Fruit Yogurt Delight
                </h3>
                <p className="text-gray-600 mb-4">
                  Buah-buahan segar potong dengan yogurt alami dan madu murni.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold">Rp 30.000</span>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-block border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-medium transition"
            >
              Lihat Semua Menu
            </a>
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section id="testimoni" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Kata <span className="text-green-600">Pelanggan</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Apa yang mereka katakan tentang pengalaman menggunakan layanan
              kami
            </p>
            <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1508459a-aca2-4d22-87c9-15f211ae4de0.png"
                    alt="Dian Ayu"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Dian Ayu</h4>
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Sejak bergabung dengan program makan sehat ini, energi saya
                meningkat dan berat badan ideal tercapai. Makanannya enak dan
                variatif!"
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/156b22b7-90d9-4500-a94a-23424355adac.png"
                    alt="Rizky Pratama"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Rizky Pratama</h4>
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Sebagai eksekutif yang sibuk, MakananSehat sangat membantu pola
                makan saya. Praktis, sehat, dan rasanya luar biasa!"
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/988a3281-3495-4437-9d73-be918aced607.png"
                    alt="Ratna Wijaya"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Ratna Wijaya</h4>
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Setelah 3 bulan rutin memesan, kadar kolesterol dan gula darah
                saya jauh lebih terkontrol. Dokter pun memberikan apresiasi!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Dapatkan Tips Kesehatan Eksklusif
            </h2>
            <p className="text-green-100 mb-8">
              Berlangganan newsletter kami untuk mendapatkan resep sehat, tips
              nutrisi, dan promo khusus setiap minggu.
            </p>
            <form className="flex flex-col sm:flex-row max-w-md mx-auto sm:max-w-xl">
              <input
                type="email"
                placeholder="Alamat email Anda"
                className="px-4 py-3 rounded-lg flex-grow text-gray-800 focus:outline-none mb-2 sm:mb-0 sm:mr-2"
              />
              <button
                type="submit"
                className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition shadow-md"
              >
                Berlangganan
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Hubungi <span className="text-green-600">Kami</span>
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="bg-white p-8 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Informasi Kontak
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <i className="fas fa-map-marker-alt text-green-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Alamat</h4>
                      <p className="text-gray-600">
                        Jl. Sehat No. 123, Jakarta Selatan, 12560
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <i className="fas fa-phone-alt text-green-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Telepon</h4>
                      <p className="text-gray-600">(021) 1234-5678</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <i className="fas fa-envelope text-green-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">info@makanansehat.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <i className="fas fa-clock text-green-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Jam Operasional
                      </h4>
                      <p className="text-gray-600">
                        Senin-Jumat: 08.00-20.00
                        <br />
                        Sabtu-Minggu: 09.00-17.00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold text-gray-800 mb-4">
                    Ikuti Kami
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="#"
                      className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="#"
                      className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 md:pl-8">
              <div className="bg-white p-8 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Kirim Pesan
                </h3>
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Subjek
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-md"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="mt-2 text-gray-400">
                Gizi seimbang untuk hidup berkualitas
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end">
              <div className="flex space-x-6 mb-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Kebijakan Privasi
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Syarat & Ketentuan
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  FAQ
                </a>
              </div>
              <p className="text-gray-400">© 2025 Makanan Sehat. Baraaprtm.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        type="button"
        className={`fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition ${showBackToTop ? "block" : "hidden"}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
}
