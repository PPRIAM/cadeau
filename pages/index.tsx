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
        <main className={`mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen ${quicksand.className}`}>
          {/* Héros */}
          <section className="w-full text-center">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${dancing.className}`}>
              Joyeux&nbsp;Anniversaire&nbsp;<span className="whitespace-nowrap">Hernandie&nbsp;🥳</span>
            </h1>

            <p className="mx-auto mb-8 leading-relaxed text-lg sm:text-xl max-w-xl">
              Que tes bougies dansent comme nos éclats&nbsp;de&nbsp;rires&nbsp;!<br />
              Aujourd’hui, le calendrier a décidé de faire rimer&nbsp;« Hernandie » avec&nbsp;« magie ».
            </p>

            {/* Bouton responsive */}
            <Link
              href="/gallery"
              className="inline-block bg-rose-400 hover:bg-rose-500 text-white font-semibold py-3 px-6 sm:px-8 rounded-xl shadow-lg transition-transform hover:scale-105"
            >
              Plongeons dans les souvenirs
            </Link>
          </section>

          {/* Citation biblique */}
          <blockquote className="mt-12 max-w-md text-center italic text-gray-700 border-l-4 border-rose-300 pl-4">
            « La main droite de l’Éternel est élevée ; la main droite de l’Éternel fait des prodiges.  
            Je ne mourrai pas, je vivrai, et je raconterai les œuvres de l’Éternel. »  
            <span className="not-italic font-semibold block mt-2">— Psaumes 118 : 16-17</span>
          </blockquote>
        </main>

        {/* Footer fixé en bas sur mobile, en flux normal sur grand écran */}
        <footer className="w-full text-center py-4 text-sm text-gray-500">
          © {new Date().getFullYear()} — Avec tout mon amour
        </footer>
      </div>
    </>
  );
}
