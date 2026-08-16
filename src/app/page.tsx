'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { QRCodeSVG } from 'qrcode.react';
import {
  Download,
  Smartphone,
  CheckCircle2,
  Calendar,
  Fuel,
  BarChart3,
  Bell,
  ArrowRight,
  ChevronDown,
  Layers,
  Play,
} from 'lucide-react';
import { InteractiveAppSimulator } from '@/components/InteractiveAppSimulator';
import { ScreenShowcaseSection } from '@/components/ScreenShowcaseSection';

export default function LandingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Link file APK resmi di GitHub Releases
  const apkDownloadUrl =
    'https://github.com/abdulrahemfaqih/PantauOto/releases/download/v1.0.0/PantauOto.apk';

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] flex flex-col selection:bg-black selection:text-white">
      {/* ─── 1. NAVBAR ─── */}
      <header className="sticky top-0 z-50 bg-[#ffffff]/90 backdrop-blur-md border-b border-[#e2e2e2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 border border-black rounded flex items-center justify-center bg-white p-1.5 transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="PantauOto Logo"
                width={26}
                height={26}
                className="object-contain"
              />
            </div>
            <span className="font-semibold text-lg tracking-tight text-black">
              PantauOto
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5e5e5e]">
            <a href="#mockup" className="hover:text-black transition-colors font-semibold text-black">
              Tampilan Fitur
            </a>
            <a href="#simulator" className="hover:text-black transition-colors">
              Simulator Web
            </a>
            <a href="#panduan" className="hover:text-black transition-colors">
              Cara Pasang
            </a>
            <a href="#faq" className="hover:text-black transition-colors">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#unduh"
              className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded text-sm font-medium hover:bg-neutral-800 active:scale-95 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Unduh APK</span>
            </a>
          </div>
        </div>
      </header>

      {/* ─── 2. HERO SECTION ─── */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#e2e2e2] bg-gradient-to-b from-white to-[#f9f9f9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-6">
            <div className="inline-flex items-center px-3 py-1 bg-white border border-black rounded text-xs font-bold uppercase tracking-wider text-black">
              Versi 1.0.0 • Installer Android (.apk)
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.12]">
              Pantau Konsumsi BBM & Jadwal Servis Kendaraan Secara Presisi.
            </h1>

            <p className="text-base sm:text-lg text-[#5e5e5e] leading-relaxed max-w-2xl">
              Aplikasi pelacak kendaraan cerdas untuk motor dan mobil Anda. Hitung otomatis efisiensi km/L, dapatkan prediksi kilometer servis berkala, dan kendalikan pengeluaran bahan bakar dengan antarmuka monokrom minimalis.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto pt-2">
              <a
                href={apkDownloadUrl}
                download="pantauoto.apk"
                className="inline-flex items-center justify-center gap-3 bg-black text-white px-7 py-3.5 rounded text-base font-semibold hover:bg-neutral-800 active:scale-[0.98] transition-all text-center w-full sm:w-auto"
              >
                <Download className="w-5 h-5" />
                <span>Download PantauOto APK</span>
              </a>

              <a
                href="#mockup"
                className="inline-flex items-center justify-center gap-2 bg-white text-black border border-black px-6 py-3.5 rounded text-base font-semibold hover:bg-neutral-100 active:scale-[0.98] transition-all text-center w-full sm:w-auto"
              >
                <Smartphone className="w-5 h-5" />
                <span>Lihat Preview Layar & Fitur</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-[#5e5e5e]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                <span>100% Bebas Iklan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                <span>Kalkulasi km/L Akurat</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                <span>Pengingat Servis Otomatis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. SCREEN MOCKUPS SHOWCASE & FEATURE BREAKDOWN ─── */}
      <section id="mockup" className="py-20 bg-white border-b border-[#e2e2e2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f9f9f9] border border-black rounded text-xs font-bold uppercase tracking-wider text-black mb-3">
              <Layers className="w-3.5 h-3.5 text-black" />
              TAMPILAN MOCKUP APLIKASI
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-black tracking-tight">
              Eksplorasi Setiap Layar & Fitur PantauOto
            </h2>
            <p className="text-sm sm:text-base text-[#5e5e5e] mt-2">
              Pilih tab layar di bawah ini untuk melihat mockup smartphone dan penjelasan detail mengenai kemampuan setiap fiturnya.
            </p>
          </div>

          {/* Screen Showcase Component */}
          <ScreenShowcaseSection />
        </div>
      </section>

      {/* ─── 4. LIVE INTERACTIVE MOBILE SIMULATOR ─── */}
      <section id="simulator" className="py-20 bg-[#f9f9f9] border-b border-[#e2e2e2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center px-3 py-1 bg-white border border-black rounded text-xs font-bold uppercase tracking-wider text-black mb-3">
              SIMULATOR WEB INTERAKTIF
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-black tracking-tight">
              Coba Langsung Interaksi Aplikasi di Browser
            </h2>
            <p className="text-sm sm:text-base text-[#5e5e5e] mt-2">
              Anda dapat mengklik tab bawah, memilih kendaraan, mencatat bensin, dan menandai servis selesai.
            </p>
          </div>

          {/* Simulator Component */}
          <InteractiveAppSimulator />
        </div>
      </section>

      {/* ─── 5. PANDUAN CARA PASANG (HOW IT WORKS) ─── */}
      <section id="panduan" className="py-20 bg-white border-b border-[#e2e2e2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#5e5e5e] mb-3">
              PANDUAN PRAKTIS
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
              3 Langkah Mudah Memasang PantauOto di HP Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-[#e2e2e2] rounded p-6 bg-[#f9f9f9] relative">
              <div className="w-8 h-8 bg-black text-white font-bold text-sm rounded flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="font-bold text-lg text-black mb-2">Unduh File APK</h3>
              <p className="text-sm text-[#5e5e5e] leading-relaxed">
                Klik tombol "Unduh APK" atau scan QR Code langsung dari kamera HP Anda untuk mengunduh installer resmi PantauOto.
              </p>
            </div>

            <div className="border border-[#e2e2e2] rounded p-6 bg-[#f9f9f9] relative">
              <div className="w-8 h-8 bg-black text-white font-bold text-sm rounded flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="font-bold text-lg text-black mb-2">Izinkan Instalasi</h3>
              <p className="text-sm text-[#5e5e5e] leading-relaxed">
                Buka file APK yang telah diunduh. Jika muncul peringatan keamanan browser, pilih <em>"Izinkan dari sumber ini"</em> (Install Unknown Apps).
              </p>
            </div>

            <div className="border border-[#e2e2e2] rounded p-6 bg-[#f9f9f9] relative">
              <div className="w-8 h-8 bg-black text-white font-bold text-sm rounded flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="font-bold text-lg text-black mb-2">Buka & Daftarkan Motor/Mobil</h3>
              <p className="text-sm text-[#5e5e5e] leading-relaxed">
                Buka aplikasi PantauOto, buat akun cepat, lalu masukkan odometer awal kendaraan untuk mulai memantau efisiensi harian.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. DOWNLOAD / UNDUH CALL-TO-ACTION SECTION ─── */}
      <section id="unduh" className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left text */}
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center px-3 py-1 bg-neutral-800 border border-neutral-700 rounded text-xs font-semibold uppercase tracking-wider text-neutral-300">
                  Installer Resmi Android (.apk)
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  Siap Merawat Kendaraan Anda Secara Cerdas?
                </h2>
                <p className="text-neutral-400 text-sm sm:text-base max-w-xl leading-relaxed">
                  Unduh PantauOto sekarang juga secara gratis. Dapatkan kontrol penuh terhadap biaya BBM dan kesehatan mesin kendaraan Anda setiap hari.
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={apkDownloadUrl}
                    download="pantauoto.apk"
                    className="inline-flex items-center gap-3 bg-white text-black px-6 py-3.5 rounded text-base font-bold hover:bg-neutral-200 active:scale-95 transition-all"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download PantauOto APK</span>
                  </a>
                  <span className="text-xs text-neutral-400">
                    Versi 1.0.0 • Kompatibel Android 8.0+
                  </span>
                </div>
              </div>

              {/* Right QR Code Box */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-white rounded-lg text-black border border-neutral-200 text-center">
                <QRCodeSVG
                  value={apkDownloadUrl}
                  size={148}
                  level="M"
                  includeMargin={false}
                />
                <div className="mt-3">
                  <div className="text-xs font-bold text-black uppercase tracking-wider">Scan dari Kamera HP</div>
                  <div className="text-[11px] text-[#5e5e5e] mt-0.5">Untuk download langsung di smartphone</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. FAQ SECTION ─── */}
      <section id="faq" className="py-20 bg-white border-b border-[#e2e2e2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#5e5e5e] mb-3">
              TANYA JAWAB (FAQ)
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
              Pertanyaan yang Sering Diajukan
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'Apakah aplikasi PantauOto gratis?',
                a: 'Ya, PantauOto 100% gratis untuk diunduh dan digunakan tanpa biaya langganan tersembunyi.',
              },
              {
                q: 'Bagaimana cara PantauOto menghitung efisiensi BBM (km/L)?',
                a: 'Sistem membandingkan selisih jarak odometer antara dua pengisian bahan bakar dengan volume liter BBM yang Anda masukkan, sehingga menghasilkan angka km/L yang akurat.',
              },
              {
                q: 'Apakah data kendaraan saya aman?',
                a: 'Seluruh data catatan BBM, pengingat servis, dan profil kendaraan tersimpan dengan enkripsi aman di server basis data PantauOto.',
              },
              {
                q: 'Bisakah saya mendaftarkan lebih dari satu kendaraan?',
                a: 'Tentu saja! Anda dapat mendaftarkan beberapa motor dan mobil sekaligus dalam satu akun dan memantau riwayatnya secara terpisah.',
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#e2e2e2] rounded overflow-hidden transition-all bg-white"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 text-left font-semibold text-sm sm:text-base hover:bg-[#f9f9f9] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#5e5e5e] transition-transform duration-200 ${
                      openFaqIndex === idx ? 'rotate-180 text-black' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === idx && (
                  <div className="px-4 pb-4 pt-1 text-sm text-[#5e5e5e] leading-relaxed border-t border-[#e2e2e2] bg-[#f9f9f9]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. FOOTER ─── */}
      <footer className="py-12 bg-white border-t border-[#e2e2e2] text-xs text-[#5e5e5e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 border border-black rounded flex items-center justify-center bg-white p-1">
              <Image src="/logo.png" alt="Logo" width={18} height={18} />
            </div>
            <span className="font-semibold text-sm text-black">PantauOto</span>
            <span className="text-[#9e9e9e]">•</span>
            <span>Smart Vehicle & Fuel Tracker</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#mockup" className="hover:text-black transition-colors font-medium text-black">Tampilan Layar</a>
            <a href="#simulator" className="hover:text-black transition-colors">Simulator</a>
            <a href="#panduan" className="hover:text-black transition-colors">Cara Pasang</a>
            <a href="#unduh" className="hover:text-black transition-colors">Unduh APK</a>
          </div>

          <div className="text-center sm:text-right">
            <p>© {new Date().getFullYear()} PantauOto Team. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
