import Header from '@/components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Willkommen bei Aesthetic Medicine Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Entdecken Sie die neuesten Trends in ästhetischer Medizin, Experten-Tipps und bewertete Praxen.
            </p>
            <Link
              href="/blog"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Zum Blog
            </Link>
          </div>
        </section>

        {/* Featured Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Aktuelle Themen</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Botox-Trends 2025</h3>
                <p className="text-gray-600 mb-4">
                  Die neuesten Entwicklungen in der Botox-Behandlung für natürliche Ergebnisse.
                </p>
                <Link href="/blog/botox-2025" className="text-blue-600 hover:underline">
                  Mehr lesen
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Hyaluronsäure Füllungen</h3>
                <p className="text-gray-600 mb-4">
                  Alles über sichere und effektive Hyaluron-Behandlungen.
                </p>
                <Link href="/blog/hyaluron" className="text-blue-600 hover:underline">
                  Mehr lesen
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Praxen in München</h3>
                <p className="text-gray-600 mb-4">
                  Bewertete Praxen für ästhetische Behandlungen in Ihrer Nähe.
                </p>
                <Link href="/practices" className="text-blue-600 hover:underline">
                  Praxen finden
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Bleiben Sie informiert</h2>
            <p className="text-xl text-gray-600 mb-8">
              Abonnieren Sie unseren Newsletter für die neuesten Tipps und Angebote.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              Newsletter abonnieren
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}