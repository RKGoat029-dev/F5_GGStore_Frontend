import { useState, useEffect } from 'react';
import preloader from "../../../assets/icon/retro2.png"

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-gradient-to-r from-[#FFEEBF] to-[#FFE5A3] transition-opacity duration-500 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <img 
            src={preloader} 
            alt="GG Store Logo" 
            className="w-24 h-24 object-contain animate-bounce"
          />
        </div>
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <h1 className="text-black text-2xl font-bold animate-pulse">
          GG STORE
        </h1>
        <p className="text-gray-600 mt-2">Cargando...</p>
      </div>
    </div>
  );
};

export default Preloader;