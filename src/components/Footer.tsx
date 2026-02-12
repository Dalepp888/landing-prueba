import Link from "next/link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const productLinks = [
  { label: "Planes y Precios", href: "#" },
  { label: "Documentación API", href: "#" },
  { label: "Estado del Servicio", href: "#" },
  { label: "Guías de integración", href: "#" },
];

const legalLinks = [
  { label: "Términos de Servicio", href: "#" },
  { label: "Política de Privacidad", href: "#" },
  { label: "Política de Datos", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#00FF9D] flex items-center justify-center">
                <span className="text-black font-bold text-lg">S</span>
              </div>
              <span className="text-white font-bold text-xl">SMSCuba</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Infraestructura de mensajería segura para la próxima generación de negocios digitales en Cuba.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Producto</h3>
            <ul className="space-y-1">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-gray-300 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-1">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-gray-300 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-[#00FF9D] hover:bg-[#00e68d] text-black font-semibold rounded-lg transition-all mb-3"
            >
              <WhatsAppIcon sx={{ fontSize: 20 }} />
              WhatsApp
            </button>
            <p className="text-gray-500 text-sm">
              Soporte Lun-Vie 9am-6pm
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 text-center">
          <p className="text-gray-600 text-sm">
            © 2024 SMSCuba. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
