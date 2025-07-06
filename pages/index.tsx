import Head from 'next/head';
import Link from 'next/link';
import { Dancing_Script, Quicksand } from 'next/font/google';

const dancing = Dancing_Script({ subsets: ['latin'], weight: ['400', '700'] });
const quicksand = Quicksand({ subsets: ['latin'], weight: ['400', '600', '700'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Joyeux Anniversaire Hernandie 🥳</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Une surprise pleine d'humour et de poésie" />
      </Head>

      {/* bg-gradient pour toute la page */}
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 text-gray-800">
        {/* Conteneur central fluide */}
        <main
  className={`min-h-screen flex flex-col items-center justify-center
  bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50
  text-gray-800 px-4 sm:px-6 ${quicksand.className}`}
>
  <section className="w-full max-w-screen-sm text-center">
    <h1 className={`text-4xl sm:text-5xl font-bold mb-4 break-words ${dancing.className}`}>
      Joyeux Anniversaire Hernandie 🥳
    </h1>

    <p className="mb-8 text-lg sm:text-xl leading-relaxed px-2">
      Que tes bougies dansent comme nos éclats de rires !<br />
      Aujourd’hui, le calendrier a décidé de faire rimer « Hernandie » avec « magie ».
    </p>

    <Link
      href="/gallery"
      className="inline-block bg-rose-400 hover:bg-rose-500 text-white
      font-semibold py-3 px-6 rounded-xl shadow-lg
      transition-transform hover:scale-105"
    >
      Plongeons dans les souvenirs
    </Link>
  </section>
</main>


        {/* Footer fixé en bas sur mobile, en flux normal sur grand écran */}
        <footer className="w-full text-center py-4 text-sm text-gray-500">
          © {new Date().getFullYear()} — Avec tout mon amour
        </footer>
      </div>
    </>
  );
}
