// app/not-found.js
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 text-center p-6">
      
      <div className="max-w-md">
        <h1 className="text-9xl font-bold text-blue-600 mb-6">404</h1>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Halaman Tidak Ditemukan
        </h2>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          Maaf, halaman yang Anda cari tidak dapat ditemukan atau mungkin telah dipindahkan.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="flex bg-green-300 hover:bg-green-700 text-black px-6 py-3 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <ArrowLeft /> Kembali ke Beranda
          </Link>
        </div>
      </div>
      
    </main>
  );
}