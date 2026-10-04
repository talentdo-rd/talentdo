import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">🇩🇴 TalentDo</h1>
        <div className="flex gap-4">
          <Link href="/talentos" className="hover:underline">Buscar talentos</Link>
          <Link href="/registro-talento" className="bg-white text-blue-700 px-4 py-2 rounded-full font-semibold">Soy talento</Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="text-center px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-6 leading-tight">
          El talento dominicano,<br/>a un WhatsApp de distancia
        </h2>
        <p className="text-xl text-blue-100 mb-10">
          Conectamos ingenieros, técnicos, diseñadores y profesionales con oportunidades reales. Sin intermediarios.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/talentos" className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg">
            🔍 Buscar talento
          </Link>
          <Link href="/registro-talento" className="bg-green-500 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg">
            Regístrate gratis
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white text-gray-800 rounded-t-[2.5rem] p-10 mt-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-bold text-lg mb-2">Contacto directo</h3>
            <p className="text-gray-500">Sin comisiones. Hablas directo por WhatsApp con el talento.</p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">🇩🇴</div>
            <h3 className="font-bold text-lg mb-2">100% Dominicano</h3>
            <p className="text-gray-500">Técnicos, ingenieros y creativos de todo el país.</p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="font-bold text-lg mb-2">Perfiles verificados</h3>
            <p className="text-gray-500">Experiencia y habilidades claras en cada perfil.</p>
          </div>
        </div>
      </div>
    </div>
  );
}