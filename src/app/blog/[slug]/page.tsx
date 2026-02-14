import Header from '@/components/Header';
import Link from 'next/link';

// Sample post data - in real app, fetch from CMS
const posts = {
  'botox-2025': {
    title: 'Botox-Trends 2025: Natürliche Ergebnisse im Fokus',
    content: `
      <h2 id="einfuehrung">Einführung</h2>
      <p>Im Jahr 2025 steht Botox für natürliche und subtile Ergebnisse. Die neuen Techniken konzentrieren sich auf Prävention statt Korrektur.</p>

      <h2 id="neue-methoden">Neue Methoden</h2>
      <p>Micro-Dosing und Kombinationsbehandlungen ermöglichen natürlichere Resultate.</p>

      <h2 id="sicherheit">Sicherheit</h2>
      <p>Moderne Botox-Produkte sind sicherer und langlebiger.</p>

      <p><strong>Empfohlene Praxis:</strong> <a href="/practices/dr-anna-meier" className="text-blue-600">Dr. Anna Meier, München</a></p>
    `,
    date: '2025-02-14',
    author: 'Dr. Anna Meier',
    category: 'procedures',
    toc: [
      { id: 'einfuehrung', text: 'Einführung' },
      { id: 'neue-methoden', text: 'Neue Methoden' },
      { id: 'sicherheit', text: 'Sicherheit' }
    ],
    related: ['hyaluron', 'anti-aging']
  },
  'hyaluron': {
    title: 'Hyaluronsäure Füllungen: Sicherheit und Effektivität',
    content: `
      <h2 id="was-ist-hyaluronsaeure">Was ist Hyaluronsäure?</h2>
      <p>Hyaluronsäure ist ein natürlicher Bestandteil der Haut und ideal für Füllungen.</p>

      <h2 id="vorteile">Vorteile</h2>
      <p>Sofortige Ergebnisse, minimal invasiv, reversibel.</p>

      <h2 id="risiken">Risiken und Sicherheit</h2>
      <p>Bei qualifizierten Ärzten sehr sicher.</p>

      <p><strong>Empfohlene Praxis:</strong> <a href="/practices/dr-max-mueller" className="text-blue-600">Dr. Max Müller, München</a></p>
    `,
    date: '2025-02-10',
    author: 'Dr. Max Müller',
    category: 'procedures',
    toc: [
      { id: 'was-ist-hyaluronsaeure', text: 'Was ist Hyaluronsäure?' },
      { id: 'vorteile', text: 'Vorteile' },
      { id: 'risiken', text: 'Risiken und Sicherheit' }
    ],
    related: ['botox-2025', 'anti-aging']
  },
  'anti-aging': {
    title: 'Anti-Aging Routinen: Was wirklich funktioniert',
    content: `
      <h2 id="ganzheitlicher-ansatz">Ganzheitlicher Ansatz</h2>
      <p>Anti-Aging beginnt mit der richtigen Pflege und Lebensweise.</p>

      <h2 id="behandlungen">Behandlungen</h2>
      <p>Von Cremes bis zu medizinischen Verfahren.</p>

      <h2 id="ernaahrung">Ernährung und Lifestyle</h2>
      <p>Wichtige Faktoren für langfristige Jugendlichkeit.</p>

      <p><strong>Empfohlene Praxis:</strong> <a href="/practices/dr-lisa-schmidt" className="text-blue-600">Dr. Lisa Schmidt, München</a></p>
    `,
    date: '2025-02-05',
    author: 'Dr. Lisa Schmidt',
    category: 'tips',
    toc: [
      { id: 'ganzheitlicher-ansatz', text: 'Ganzheitlicher Ansatz' },
      { id: 'behandlungen', text: 'Behandlungen' },
      { id: 'ernaahrung', text: 'Ernährung und Lifestyle' }
    ],
    related: ['botox-2025', 'hyaluron']
  }
};

interface PageProps {
  params: { slug: string };
}

export default function BlogPost({ params }: PageProps) {
  const post = posts[params.slug as keyof typeof posts];

  if (!post) {
    return <div>Post nicht gefunden</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="bg-white rounded-lg shadow-md p-8">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="text-gray-600">
              <span>{post.author}</span> • <span>{post.date}</span>
            </div>
          </header>

          {/* TOC */}
          <nav className="mb-8 bg-gray-100 p-4 rounded">
            <h3 className="font-semibold mb-2">Inhaltsverzeichnis</h3>
            <ul className="space-y-1">
              {post.toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-blue-600 hover:underline">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <footer className="mt-12 pt-8 border-t">
            <Link href="/blog" className="text-blue-600 hover:underline">
              ← Zurück zum Blog
            </Link>
          </footer>

          {/* Related Articles */}
          {post.related && post.related.length > 0 && (
            <section className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Verwandte Artikel</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {post.related.map((slug) => {
                  const relatedPost = posts[slug as keyof typeof posts];
                  return relatedPost ? (
                    <div key={slug} className="bg-gray-100 p-4 rounded">
                      <h4 className="font-medium">
                        <Link href={`/blog/${slug}`} className="text-blue-600 hover:underline">
                          {relatedPost.title}
                        </Link>
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">{relatedPost.date}</p>
                    </div>
                  ) : null;
                })}
              </div>
            </section>
          )}
        </article>

        {/* Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": post.title,
              "author": {
                "@type": "Person",
                "name": post.author
              },
              "datePublished": post.date,
              "dateModified": post.date,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://aint-my-cloud.vercel.app/blog/${params.slug}`
              }
            })
          }}
        />
      </main>
    </div>
  );
}