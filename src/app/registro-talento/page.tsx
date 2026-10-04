"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Registro() {
  const [f, setF] = useState({ nombre:"", telefono:"", ciudad:"", profesion:"", experiencia:"" });
  const [msg, setMsg] = useState("");

  const guardar = async () => {
    const { error } = await supabase.from("Talentos").insert([{
      nombre: f.nombre,
      telefono: f.telefono,
      ciudad: f.ciudad,
      profesion: f.profesion,
      experiencia: parseInt(f.experiencia) || 0
    }]);
    if(error) setMsg("Error: "+error.message);
    else setMsg("¡Perfil guardado!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-2xl shadow w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center">Regístrate como Talento</h1>
        <input placeholder="Nombre" className="w-full border p-3 rounded-xl" onChange={e=>setF({...f,nombre:e.target.value})} />
        <input placeholder="Teléfono / WhatsApp" className="w-full border p-3 rounded-xl" onChange={e=>setF({...f,telefono:e.target.value})} />
        <input placeholder="Ciudad - Ej: San Cristóbal" className="w-full border p-3 rounded-xl" onChange={e=>setF({...f,ciudad:e.target.value})} />
        <input placeholder="Profesión - Ej: Técnico electrónico" className="w-full border p-3 rounded-xl" onChange={e=>setF({...f,profesion:e.target.value})} />
        <input placeholder="Años de experiencia" type="number" className="w-full border p-3 rounded-xl" onChange={e=>setF({...f,experiencia:e.target.value})} />
        <button onClick={guardar} className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold">Guardar mi perfil</button>
        <p className="text-center text-sm text-gray-500">{msg}</p>
      </div>
    </div>
  );
}