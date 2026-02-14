import Header from '@/components/Header';
import Link from 'next/link';

// Sample practices data
const practices = [
  {
    id: 'dr-anna-meier',
    name: 'Dr. Anna Meier Ästhetik',
    location: 'München',
    specialties: ['Botox', 'Füllungen', 'Hautpflege'],
    rating: 4.8,
    reviews: 156,
    website: 'https://example.com/dr-anna-meier'
  },
  {
    id: 'dr-max-mueller',
    name: 'Müller Schönheitsklinik',
    location: 'München',
    specialties: ['Hyaluron', 'Laserbehandlungen', 'Anti-Aging'],
    rating: 4.9,
    reviews: 203,
    website: 'https://example.com/dr-max-mueller'
  },
  {
    id: 'dr-lisa-schmidt',
    name: 'Schmidt Medical Aesthetics',
    location: 'München',
    specialties: ['Facial Rejuvenation', 'Body Contouring', 'Beratung'],
    rating: 4.7,
    reviews: 89,
    website: 'https://example.com/dr-lisa-schmidt'
  }
];

export default function Practices() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Empfohlene Praxen</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice) => (
            <div key={practice.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">{practice.name}</h2>
              <p className="text-gray-600 mb-2">{practice.location}</p>
              <div className="mb-4">
                <h3 className="font-medium mb-1">Spezialitäten:</h3>
                <div className="flex flex-wrap gap-2">
                  {practice.specialties.map((spec) => (
                    <span key={spec} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center mb-4">
                <span className="text-yellow-500 mr-1">★</span>
                <span className="font-medium">{practice.rating}</span>
                <span className="text-gray-500 ml-1">({practice.reviews} Bewertungen)</span>
              </div>
              <a
                href={practice.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition block text-center"
              >
                Website besuchen
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}