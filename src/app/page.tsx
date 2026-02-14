import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CTA from '@/components/CTA';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero
        title="Willkommen bei Aesthetic Medicine Blog"
        subtitle="Entdecken Sie die neuesten Trends in ästhetischer Medizin, Experten-Tipps und bewertete Praxen."
        ctaText="Zum Blog"
        ctaHref="/blog"
      />

      {/* Featured Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Aktuelle Themen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Botox-Trends 2025</h3>
              <p className="text-gray-600 mb-4">
                Die neuesten Entwicklungen in Botox-Behandlungen für natürliche Ergebnisse.
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

      <CTA
        title="Bleiben Sie informiert"
        subtitle="Abonnieren Sie unseren Newsletter für die neuesten Tipps und Angebote."
        buttonText="Newsletter abonnieren"
        buttonHref="#"
      />
    </div>
  );
}