import Head from 'next/head';
import Link from 'next/link';
import GalleryGrid from '@/components/GalleryGrid';

const images = Array.from({ length: 95 }, (_, i) => {
  const num = String(i + 1).padStart(2, '0');
  return { src: `/images/${num}.jpg`, alt: `Souvenir ${num}` };
});

export default function GalleryPage() {
  return (
    <>
      <Head>
        <title>Galerie de souvenirs 🎞️</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Un voyage en images" />
      </Head>

      <div className="min-h-screen bg-rose-50 text-gray-800">
        <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8">
          {/* Lien retour */}
          <Link href="/" className="inline-block mb-6 text-rose-600 hover:underline">
            ← Retour à l’accueil
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">Notre histoire en images</h1>

          {/* Grille responsive */}
          <GalleryGrid images={images} />

          <p className="mt-12 text-center text-gray-600">Merci d’avoir scanné le QR code ! 💕</p>
        </main>
      </div>
    </>
  );
}
