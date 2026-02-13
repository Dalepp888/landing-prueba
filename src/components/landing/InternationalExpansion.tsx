'use client'
import { Plane } from 'lucide-react';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';

const countries = [
  { id: "1", name: "México" },
  { id: "2", name: "España" },
  { id: "3", name: "USA" },
  { id: "4", name: "Colombia" },
  { id: "5", name: "Brasil" },
  { id: "6", name: "Canadá" },
];

export default function InternationalExpansion() {

  const [stars, setStars] = useState<{ left: string; top: string }[]>([])

  useEffect(() => {
    const generated = Array.from({ length: 80 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }))
    setStars(generated)
  }, [])

  return (
    <section className="w-full py-20 px-4 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-20"
            style={star}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-white">Conectando Cuba</span>
          <br />
          <span
            className="bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500 bg-clip-text text-transparent"
          >
            con el Mundo
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Muy pronto podrás enviar OTPs a +30 países desde la misma API. Sin
          configuraciones extra. Sin tarifas ocultas.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {countries.map((country) => (
            <div
              key={country.id}
              className="flex items-center gap-2 px-5 py-3 bg-[#141414] border border-gray-800 rounded-xl hover:border-gray-700 transition-all duration-300"
            >
              <Plane className="w-3 h-3 text-blue-400 transform rotate-45" />
              <span className="text-white font-medium">{country.name}</span>
            </div>
          ))}
        </div>

        <form className="max-w-md mx-auto relative group" onSubmit={(e) => e.preventDefault()}>
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-20 group-hover:opacity-40 blur transition-opacity"></div>
          <div className="relative flex bg-[#0A0A0F] rounded-lg p-1 border border-white/10">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 bg-transparent px-4 py-2 text-white focus:outline-none placeholder:text-gray-600"
            />
            <Button variant="secondary" className="bg-blue-600 hover:bg-blue-500 text-white border-none">
              Notificarme
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
