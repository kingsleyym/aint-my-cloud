import Header from '@/components/Header';
import Link from 'next/link';

// Sample posts data
const posts = [
  {
    id: 'botox-2025',
    title: 'Botox-Trends 2025: Natürliche Ergebnisse im Fokus',
    excerpt: 'Entdecken Sie die neuesten Entwicklungen in Botox-Behandlungen für ein natürliches Aussehen.',
    date: '2025-02-14',
    author: 'Dr. Anna Meier',
    image: '/images/botox.jpg'
  },
  {
    id: 'hyaluron',
    title: 'Hyaluronsäure Füllungen: Sicherheit und Effektivität',
    excerpt: 'Alles Wissenswerte über Hyaluron-Behandlungen und warum sie so beliebt sind.',
    date: '2025-02-10',
    author: 'Dr. Max Müller',
    image: '/images/hyaluron.jpg'
  },
  {
    id: 'anti-aging',
    title: 'Anti-Aging Routinen: Was wirklich funktioniert',
    excerpt: 'Professionelle Tipps für effektive Anti-Aging-Behandlungen.',
    date: '2025-02-05',
    author: 'Dr. Lisa Schmidt',
    image: '/images/anti-aging.jpg'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Unser Blog</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Bild: {post.image}</span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">
                  <Link href={`/blog/${post.id}`} className="hover:text-blue-600">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="text-sm text-gray-500">
                  <span>{post.author}</span> • <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}