import FlightIcon from '@mui/icons-material/Flight';

const countries = [
  { id: "1", name: "México" },
  { id: "2", name: "España" },
  { id: "3", name: "USA" },
  { id: "4", name: "Colombia" },
  { id: "5", name: "Brasil" },
  { id: "6", name: "Canadá" },
];

export default function InternationalExpansion() {

  return (
    <section className="w-full py-20 px-4 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
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
              <FlightIcon 
                className="text-blue-400" 
                sx={{ fontSize: 18 }} 
              />
              <span className="text-white font-medium">{country.name}</span>
            </div>
          ))}
        </div>

        <form className="max-w-xl mx-auto">
          <div 
            className="flex flex-col sm:flex-row gap-3 rounded-2xl border border-gray-800 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.15),0_0_40px_rgba(147,51,234,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.35),0_0_60px_rgba(147,51,234,0.25)]"
          >
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-6 py-4 bg-transparent text-white placeholder-gray-500 outline-none text-base rounded-xl"
              required
            />
            <button
              type="submit"
              className="px-8 py-2 m-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 whitespace-nowrap"
            >
              Notificarme
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
