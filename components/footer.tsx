'use client';
export default function Footer() {
  return (
    <footer className="w-full py-6 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} — Avec tout mon amour
    </footer>
  );
}
