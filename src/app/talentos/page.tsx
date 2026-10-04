"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function Talentos() {
  const [q, setQ] = useState("");
  const [talentos, setTalentos] = useState<any[]>([]);

  const buscar = async () => {
    let query = supabase.from("Talentos").select("*");
    if(q) query = query.ilike("profesion", `%${q}%`);
    const { data } = await query;
    if(data) setTalentos(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Encuentra talento dominicano</h1>
        <div className="flex gap-2 mb-6">
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Ej: Desarrollador, Ingeniero" className="flex-1 border p-3 rounded-xl" />
          <button onClick={buscar} className="bg-blue-500 text-white px-6 rounded-xl">Buscar</button>
        </div>
        <div className="grid gap-4">
          {talentos.map(t=>(
            <Link key={t.id} href={`/perfil/${t.id}`} className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md">
              <h3 className="font-bold text-lg">{t.nombre}</h3>
              <p className="text-blue-600">{t.profesion} • {t.experiencia} años</p>
              <p className="text-gray-500 text-sm">📍 {t.ciudad}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}