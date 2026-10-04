"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useParams } from "next/navigation";

export default function Perfil() {
  const { id } = useParams();
  const [t, setT] = useState<any>(null);

  useEffect(()=>{
    supabase.from("Talentos").select("*").eq("id", id).single().then(({data})=>setT(data));
  },[id]);

  if(!t) return <p className="p-6">Cargando...</p>;

  const ws = `https://wa.me/1${t.telefono?.replace(/\D/g,'')}`;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-md mx-auto bg-white rounded-3xl p-8 shadow">
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-3xl font-bold text-blue-600 mx-auto mb-4">
          {t.nombre?.charAt(0)}
        </div>
        <h1 className="text-2xl font-bold text-center">{t.nombre}</h1>
        <p className="text-center text-blue-600 mb-6">{t.profesion} • {t.experiencia} años</p>
        <p className="text-center text-gray-500 mb-6">📍 {t.ciudad}</p>
        {t.habilidades && <p className="bg-gray-50 p-4 rounded-xl mb-6"><strong>Habilidades:</strong> {t.habilidades}</p>}
        <a href={ws} target="_blank" className="block text-center bg-green-500 text-white py-4 rounded-2xl font-bold">
          Contactar por WhatsApp
        </a>
      </div>
    </div>
  );
}