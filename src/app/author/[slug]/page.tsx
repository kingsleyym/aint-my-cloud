import Header from '@/components/Header';
import Link from 'next/link';

// Sample author data
const authors = {
  'dr-anna-meier': {
    name: 'Dr. Anna Meier',
    bio: 'Dr. Anna Meier ist Fachärztin für Dermatologie mit Schwerpunkt auf ästhetische Behandlungen. Sie praktiziert seit 10 Jahren in München.',
    specialties: ['Botox', 'Dermal Fillers', 'Lasertherapien'],
    credentials: 'MD, Facharzt für Dermatologie, Mitglied der Deutschen Dermatologischen Gesellschaft',
    image: '/images/dr-anna.jpg',
    articles: [
      { title: 'Botox-Trends 2025', slug: 'botox-2025' }
    ]
  },
  'dr-max-mueller': {
    name: 'Dr. Max Müller',
    bio: 'Dr. Max Müller ist Plastischer Chirurg spezialisiert auf nicht-invasive Verjüngungsbehandlungen.',
    specialties: ['Hyaluronsäure', 'Anti-Aging', 'Körperformung'],
    credentials: 'MD, Facharzt für Plastische Chirurgie, Zertifiziert von der DGÄPC',
    image: '/images/dr-max.jpg',
    articles: [
      { title: 'Hyaluronsäure Füllungen', slug: 'hyaluron' }
    ]
  },
  'dr-lisa-schmidt': {
    name: 'Dr. Lisa Schmidt',
    bio: 'Dr. Lisa Schmidt ist Hautärztin mit Fokus auf ganzheitliche Schönheitslösungen.',
    specialties: ['Hautpflege', 'Anti-Aging Routinen', 'Beratung'],
    credentials: 'MD, Facharzt für Dermatologie, Autorin von Schönheits-Guides',
    image: '/images/dr-lisa.jpg',
    articles: [
      { title: 'Anti-Aging Routinen', slug: 'anti-aging' }
    ]
  }
};

interface PageProps {
  params: { slug: string };
}

export default function Author({ params }: PageProps) {
  const author = authors[params.slug as keyof typeof authors];

  if (!author) {
    return <div>Autor nicht gefunden</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-start space-x-6 mb-8">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500">Foto</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">{author.name}</h1>
              <p className="text-gray-600 mb-4">{author.credentials}</p>
              <p className="text-gray-700">{author.bio}</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Spezialitäten</h2>
            <div className="flex flex-wrap gap-2">
              {author.specialties.map((spec) => (
                <span key={spec} className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
                  {spec}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Artikel von {author.name}</h2>
            <ul className="space-y-2">
              {author.articles.map((article) => (
                <li key={article.slug}>
                  <Link href={`/blog/${article.slug}`} className="text-blue-600 hover:underline">
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}