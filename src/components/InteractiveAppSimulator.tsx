'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Home,
  Car,
  BarChart2,
  User,
  Bell,
  Plus,
  Droplet,
  Clock,
  Wrench,
  ChevronRight,
  CheckCircle2,
  ArrowLeft,
  Info,
  LogOut,
  Sparkles,
  RotateCcw,
} from 'lucide-react';

interface DummyVehicle {
  id: number;
  name: string;
  brand: string;
  model: string;
  year: number;
  odometer: number;
  type: 'motorcycle' | 'car';
}

interface DummyReminder {
  id: number;
  name: string;
  vehicleName: string;
  intervalKm: number;
  lastOdo: number;
  dueOdo: number;
  status: 'overdue' | 'due_soon' | 'normal';
}

interface DummyServiceLog {
  id: number;
  name: string;
  completedAt: string;
  odometer: number;
  notes: string;
}

const INITIAL_VEHICLES: DummyVehicle[] = [
  {
    id: 1,
    name: 'Honda Vario 160',
    brand: 'Honda',
    model: 'Vario 160 ABS',
    year: 2024,
    odometer: 12450,
    type: 'motorcycle',
  },
  {
    id: 2,
    name: 'Yamaha NMAX',
    brand: 'Yamaha',
    model: 'NMAX 155 Connected',
    year: 2023,
    odometer: 18900,
    type: 'motorcycle',
  },
  {
    id: 3,
    name: 'Toyota Avanza',
    brand: 'Toyota',
    model: 'Avanza 1.5 G',
    year: 2022,
    odometer: 34200,
    type: 'car',
  },
];

const INITIAL_REMINDERS: DummyReminder[] = [
  {
    id: 1,
    name: 'Ganti Oli Mesin SPX2',
    vehicleName: 'Honda Vario 160',
    intervalKm: 2000,
    lastOdo: 10500,
    dueOdo: 12500,
    status: 'due_soon',
  },
  {
    id: 2,
    name: 'Ganti Oli Gardan / Transmisi',
    vehicleName: 'Honda Vario 160',
    intervalKm: 6000,
    lastOdo: 6000,
    dueOdo: 12000,
    status: 'overdue',
  },
  {
    id: 3,
    name: 'Cek Busi & Filter Udara',
    vehicleName: 'Honda Vario 160',
    intervalKm: 8000,
    lastOdo: 8000,
    dueOdo: 16000,
    status: 'normal',
  },
];

const INITIAL_LOGS: DummyServiceLog[] = [
  {
    id: 101,
    name: 'Servis CVT & Pembersihan Roller',
    completedAt: '14 Feb 2026',
    odometer: 12100,
    notes: 'Kondisi v-belt masih tebal, roller dibersihkan.',
  },
  {
    id: 102,
    name: 'Ganti Kampas Rem Depan',
    completedAt: '28 Jan 2026',
    odometer: 11400,
    notes: 'Kampas rem original Honda dipasang di bengkel resmi.',
  },
];

