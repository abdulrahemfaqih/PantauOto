'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Home,
  Fuel,
  Wrench,
  BarChart2,
  Bell,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Layers,
  ArrowRight,
  TrendingUp,
  Clock,
  Shield,
  Trash2,
  Check,
  Car,
  User,
} from 'lucide-react';

interface ScreenFeature {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  highlights: { title: string; desc: string }[];
  renderScreen: () => React.ReactNode;
}

export function ScreenShowcaseSection() {
  const [selectedScreenId, setSelectedScreenId] = useState<string>('dashboard');

  const screens: ScreenFeature[] = [
    // ─── 1. BERANDA & DASHBOARD ───
    {
      id: 'dashboard',
      title: '1. Dashboard Beranda & Hub Kendaraan',
      badge: 'PUSAT KONTROL',
      shortDesc:
        'Halaman utama yang menampilkan seluruh armada motor & mobil Anda, tombol aksi cepat, kartu pengingat penting, dan ringkasan pengeluaran bulanan.',
      highlights: [
        {
          title: 'Kartu Kendaraan Horizontal',
          desc: 'Geser dan pilih motor atau mobil aktif Anda dengan informasi odometer terkini dan status kendaraan.',
        },
        {
          title: 'Aksi Cepat 1-Tap',
          desc: 'Tombol ringkas dan cepat untuk Menambah Kendaraan, Mencatat BBM, Membuat Pengingat, atau Cek Jadwal Servis.',
        },
        {
          title: 'Box "Perlu Perhatian"',
          desc: 'Mendeteksi otomatis komponen yang melewati batas servis (TERLEWAT) atau mendekati kilometer servis (SEGERA).',
        },
        {
          title: 'Ringkasan Bulan Ini',
          desc: 'Metrik 3-kolom menampilkan total liter BBM, total biaya rupiah, dan rata-rata efisiensi km/L.',
        },
      ],
      renderScreen: () => (
        <div className="flex flex-col h-full bg-[#f9f9f9] text-black text-left">
          {/* Header */}
          <div className="h-12 bg-white border-b border-[#e2e2e2] px-3.5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 border border-black rounded flex items-center justify-center bg-white p-1">
                <Image src="/logo.png" alt="Logo" width={14} height={14} />
              </div>
              <span className="font-bold text-xs">PantauOto</span>
            </div>
            <div className="w-6 h-6 border border-black rounded flex items-center justify-center bg-white relative">
              <Bell className="w-3 h-3" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#ba1a1a] rounded-full" />
            </div>
          </div>

          {/* Body */}
          <div className="p-3 space-y-3 overflow-y-auto flex-1 text-[11px]">
            {/* Vehicle Card Selected */}
            <div className="border border-black rounded p-3 bg-white">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-xs">Honda Vario 160</div>
                  <div className="text-[10px] text-[#5e5e5e]">Honda • Vario 160 ABS • 2024</div>
                </div>
                <span className="text-[9px] font-bold bg-black text-white px-1.5 py-0.5 rounded">AKTIF</span>
              </div>
              <div className="mt-2.5 pt-2 border-t border-[#e2e2e2] flex justify-between items-baseline">
                <span className="text-[9px] uppercase tracking-wider text-[#5e5e5e]">ODOMETER</span>
                <span className="font-mono font-bold text-xs">12.450 <span className="text-[9px] font-normal">km</span></span>
              </div>
            </div>

            {/* Quick Actions 4-Grid */}
            <div>
              <div className="text-[9px] font-bold text-[#5e5e5e] uppercase tracking-wider mb-1.5">AKSI CEPAT</div>
              <div className="grid grid-cols-4 gap-1 text-center text-[9px] font-medium">
                <div className="border border-black rounded p-1.5 bg-white">+ Mobil/Motor</div>
                <div className="border border-black rounded p-1.5 bg-white">Catat BBM</div>
                <div className="border border-black rounded p-1.5 bg-white">Pengingat</div>
                <div className="border border-black rounded p-1.5 bg-white">Servis</div>
              </div>
            </div>

            {/* Attention Box */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[9px] font-bold text-[#5e5e5e] uppercase">PERLU PERHATIAN</span>
                <span className="text-[9px] underline">lihat semua</span>
              </div>
              <div className="border border-black rounded bg-white p-2.5 space-y-2 divide-y divide-[#e2e2e2]">
                <div className="flex justify-between items-center pt-1 first:pt-0">
                  <div>
                    <div className="font-bold text-[10px]">Ganti Oli Mesin SPX2</div>
                    <div className="text-[9px] text-[#5e5e5e]">550 km lagi (Est. 12 Feb)</div>
                  </div>
                  <span className="text-[8px] font-bold bg-neutral-200 text-black px-1.5 py-0.5 rounded">SEGERA</span>
                </div>
                <div className="flex justify-between items-center pt-1.5">
                  <div>
                    <div className="font-bold text-[10px]">Oli Gardan / Gear</div>
                    <div className="text-[9px] text-[#5e5e5e]">Lewat 200 km</div>
                  </div>
                  <span className="text-[8px] font-bold bg-red-100 text-red-800 px-1.5 py-0.5 rounded">TERLEWAT</span>
                </div>
              </div>
            </div>

            {/* Ringkasan */}
            <div>
              <div className="text-[9px] font-bold text-[#5e5e5e] uppercase mb-1.5">RINGKASAN BULAN INI</div>
              <div className="grid grid-cols-3 gap-1.5 text-center">
                <div className="border border-black rounded p-2 bg-white">
                  <div className="text-[8px] text-[#5e5e5e]">TOTAL BBM</div>
                  <div className="font-bold text-[11px] mt-0.5">18.5 L</div>
                </div>
                <div className="border border-black rounded p-2 bg-white">
                  <div className="text-[8px] text-[#5e5e5e]">TOTAL BIAYA</div>
                  <div className="font-bold text-[11px] mt-0.5">Rp 185k</div>
                </div>
                <div className="border border-black rounded p-2 bg-white">
                  <div className="text-[8px] text-[#5e5e5e]">RATA-RATA</div>
                  <div className="font-bold text-[11px] mt-0.5">47.8 km/L</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Tab Bar */}
          <div className="h-11 bg-white border-t border-black grid grid-cols-4 shrink-0 text-center">
            <div className="bg-black text-white flex items-center justify-center"><Home className="w-4 h-4" /></div>
            <div className="flex items-center justify-center text-black"><Car className="w-4 h-4" /></div>
            <div className="flex items-center justify-center text-black"><BarChart2 className="w-4 h-4" /></div>
            <div className="flex items-center justify-center text-black"><User className="w-4 h-4" /></div>
          </div>
        </div>
      ),
    },

    // ─── 2. PENCATATAN BBM ───
    {
      id: 'fuel',
      title: '2. Form Pencatatan Pengisian BBM',
      badge: 'EFISIENSI & BIAYA',
      shortDesc:
        'Form pencatatan pengisian bahan bakar yang intuitif. Memasukkan odometer, liter, dan total biaya untuk menghasilkan kalkulasi km/L secara instan.',
      highlights: [
        {
          title: 'Perhitungan Otomatis km/L',
          desc: 'Membandingkan selisih odometer dengan jumlah liter yang diisi untuk memberikan data konsumsi bensin yang tepat.',
        },
        {
          title: 'Pilihan Lengkap Jenis BBM',
          desc: 'Mendukung Pertalite, Pertamax, Pertamax Turbo, Solar, Dexlite, dan Pertamina Dex.',
        },
        {
          title: 'Pelacakan Pengeluaran per Kilometer',
          desc: 'Mengetahui biaya riil rupiah per kilometer (Rp/km) untuk efisiensi mobilitas harian.',
        },
        {
          title: 'Validasi Data Odometer',
          desc: 'Mencegah kesalahan input jika angka kilometer lebih kecil dari catatan sebelumnya.',
        },
      ],
      renderScreen: () => (
        <div className="flex flex-col h-full bg-[#f9f9f9] text-black text-left">
          {/* Header */}
          <div className="h-12 bg-white border-b border-[#e2e2e2] px-3.5 flex items-center justify-between shrink-0">
            <span className="text-xs font-bold">← Batal</span>
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 border border-black rounded flex items-center justify-center p-0.5">
                <Image src="/logo.png" alt="Logo" width={12} height={12} />
              </div>
              <span className="font-bold text-xs">PantauOto</span>
            </div>
            <div className="w-5" />
          </div>

          {/* Form Body */}
          <div className="p-3.5 space-y-3 overflow-y-auto flex-1 text-[11px]">
            <div>
              <div className="font-bold text-sm text-black">Tambah Isi BBM</div>
              <div className="text-[10px] text-[#5e5e5e]">Catat pengisian bensin Honda Vario 160</div>
            </div>

            <div className="space-y-2.5">
              <div>
                <label className="text-[9px] font-bold text-[#5e5e5e] uppercase block mb-1">ODOMETER SAAT INI (KM) *</label>
                <div className="border border-black rounded p-2 bg-white font-mono font-bold text-xs flex justify-between">
                  <span>12.650</span>
                  <span className="text-[#5e5e5e] font-normal text-[10px]">km</span>
                </div>
              </div>

              <div>
                <label className="text-[9px] font-bold text-[#5e5e5e] uppercase block mb-1">JUMLAH LITER (L) *</label>
                <div className="border border-black rounded p-2 bg-white font-mono font-bold text-xs flex justify-between">
                  <span>4.20</span>
                  <span className="text-[#5e5e5e] font-normal text-[10px]">Liter</span>
                </div>
              </div>

              <div>
                <label className="text-[9px] font-bold text-[#5e5e5e] uppercase block mb-1">TOTAL BIAYA (RP) *</label>
                <div className="border border-black rounded p-2 bg-white font-mono font-bold text-xs flex justify-between">
                  <span>Rp 42.000</span>
                </div>
              </div>

              <div>
                <label className="text-[9px] font-bold text-[#5e5e5e] uppercase block mb-1">JENIS BAHAN BAKAR *</label>
                <div className="grid grid-cols-3 gap-1 text-[9px] font-bold text-center">
                  <div className="border border-black rounded p-1.5 bg-black text-white">PERTALITE</div>
                  <div className="border border-[#e2e2e2] rounded p-1.5 bg-white">PERTAMAX</div>
                  <div className="border border-[#e2e2e2] rounded p-1.5 bg-white">TURBO</div>
                </div>
              </div>

              <button className="w-full bg-black text-white font-bold text-xs py-2 rounded text-center mt-2">
                Simpan Catatan BBM
              </button>
            </div>
          </div>
        </div>
      ),
    },

    // ─── 3. JADWAL & RIWAYAT SERVIS ───
    {
      id: 'service',
      title: '3. Jadwal Pengingat & Riwayat Servis',
      badge: 'PERAWATAN RUTIN',
      shortDesc:
        'Sistem manajemen pemeliharaan kendaraan dengan dua tab: Pengingat Servis Aktif (dengan tombol Tandai Selesai) dan Log Riwayat Servis Permanen.',
      highlights: [
        {
          title: 'Sub-Tabs: Jadwal vs Riwayat',
          desc: 'Pemisahan jelas antara tugas servis yang akan datang dengan catatan servis yang telah rampung dilakukan.',
        },
        {
          title: 'Tombol "Tandai Selesai" 1-Klik',
          desc: 'Saat Anda klik selesai, sistem otomatis membuat riwayat tanggal & odometer serta menghitung jadwal servis berikutnya.',
        },
        {
          title: 'Buku Servis Digital Permanen',
          desc: 'Mencatat seluruh rekam jejak penggantian spare part dan servis mekanik untuk menjaga harga jual kendaraan.',
        },
        {
          title: 'Template Servis Otomatis',
          desc: 'Tersedia preset servis: Ganti Oli Mesin, Oli Gardan, Filter Udara, Busi, Kampas Rem, Radiator, dan CVT.',
        },
      ],
      renderScreen: () => (
        <div className="flex flex-col h-full bg-[#f9f9f9] text-black text-left">
          {/* Header */}
          <div className="h-12 bg-white border-b border-[#e2e2e2] px-3.5 flex items-center justify-between shrink-0">
            <span className="text-xs font-bold">← Kembali</span>
            <span className="font-bold text-xs">Detail Servis</span>
            <div className="w-5" />
          </div>

          <div className="p-3 space-y-2.5 overflow-y-auto flex-1 text-[11px]">
            {/* Sub Tabs */}
            <div className="flex border border-black rounded p-0.5 bg-white text-center text-[10px] font-bold">
              <div className="flex-1 bg-black text-white py-1 rounded">JADWAL PENGINGAT (2)</div>
              <div className="flex-1 text-black py-1">RIWAYAT SELESAI (3)</div>
            </div>

            {/* Reminder Cards */}
            <div className="border border-black rounded p-3 bg-white space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-xs text-black">Ganti Oli Mesin SPX2</div>
                  <div className="text-[10px] text-[#5e5e5e]">Tiap 2.000 km • Odo terakhir 10.500 km</div>
                </div>
                <span className="text-[9px] font-bold bg-neutral-200 text-black px-1.5 py-0.5 rounded">SEGERA</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-[#e2e2e2]">
                <span className="text-[10px] text-[#5e5e5e]">Jadwal pada 12.500 km</span>
                <button className="text-[10px] font-bold bg-black text-white px-2.5 py-1 rounded">
                  ✓ Tandai Selesai
                </button>
              </div>
            </div>

            <div className="border border-[#e2e2e2] rounded p-3 bg-white space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-xs text-black">Oli Gardan / Transmisi</div>
                  <div className="text-[10px] text-[#5e5e5e]">Tiap 6.000 km • Odo terakhir 6.000 km</div>
                </div>
                <span className="text-[9px] font-bold bg-red-100 text-red-800 px-1.5 py-0.5 rounded">TERLEWAT</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-[#e2e2e2]">
                <span className="text-[10px] text-[#5e5e5e]">Jadwal pada 12.000 km</span>
                <button className="text-[10px] font-bold bg-black text-white px-2.5 py-1 rounded">
                  ✓ Tandai Selesai
                </button>
              </div>
            </div>

            {/* Riwayat Preview */}
            <div className="border border-[#e2e2e2] rounded p-2.5 bg-[#f5f5f5]">
              <div className="flex justify-between items-center text-[10px]">
                <span className="font-bold text-black">Servis CVT & Pembersihan Roller</span>
                <span className="text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded font-bold text-[8px]">SELESAI</span>
              </div>
              <div className="text-[9px] text-[#5e5e5e] mt-1 font-mono">14 Feb 2026 • Odo: 12.100 km</div>
            </div>
          </div>
        </div>
      ),
    },

    // ─── 4. ANALISIS STATISTIK & GRAFIK ───
    {
      id: 'stats',
      title: '4. Statistik Konsumsi & Tren Biaya',
      badge: 'VISUALISASI DATA',
      shortDesc:
        'Grafik garis tren bulanan, ringkasan 3-kolom, dan analisis rasio konsumsi bahan bakar untuk mengevaluasi efisiensi pengeluaran kendaraan.',
      highlights: [
        {
          title: 'Pilihan Periode Waktu Fleksibel',
          desc: 'Filter data performa kendaraan dalam rentang Bulan Ini, 3 Bulan, 6 Bulan, hingga 1 Tahun.',
        },
        {
          title: '3-Column Metrics Card',
          desc: 'Menampilkan angka Rata-Rata Efisiensi (km/L), Total Biaya (Rp), dan Total Jarak Tempuh (km) secara presisi.',
        },
        {
          title: 'Grafik Garis Monokrom',
          desc: 'Grafik visual interaktif untuk mendeteksi fluktuasi konsumsi bahan bakar dari waktu ke waktu.',
        },
        {
          title: 'Perbandingan Jenis Bahan Bakar',
          desc: 'Diagram perbandingan persentase pengisian antara Pertalite vs Pertamax untuk memilih BBM terbaik bagi kendaraan.',
        },
      ],
      renderScreen: () => (
        <div className="flex flex-col h-full bg-[#f9f9f9] text-black text-left">
          {/* Header */}
          <div className="h-12 bg-white border-b border-[#e2e2e2] px-3.5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 border border-black rounded flex items-center justify-center p-0.5">
                <Image src="/logo.png" alt="Logo" width={12} height={12} />
              </div>
              <span className="font-bold text-xs">PantauOto</span>
            </div>
            <span className="font-bold text-xs">Statistik</span>
            <div className="w-5" />
          </div>

          <div className="p-3 space-y-2.5 overflow-y-auto flex-1 text-[11px]">
            {/* Period Selector */}
            <div className="flex border border-[#e2e2e2] rounded p-0.5 bg-white text-center text-[9px] font-bold">
              <div className="flex-1 bg-black text-white py-1 rounded">BULAN INI</div>
              <div className="flex-1 text-[#5e5e5e] py-1">3 BULAN</div>
              <div className="flex-1 text-[#5e5e5e] py-1">6 BULAN</div>
              <div className="flex-1 text-[#5e5e5e] py-1">TAHUN</div>
            </div>

            {/* 3 Metrics Cards */}
            <div className="grid grid-cols-3 gap-1.5 text-center">
              <div className="border border-black rounded p-2 bg-white">
                <div className="text-[8px] text-[#5e5e5e] uppercase">RATA-RATA</div>
                <div className="font-bold text-xs mt-0.5">48.2 km/L</div>
              </div>
              <div className="border border-black rounded p-2 bg-white">
                <div className="text-[8px] text-[#5e5e5e] uppercase">TOTAL BIAYA</div>
                <div className="font-bold text-xs mt-0.5">Rp 165k</div>
              </div>
              <div className="border border-black rounded p-2 bg-white">
                <div className="text-[8px] text-[#5e5e5e] uppercase">TOTAL JARAK</div>
                <div className="font-bold text-xs mt-0.5">720 km</div>
              </div>
            </div>

            {/* Chart Box */}
            <div className="border border-black rounded p-3 bg-white space-y-2">
              <div className="text-[9px] font-bold text-[#5e5e5e] uppercase">TREN BULANAN EFISIENSI</div>
              <div className="h-24 flex items-end justify-between gap-2 pt-2 px-1 border-b border-black">
                {[
                  { m: 'Okt', val: 42 },
                  { m: 'Nov', val: 45 },
                  { m: 'Des', val: 44 },
                  { m: 'Jan', val: 48 },
                  { m: 'Feb', val: 49 },
                ].map((item) => (
                  <div key={item.m} className="flex-1 flex flex-col items-center gap-0.5">
                    <span className="text-[8px] font-mono font-bold">{item.val}</span>
                    <div className="w-full bg-black rounded-t" style={{ height: `${item.val * 1.3}px` }} />
                    <span className="text-[8px] text-[#5e5e5e]">{item.m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fuel Breakdown */}
            <div className="border border-[#e2e2e2] rounded p-2.5 bg-white space-y-1.5">
              <div className="text-[9px] font-bold text-[#5e5e5e] uppercase">KONSUMSI PER JENIS BBM</div>
              <div className="space-y-1">
                <div>
                  <div className="flex justify-between text-[9px]">
                    <span className="font-bold">Pertalite (65%)</span>
                    <span className="font-mono">12.0 L</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-100 rounded-full mt-0.5">
                    <div className="h-full bg-black rounded-full w-[65%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[9px]">
                    <span className="font-bold">Pertamax (35%)</span>
                    <span className="font-mono">6.5 L</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-100 rounded-full mt-0.5">
                    <div className="h-full bg-neutral-400 rounded-full w-[35%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // ─── 5. PUSAT NOTIFIKASI ───
    {
      id: 'notif',
      title: '5. Notifikasi & Pengingat Servis',
      badge: 'PERINGATAN CERDAS',
      shortDesc:
        'Pusat notifikasi yang memberi peringatan saat odometer mendekati jadwal servis, status terbaca permanen, dan tombol hapus/bersihkan notifikasi.',
      highlights: [
        {
          title: 'Indikator Badge Lonceng TopBar',
          desc: 'Titik merah menyala pada ikon lonceng jika terdapat servis yang mendesak atau belum dibaca.',
        },
        {
          title: 'Notifikasi Cerdas Kendaraan',
          desc: 'Peringatan otomatis saat oli mesin atau komponen aus mendekati batas kilometer servis.',
        },
        {
          title: 'Tandai Dibaca & Bersihkan Riwayat',
          desc: 'Tersedia tombol checklist untuk menandai semua dibaca dan tombol tempat sampah untuk membersihkan notifikasi.',
        },
        {
          title: 'Status Tersimpan Permanen',
          desc: 'Status notifikasi yang dibaca atau dihapus tetap tersimpan rapi bahkan setelah aplikasi ditutup.',
        },
      ],
      renderScreen: () => (
        <div className="flex flex-col h-full bg-[#f9f9f9] text-black text-left">
          {/* Header */}
          <div className="h-12 bg-white border-b border-[#e2e2e2] px-3.5 flex items-center justify-between shrink-0">
            <span className="text-xs font-bold">← Kembali</span>
            <span className="font-bold text-xs">Notifikasi</span>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" />
              <Trash2 className="w-3.5 h-3.5 text-[#5e5e5e]" />
            </div>
          </div>

          <div className="p-3 space-y-2 overflow-y-auto flex-1 text-[11px]">
            {/* Unread Notif Item */}
            <div className="border border-black rounded p-2.5 bg-white relative">
              <span className="absolute left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-black rounded-full" />
              <div className="pl-3">
                <div className="font-bold text-xs text-black">Jadwal Servis Honda Vario 160</div>
                <div className="text-[10px] text-[#5e5e5e] mt-0.5">
                  Oli mesin mendekati 12.500 km. Periksa jadwal servis untuk performa optimal.
                </div>
                <div className="text-[8px] font-mono text-[#5e5e5e] mt-1 uppercase">2 JAM YANG LALU</div>
              </div>
            </div>

            {/* Read Notif Item */}
            <div className="border border-[#e2e2e2] rounded p-2.5 bg-white opacity-70">
              <div className="font-bold text-xs text-black">Pemantauan Odometer Honda Vario 160</div>
              <div className="text-[10px] text-[#5e5e5e] mt-0.5">
                Odometer saat ini 12.450 km. Catat BBM rutin untuk menjaga akurasi prediksi.
              </div>
              <div className="text-[8px] font-mono text-[#5e5e5e] mt-1 uppercase">HARI INI</div>
            </div>

            {/* System Notif */}
            <div className="border border-[#e2e2e2] rounded p-2.5 bg-white opacity-70">
              <div className="font-bold text-xs text-black">PantauOto Siap Digunakan</div>
              <div className="text-[10px] text-[#5e5e5e] mt-0.5">
                Pelacakan efisiensi BBM dan prediksi servis otomatis telah aktif.
              </div>
              <div className="text-[8px] font-mono text-[#5e5e5e] mt-1 uppercase">SISTEM</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const currentScreen = screens.find((s) => s.id === selectedScreenId) || screens[0];

  return (
    <div className="w-full">
      {/* Screen Selector Tab Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {screens.map((screen) => {
          const isSelected = screen.id === selectedScreenId;
          return (
            <button
              key={screen.id}
              onClick={() => setSelectedScreenId(screen.id)}
              className={`px-4 py-2.5 rounded text-xs sm:text-sm font-semibold border transition-all text-left flex items-center gap-2 ${
                isSelected
                  ? 'bg-black text-white border-black shadow-sm scale-105'
                  : 'bg-white text-black border-[#e2e2e2] hover:border-black'
              }`}
            >
              <span>{screen.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Split Showcase: Smartphone Mockup on Left + Detailed Explanations on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-[#e2e2e2] rounded-2xl p-6 sm:p-10">
        {/* Left Side: Realistic Smartphone Frame with Screen Content */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-[310px] bg-black rounded-[32px] p-2.5 shadow-xl border-2 border-neutral-800">
            {/* Notch */}
            <div className="w-full flex justify-center mb-1.5">
              <div className="w-20 h-3.5 bg-neutral-900 rounded-full" />
            </div>

            {/* Screen Container */}
            <div className="w-full h-[520px] rounded-[22px] overflow-hidden border border-neutral-700 bg-white">
              {currentScreen.renderScreen()}
            </div>
          </div>
        </div>

        {/* Right Side: Feature Details & Explanations */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          <div className="inline-flex items-center px-3 py-1 bg-[#f9f9f9] border border-black rounded text-xs font-bold uppercase tracking-wider text-black">
            <span>{currentScreen.badge}</span>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
              {currentScreen.title}
            </h3>
            <p className="text-sm sm:text-base text-[#5e5e5e] mt-2 leading-relaxed">
              {currentScreen.shortDesc}
            </p>
          </div>

          {/* Highlights 4-Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2 border-t border-[#e2e2e2]">
            {currentScreen.highlights.map((item, idx) => (
              <div key={idx} className="border border-[#e2e2e2] rounded p-4 bg-[#f9f9f9]">
                <div className="flex items-center gap-2 font-bold text-xs text-black mb-1">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-[#5e5e5e] leading-relaxed pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Download CTA Link */}
          <div className="pt-2 flex items-center gap-4">
            <a
              href="#unduh"
              className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded text-xs font-bold hover:bg-neutral-800 active:scale-95 transition-all"
            >
              <span>Download APK untuk Mencoba</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
