import React from 'react';

export const Foter = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-4">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-bold mb-4">Enlaces Útiles</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Inicio</a></li>
              <li><a href="#" className="hover:text-gray-300">Acerca de Nosotros</a></li>
              <li><a href="#" className="hover:text-gray-300">Servicios</a></li>
              <li><a href="#" className="hover:text-gray-300">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Contacto</h2>
            <ul className="space-y-2">
              <li>Dirección: Calle 123, Ciudad, País</li>
              <li>Teléfono: +1234567890</li>
              <li>Email: ejemplo@example.com</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Síguenos</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-300">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