export function InteractiveAppSimulator() {
  const [activeTab, setActiveTab] = useState<'home' | 'vehicles' | 'stats' | 'profile'>('home');
  const [vehicles] = useState<DummyVehicle[]>(INITIAL_VEHICLES);
  const [selectedVehicleId, setSelectedVehicleId] = useState<number>(1);
  const [reminders, setReminders] = useState<DummyReminder[]>(INITIAL_REMINDERS);
  const [serviceLogs, setServiceLogs] = useState<DummyServiceLog[]>(INITIAL_LOGS);
  const [serviceSubTab, setServiceSubTab] = useState<'jadwal' | 'riwayat'>('jadwal');
  const [showNotificationModal, setShowNotificationModal] = useState<boolean>(false);
  const [showAddBbmModal, setShowAddBbmModal] = useState<boolean>(false);
  const [hasUnreadNotif, setHasUnreadNotif] = useState<boolean>(true);
  const [selectedPeriod, setSelectedPeriod] = useState<string>('bulan_ini');

  // Input BBM Dummy
  const [inputOdo, setInputOdo] = useState<string>('12650');
  const [inputLiter, setInputLiter] = useState<string>('4.20');
  const [inputCost, setInputCost] = useState<string>('42000');
  const [selectedFuel, setSelectedFuel] = useState<string>('pertalite');

  const currentVehicle = vehicles.find((v) => v.id === selectedVehicleId) || vehicles[0];

  const handleMarkDone = (id: number) => {
    const target = reminders.find((r) => r.id === id);
    if (!target) return;

    // Add to completed logs
    const newLog: DummyServiceLog = {
      id: Date.now(),
      name: target.name,
      completedAt: 'Hari ini',
      odometer: currentVehicle.odometer,
      notes: 'Servis ditandai selesai via PantauOto Simulator.',
    };
    setServiceLogs([newLog, ...serviceLogs]);

    // Update reminder
    setReminders(
      reminders.map((r) =>
        r.id === id
          ? {
              ...r,
              lastOdo: currentVehicle.odometer,
              dueOdo: currentVehicle.odometer + r.intervalKm,
              status: 'normal',
            }
          : r
      )
    );
  };

  const handleSaveBbm = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Berhasil! Catatan BBM untuk ${currentVehicle.name} (${inputLiter} Liter - ${selectedFuel.toUpperCase()}) telah disimpan.`);
    setShowAddBbmModal(false);
  };

  const resetDemo = () => {
    setReminders(INITIAL_REMINDERS);
    setServiceLogs(INITIAL_LOGS);
    setHasUnreadNotif(true);
    setActiveTab('home');
    setSelectedVehicleId(1);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Simulator Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-2">
        <div className="flex items-center gap-2 text-xs font-bold text-black uppercase tracking-wider">
          <span>SIMULATOR APLIKASI • LIVE PREVIEW WEB</span>
        </div>
        <button
          onClick={resetDemo}
          className="inline-flex items-center gap-1.5 text-xs text-black border border-black px-2.5 py-1 rounded bg-white hover:bg-neutral-100 active:scale-95 transition-all font-medium"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Data Demo</span>
        </button>
      </div>

      {/* Outer Device Frame (Smartphone Mockup) */}
      <div className="relative mx-auto w-full max-w-[390px] bg-black rounded-[36px] p-3 shadow-2xl border-4 border-neutral-800">
        {/* Dynamic Island / Speaker */}
        <div className="w-full flex justify-center mb-2">
          <div className="w-24 h-4 bg-neutral-900 rounded-full flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-neutral-800 rounded-full mr-2" />
            <div className="w-2.5 h-2.5 bg-neutral-950 rounded-full" />
          </div>
        </div>

        {/* Screen Container */}
        <div className="relative w-full h-[640px] bg-[#f9f9f9] rounded-[24px] overflow-hidden flex flex-col border border-neutral-700 select-none">
          {/* ─── TopAppBar ─── */}
          <div className="h-14 bg-white border-b border-[#e2e2e2] px-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 border border-black rounded flex items-center justify-center bg-white p-1">
                <Image src="/logo.png" alt="Logo" width={18} height={18} className="object-contain" />
              </div>
              <span className="font-bold text-sm text-black tracking-tight">PantauOto</span>
            </div>

            <button
              onClick={() => {
                setShowNotificationModal(true);
                setHasUnreadNotif(false);
              }}
              className="relative w-8 h-8 border border-black rounded flex items-center justify-center bg-white hover:bg-neutral-50 active:scale-90 transition-all"
            >
              <Bell className="w-4 h-4 text-black" />
              {hasUnreadNotif && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#ba1a1a] rounded-full border border-white" />
              )}
            </button>
          </div>

          {/* ─── Scrollable Body Content ─── */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-left">
            {/* ════ TAB 1: BERANDA (HOME) ════ */}
            {activeTab === 'home' && (
              <>
                {/* Horizontal Vehicle Cards */}
                <div>
                  <div className="text-[10px] font-bold text-[#5e5e5e] uppercase tracking-wider mb-2">
                    KENDARAAN ANDA (TAP UNTUK PILIH)
                  </div>
                  <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-none">
                    {vehicles.map((v) => {
                      const isSelected = v.id === selectedVehicleId;
                      return (
                        <div
                          key={v.id}
                          onClick={() => setSelectedVehicleId(v.id)}
                          className={`w-[230px] shrink-0 p-3 rounded border cursor-pointer transition-all ${
                            isSelected
                              ? 'border-black bg-white shadow-sm'
                              : 'border-[#e2e2e2] bg-[#ffffff] opacity-60 hover:opacity-100'
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-bold text-xs text-black">{v.name}</div>
                              <div className="text-[10px] text-[#5e5e5e]">{v.brand} • {v.year}</div>
                            </div>
                            <span
                              className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                                isSelected ? 'bg-black text-white' : 'bg-neutral-200 text-black'
                              }`}
                            >
                              {isSelected ? 'DIPILIH' : 'AKTIF'}
                            </span>
                          </div>
                          <div className="mt-3 pt-2 border-t border-[#e2e2e2] flex justify-between items-baseline">
                            <span className="text-[9px] uppercase tracking-wider text-[#5e5e5e]">ODOMETER</span>
                            <span className="font-mono font-bold text-xs text-black">
                              {v.odometer.toLocaleString('id-ID')}{' '}
                              <span className="text-[9px] font-normal text-[#5e5e5e]">km</span>
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Compact Quick Actions */}
                <div>
                  <div className="text-[10px] font-bold text-[#5e5e5e] uppercase tracking-wider mb-2">
                    AKSI CEPAT
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    <button
                      onClick={() => setActiveTab('vehicles')}
                      className="border border-black rounded py-1.5 px-1 flex flex-col items-center justify-center gap-1 bg-white hover:bg-neutral-50 active:scale-95 transition-all text-center"
                    >
                      <Plus className="w-3.5 h-3.5 text-black" />
                      <span className="text-[10px] font-medium text-black leading-tight">Kendaraan</span>
                    </button>
                    <button
                      onClick={() => setShowAddBbmModal(true)}
                      className="border border-black rounded py-1.5 px-1 flex flex-col items-center justify-center gap-1 bg-white hover:bg-neutral-50 active:scale-95 transition-all text-center"
                    >
                      <Droplet className="w-3.5 h-3.5 text-black" />
                      <span className="text-[10px] font-medium text-black leading-tight">Catat BBM</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('vehicles')}
                      className="border border-black rounded py-1.5 px-1 flex flex-col items-center justify-center gap-1 bg-white hover:bg-neutral-50 active:scale-95 transition-all text-center"
                    >
                      <Clock className="w-3.5 h-3.5 text-black" />
                      <span className="text-[10px] font-medium text-black leading-tight">Pengingat</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('vehicles')}
                      className="border border-black rounded py-1.5 px-1 flex flex-col items-center justify-center gap-1 bg-white hover:bg-neutral-50 active:scale-95 transition-all text-center"
                    >
                      <Wrench className="w-3.5 h-3.5 text-black" />
                      <span className="text-[10px] font-medium text-black leading-tight">Servis</span>
                    </button>
                  </div>
                </div>

                {/* Perlu Perhatian (Attention Section) */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#5e5e5e] uppercase tracking-wider">
                      PERLU PERHATIAN ({currentVehicle.name})
                    </span>
                    <button
                      onClick={() => setActiveTab('vehicles')}
                      className="text-[10px] text-black underline font-medium"
                    >
                      Lihat Semua
                    </button>
                  </div>

                  <div className="border border-black rounded bg-white overflow-hidden divide-y divide-[#e2e2e2]">
                    {reminders.slice(0, 2).map((r) => {
                      const remainingKm = r.dueOdo - currentVehicle.odometer;
                      return (
                        <div key={r.id} className="p-3 flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`w-7 h-7 rounded border flex items-center justify-center ${
                                r.status === 'overdue'
                                  ? 'border-[#ba1a1a] bg-red-50 text-[#ba1a1a]'
                                  : r.status === 'due_soon'
                                  ? 'border-black bg-neutral-100 text-black'
                                  : 'border-[#e2e2e2] bg-white text-[#5e5e5e]'
                              }`}
                            >
                              <Wrench className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="font-bold text-xs text-black leading-tight">{r.name}</div>
                              <div className="text-[10px] text-[#5e5e5e] mt-0.5">
                                {remainingKm > 0
                                  ? `${remainingKm.toLocaleString('id-ID')} km lagi`
                                  : `Lewat ${Math.abs(remainingKm).toLocaleString('id-ID')} km`}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <span
                              className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                                r.status === 'overdue'
                                  ? 'bg-[#ffdad6] text-[#93000a]'
                                  : r.status === 'due_soon'
                                  ? 'bg-neutral-200 text-black'
                                  : 'border border-neutral-300 bg-white text-black'
                              }`}
                            >
                              {r.status === 'overdue' ? 'TERLEWAT' : r.status === 'due_soon' ? 'SEGERA' : 'AMAN'}
                            </span>
                            <button
                              onClick={() => handleMarkDone(r.id)}
                              className="text-[9px] font-bold bg-black text-white px-2 py-1 rounded hover:bg-neutral-800 active:scale-95"
                            >
                              Selesai
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Ringkasan Bulan Ini */}
                <div className="space-y-2">
                  <div className="text-[10px] font-bold text-[#5e5e5e] uppercase tracking-wider">
                    RINGKASAN BULAN INI
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="border border-black rounded p-2.5 bg-white text-center">
                      <div className="text-[9px] text-[#5e5e5e] uppercase">TOTAL BBM</div>
                      <div className="font-bold text-xs text-black mt-1">18.5 L</div>
                    </div>
                    <div className="border border-black rounded p-2.5 bg-white text-center">
                      <div className="text-[9px] text-[#5e5e5e] uppercase">TOTAL BIAYA</div>
                      <div className="font-bold text-xs text-black mt-1">Rp 185k</div>
                    </div>
                    <div className="border border-black rounded p-2.5 bg-white text-center">
                      <div className="text-[9px] text-[#5e5e5e] uppercase">RATA-RATA</div>
                      <div className="font-bold text-xs text-black mt-1">47.8 km/L</div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* ════ TAB 2: KENDARAAN & SERVIS (VEHICLES) ════ */}
            {activeTab === 'vehicles' && (
              <div className="space-y-4">
                <div className="border border-black rounded p-3 bg-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-bold text-sm text-black">{currentVehicle.name}</div>
                      <div className="text-[11px] text-[#5e5e5e]">{currentVehicle.model} • {currentVehicle.year}</div>
                    </div>
                    <span className="text-[9px] font-bold bg-black text-white px-2 py-0.5 rounded">
                      ODO: {currentVehicle.odometer.toLocaleString('id-ID')} km
                    </span>
                  </div>
                </div>

                {/* Sub-Tabs: Jadwal Pengingat vs Riwayat Selesai */}
                <div className="flex border border-black rounded p-0.5 bg-white">
                  <button
                    onClick={() => setServiceSubTab('jadwal')}
                    className={`flex-1 py-1.5 text-xs font-bold rounded transition-all ${
                      serviceSubTab === 'jadwal' ? 'bg-black text-white' : 'text-black hover:bg-neutral-100'
                    }`}
                  >
                    JADWAL PENGINGAT ({reminders.length})
                  </button>
                  <button
                    onClick={() => setServiceSubTab('riwayat')}
                    className={`flex-1 py-1.5 text-xs font-bold rounded transition-all ${
                      serviceSubTab === 'riwayat' ? 'bg-black text-white' : 'text-black hover:bg-neutral-100'
                    }`}
                  >
                    RIWAYAT SELESAI ({serviceLogs.length})
                  </button>
                </div>

                {serviceSubTab === 'jadwal' ? (
                  <div className="space-y-2">
                    {reminders.map((r) => (
                      <div key={r.id} className="border border-[#e2e2e2] rounded p-3 bg-white space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-bold text-xs text-black">{r.name}</div>
                            <div className="text-[10px] text-[#5e5e5e]">Interval per {r.intervalKm.toLocaleString('id-ID')} km</div>
                          </div>
                          <span
                            className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                              r.status === 'overdue'
                                ? 'bg-red-100 text-red-800'
                                : r.status === 'due_soon'
                                ? 'bg-neutral-200 text-black'
                                : 'border border-neutral-300 bg-white text-black'
                            }`}
                          >
                            {r.status === 'overdue' ? 'TERLEWAT' : r.status === 'due_soon' ? 'SEGERA' : 'AMAN'}
                          </span>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-[#e2e2e2]">
                          <span className="text-[10px] text-[#5e5e5e]">Jadwal pada: {r.dueOdo.toLocaleString('id-ID')} km</span>
                          <button
                            onClick={() => handleMarkDone(r.id)}
                            className="text-xs font-bold bg-black text-white px-2.5 py-1 rounded hover:bg-neutral-800 active:scale-95"
                          >
                            ✓ Tandai Selesai
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2">
                    {serviceLogs.map((log) => (
                      <div key={log.id} className="border border-[#e2e2e2] rounded p-3 bg-white">
                        <div className="flex justify-between items-start">
                          <div className="font-bold text-xs text-black">{log.name}</div>
                          <span className="text-[9px] font-bold text-black border border-black bg-white px-1.5 py-0.5 rounded">
                            SELESAI
                          </span>
                        </div>
                        <div className="text-[10px] text-[#5e5e5e] mt-1">{log.notes}</div>
                        <div className="mt-2 pt-2 border-t border-[#e2e2e2] flex justify-between text-[10px] text-[#5e5e5e] font-mono">
                          <span>{log.completedAt}</span>
                          <span>Odo: {log.odometer.toLocaleString('id-ID')} km</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ════ TAB 3: STATISTIK & GRAFIK (STATS) ════ */}
            {activeTab === 'stats' && (
              <div className="space-y-4">
                {/* Period Selector */}
                <div className="flex border border-[#e2e2e2] rounded p-0.5 bg-white text-center text-[10px] font-bold">
                  {['bulan_ini', '3_bulan', '6_bulan', 'tahun'].map((p) => (
                    <button
                      key={p}
                      onClick={() => setSelectedPeriod(p)}
                      className={`flex-1 py-1 rounded uppercase ${
                        selectedPeriod === p ? 'bg-black text-white' : 'text-[#5e5e5e]'
                      }`}
                    >
                      {p.replace('_', ' ')}
                    </button>
                  ))}
                </div>

                {/* 3 Summary Cards */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="border border-black rounded p-2.5 bg-white">
                    <div className="text-[8px] text-[#5e5e5e] uppercase">RATA-RATA</div>
                    <div className="font-bold text-xs text-black mt-0.5">48.2 km/L</div>
                  </div>
                  <div className="border border-black rounded p-2.5 bg-white">
                    <div className="text-[8px] text-[#5e5e5e] uppercase">TOTAL BIAYA</div>
                    <div className="font-bold text-xs text-black mt-0.5">Rp 165.000</div>
                  </div>
                  <div className="border border-black rounded p-2.5 bg-white">
                    <div className="text-[8px] text-[#5e5e5e] uppercase">TOTAL JARAK</div>
                    <div className="font-bold text-xs text-black mt-0.5">720 km</div>
                  </div>
                </div>

                {/* Simulated Chart Box */}
                <div className="border border-black rounded p-3 bg-white space-y-2">
                  <div className="text-[10px] font-bold text-[#5e5e5e] uppercase tracking-wider">
                    TREN EFISIENSI BBM BULANAN
                  </div>
                  <div className="h-28 flex items-end justify-between gap-2 pt-4 px-2 border-b border-black">
                    {[
                      { m: 'Okt', val: 42 },
                      { m: 'Nov', val: 45 },
                      { m: 'Des', val: 44 },
                      { m: 'Jan', val: 48 },
                      { m: 'Feb', val: 49 },
                    ].map((item) => (
                      <div key={item.m} className="flex-1 flex flex-col items-center gap-1">
                        <span className="text-[9px] font-mono font-bold text-black">{item.val}</span>
                        <div
                          className="w-full bg-black rounded-t"
                          style={{ height: `${item.val * 1.5}px` }}
                        />
                        <span className="text-[9px] text-[#5e5e5e]">{item.m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fuel Comparison Breakdown */}
                <div className="border border-[#e2e2e2] rounded p-3 bg-white space-y-2">
                  <div className="text-[10px] font-bold text-[#5e5e5e] uppercase tracking-wider">
                    PERBANDINGAN JENIS BAHAN BAKAR
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div>
                      <div className="flex justify-between text-[10px] mb-0.5">
                        <span className="font-bold">Pertalite (65%)</span>
                        <span className="font-mono">12.0 Liter</span>
                      </div>
                      <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                        <div className="h-full bg-black w-[65%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] mb-0.5">
                        <span className="font-bold">Pertamax (35%)</span>
                        <span className="font-mono">6.5 Liter</span>
                      </div>
                      <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                        <div className="h-full bg-neutral-400 w-[35%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ════ TAB 4: PROFIL (PROFILE) ════ */}
            {activeTab === 'profile' && (
              <div className="space-y-4">
                {/* Profile Hero Header */}
                <div className="flex flex-col items-center text-center pt-2 gap-2">
                  <div className="w-16 h-16 rounded border border-black flex items-center justify-center bg-white">
                    <User className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-black">Abdul Rahem Faqih</div>
                    <div className="text-[11px] text-[#5e5e5e]">abdulrahemfaqih@example.com</div>
                  </div>
                </div>

                {/* Settings 1px Border Block */}
                <div className="border border-black rounded bg-white overflow-hidden divide-y divide-[#e2e2e2]">
                  <button
                    onClick={() => setShowNotificationModal(true)}
                    className="w-full p-3 flex items-center justify-between text-xs hover:bg-neutral-50"
                  >
                    <div className="flex items-center gap-2.5">
                      <Bell className="w-4 h-4 text-black" />
                      <span className="font-medium text-black">Notifikasi</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#5e5e5e]" />
                  </button>

                  <div className="w-full p-3 flex items-center justify-between text-xs hover:bg-neutral-50">
                    <div className="flex items-center gap-2.5">
                      <Info className="w-4 h-4 text-black" />
                      <span className="font-medium text-black">Tentang Aplikasi</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#5e5e5e]" />
                  </div>

                  <button
                    onClick={() => alert('Ini adalah simulasi live preview web.')}
                    className="w-full p-3 flex items-center gap-2.5 text-xs text-black hover:bg-neutral-50 font-medium"
                  >
                    <LogOut className="w-4 h-4 text-black" />
                    <span>Keluar Akun</span>
                  </button>
                </div>

                <div className="text-center pt-2">
                  <span className="text-[10px] text-[#5e5e5e]">PantauOto Versi 1.0.0 • Build Preview</span>
                </div>
              </div>
            )}
          </div>

          {/* ─── Bottom Navigation Bar (Exact Stitch 100% Solid Black Block) ─── */}
          <div className="h-14 bg-white border-t border-black grid grid-cols-4 shrink-0">
            <button
              onClick={() => setActiveTab('home')}
              className={`h-full flex items-center justify-center transition-colors ${
                activeTab === 'home' ? 'bg-black text-white' : 'bg-white text-black hover:bg-neutral-100'
              }`}
            >
              <Home className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveTab('vehicles')}
              className={`h-full flex items-center justify-center transition-colors ${
                activeTab === 'vehicles' ? 'bg-black text-white' : 'bg-white text-black hover:bg-neutral-100'
              }`}
            >
              <Car className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`h-full flex items-center justify-center transition-colors ${
                activeTab === 'stats' ? 'bg-black text-white' : 'bg-white text-black hover:bg-neutral-100'
              }`}
            >
              <BarChart2 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`h-full flex items-center justify-center transition-colors ${
                activeTab === 'profile' ? 'bg-black text-white' : 'bg-white text-black hover:bg-neutral-100'
              }`}
            >
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* ─── MODAL 1: NOTIFIKASI MODAL OVERLAY ─── */}
          {showNotificationModal && (
            <div className="absolute inset-0 z-50 bg-white flex flex-col p-4 animate-in fade-in">
              <div className="flex items-center justify-between border-b border-[#e2e2e2] pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowNotificationModal(false)}
                    className="p-1 rounded hover:bg-neutral-100"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <span className="font-bold text-sm text-black">Notifikasi</span>
                </div>
                <button
                  onClick={() => setShowNotificationModal(false)}
                  className="text-xs font-bold text-black border border-black px-2 py-0.5 rounded"
                >
                  Tutup
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-2">
                <div className="border border-[#e2e2e2] rounded p-3 bg-white relative">
                  <div className="font-bold text-xs text-black">Jadwal Servis Honda Vario 160</div>
                  <div className="text-[10px] text-[#5e5e5e] mt-0.5">
                    Oli mesin sudah mendekati 12.500 km. Lakukan servis berkala untuk menjaga keawetan mesin.
                  </div>
                  <div className="text-[9px] font-mono text-[#5e5e5e] mt-1 uppercase">2 JAM YANG LALU</div>
                </div>

                <div className="border border-[#e2e2e2] rounded p-3 bg-white relative">
                  <div className="font-bold text-xs text-black">PantauOto Siap Digunakan</div>
                  <div className="text-[10px] text-[#5e5e5e] mt-0.5">
                    Pelacakan efisiensi BBM dan kalkulasi kilometer otomatis telah aktif untuk kendaraan Anda.
                  </div>
                  <div className="text-[9px] font-mono text-[#5e5e5e] mt-1 uppercase">SISTEM</div>
                </div>
              </div>
            </div>
          )}

          {/* ─── MODAL 2: CATAT BBM FORM OVERLAY ─── */}
          {showAddBbmModal && (
            <div className="absolute inset-0 z-50 bg-white flex flex-col p-4 animate-in fade-in">
              <div className="flex items-center justify-between border-b border-[#e2e2e2] pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowAddBbmModal(false)}
                    className="p-1 rounded hover:bg-neutral-100"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <span className="font-bold text-sm text-black">Catat Pengisian BBM</span>
                </div>
                <button
                  onClick={() => setShowAddBbmModal(false)}
                  className="text-xs font-bold text-black border border-black px-2 py-0.5 rounded"
                >
                  Batal
                </button>
              </div>

              <form onSubmit={handleSaveBbm} className="flex-1 overflow-y-auto space-y-3">
                <div>
                  <label className="text-[10px] font-bold uppercase text-[#5e5e5e] block mb-1">
                    ODOMETER SAAT INI (KM) *
                  </label>
                  <input
                    type="number"
                    value={inputOdo}
                    onChange={(e) => setInputOdo(e.target.value)}
                    className="w-full border border-black rounded p-2 text-xs font-mono font-bold bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase text-[#5e5e5e] block mb-1">
                    JUMLAH LITER (L) *
                  </label>
                  <input
                    type="text"
                    value={inputLiter}
                    onChange={(e) => setInputLiter(e.target.value)}
                    className="w-full border border-black rounded p-2 text-xs font-mono font-bold bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase text-[#5e5e5e] block mb-1">
                    TOTAL BIAYA (RP) *
                  </label>
                  <input
                    type="number"
                    value={inputCost}
                    onChange={(e) => setInputCost(e.target.value)}
                    className="w-full border border-black rounded p-2 text-xs font-mono font-bold bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase text-[#5e5e5e] block mb-1">
                    JENIS BAHAN BAKAR *
                  </label>
                  <div className="grid grid-cols-3 gap-1 text-[10px] font-bold">
                    {['pertalite', 'pertamax', 'solar'].map((f) => (
                      <button
                        type="button"
                        key={f}
                        onClick={() => setSelectedFuel(f)}
                        className={`p-2 rounded border uppercase ${
                          selectedFuel === f ? 'bg-black text-white border-black' : 'border-[#e2e2e2] bg-white'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 bg-black text-white font-bold text-xs py-2.5 rounded hover:bg-neutral-800 active:scale-95 transition-all"
                >
                  Simpan Catatan BBM
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
