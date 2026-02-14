import Header from '@/components/Header';
import Link from 'next/link';

// Import posts from parent or define here
const posts = {
  'botox-2025': {
    title: 'Botox-Trends 2025: Natürliche Ergebnisse im Fokus',
    excerpt: 'Entdecken Sie die neuesten Entwicklungen in Botox-Behandlungen für ein natürliches Aussehen.',
    date: '2025-02-14',
    author: 'Dr. Anna Meier',
    category: 'procedures'
  },
  'hyaluron': {
    title: 'Hyaluronsäure Füllungen: Sicherheit und Effektivität',
    excerpt: 'Alles Wissenswerte über Hyaluron-Behandlungen und warum sie so beliebt sind.',
    date: '2025-02-10',
    author: 'Dr. Max Müller',
    category: 'procedures'
  },
  'anti-aging': {
    title: 'Anti-Aging Routinen: Was wirklich funktioniert',
    excerpt: 'Professionelle Tipps für effektive Anti-Aging-Behandlungen.',
    date: '2025-02-05',
    author: 'Dr. Lisa Schmidt',
    category: 'tips'
  }
};

interface PageProps {
  params: { category: string };
}

export default function Category({ params }: PageProps) {
  const categoryPosts = Object.entries(posts).filter(([_, post]) => post.category === params.category);

  const categoryNames = {
    procedures: 'Behandlungen',
    trends: 'Trends',
    tips: 'Tipps'
  };

  const categoryName = categoryNames[params.category as keyof typeof categoryNames] || params.category;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Kategorie: {categoryName}</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryPosts.map(([slug, post]) => (
            <article key={slug} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Bild: {post.title}</span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">
                  <Link href={`/blog/${slug}`} className="hover:text-blue-600">
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
        {categoryPosts.length === 0 && (
          <p className="text-center text-gray-600">Keine Artikel in dieser Kategorie.</p>
        )}
      </main>
    </div>
  );
}