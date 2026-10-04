const mocktalentos = [
  {id:1, nombre:"Juan Pérez", profesion:"Soldador MIG", experiencia:5, ciudad:"Santo Domingo", habilidades:"MIG, TIG, Planos"},
  {id:2, nombre:"María Santos", profesion:"Electricista Industrial", experiencia:3, ciudad:"Santiago", habilidades:"PLC, Tableros"},
]

export default function talentos() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Buscar Talentos</h2>
      <div className="flex gap-2 mb-6">
        <input placeholder="Profesión" className="border p-2 rounded" />
        <input placeholder="Provincia" className="border p-2 rounded" />
        <button className="bg-blue-600 text-white px-4 rounded">Filtrar</button>
      </div>
      <div className="grid gap-4">
        {mocktalentos.map(t=>(
          <a key={t.id} href={`/perfil/${t.id}`} className="border p-4 rounded">
            <h3 className="font-bold">{t.nombre} - {t.profesion}</h3>
            <p className="text-sm text-gray-600">{t.experiencia} años • {t.ciudad}</p>
            <p className="text-sm">{t.habilidades}</p>
          </a>
        ))}
      </div>
    </main>
  )
}