'use client'; // nécessaire car on utilise le clic / Date dans d’autres comp.
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-4 flex items-center justify-between">
      {/* Logo / Titre */}
      <Link
        href="/"
        className="text-2xl font-extrabold tracking-tight text-rose-500 hover:text-rose-600"
      >
        💖 Souvenirs
      </Link>

      {/* Navigation */}
      <nav className="space-x-4 font-medium text-gray-700">
        <Link href="/" className="hover:text-rose-600">
          Accueil
        </Link>
        <Link href="/gallery" className="hover:text-rose-600">
          Galerie
        </Link>
      </nav>
    </header>
  );
}
