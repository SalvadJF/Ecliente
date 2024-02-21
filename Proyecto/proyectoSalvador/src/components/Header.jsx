import React from 'react';

const Header = () => {
  return (
<header className="fixed w-full h-16 bg-black bg-opacity-70">
      <nav className="max-w-4xl mx-auto">
        <a href="index.html" className="font-geostar text-5xl font-bold text-red-600 no-underline inline-block pt-4">TTT</a>
        <ul className="float-right flex items-center">
          <li><a href="index.html" className="text-white no-underline px-4 py-3 bg-red-700 rounded-l-xl">Inicio</a></li>
          <li><a href="articulo.html" className="text-white no-underline px-4 py-3 bg-red-700">Artículo</a></li>
          <li><a href="contacto.html" className="text-white no-underline px-4 py-3 bg-red-700 rounded-r-xl">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
