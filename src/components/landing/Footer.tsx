import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#050508] border-t border-[#1A1A24] py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#00FF9D] rounded-lg flex items-center justify-center">
                <span className="font-bold text-black text-xl">S</span>
              </div>
              <span className="text-xl font-bold text-white">SMSCuba</span>
            </div>
            <p className="text-gray-500 text-sm">
              Infraestructura de mensajería segura para la próxima generación de negocios digitales en Cuba.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Producto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-[#00FF9D] transition-colors">Planes y Precios</Link></li>
              <li><Link href="#" className="hover:text-[#00FF9D] transition-colors">Documentación API</Link></li>
              <li><Link href="#" className="hover:text-[#00FF9D] transition-colors">Estado del Servicio</Link></li>
              <li><Link href="#" className="hover:text-[#00FF9D] transition-colors">Guías de integración</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-[#00FF9D] transition-colors">Términos de Servicio</Link></li>
              <li><Link href="#" className="hover:text-[#00FF9D] transition-colors">Política de Privacidad</Link></li>
              <li><Link href="#" className="hover:text-[#00FF9D] transition-colors">Política de Datos</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contacto</h4>
            <Link 
              href="#" 
              className="inline-flex items-center gap-2 bg-[#25D366] text-black font-bold px-4 py-2 rounded-lg hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Soporte Lun-Vie 9am-6pm
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1A1A24] text-center text-sm text-gray-600">
          <p>© 2024 SMSCuba. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}