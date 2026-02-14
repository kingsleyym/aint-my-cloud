import Header from '@/components/Header';
import Link from 'next/link';
import { DiscussionEmbed } from 'disqus-react';

// Sample post data - in real app, fetch from CMS
const posts = {
  'botox-2025': {
    title: 'Botox-Trends 2025: Natürliche Ergebnisse im Fokus',
    content: `
      <h2>Einführung</h2>
      <p>Im Jahr 2025 steht Botox für natürliche und subtile Ergebnisse. Die neuen Techniken konzentrieren sich auf Prävention statt Korrektur.</p>

      <h2>Neue Methoden</h2>
      <p>Micro-Dosing und Kombinationsbehandlungen ermöglichen natürlichere Resultate.</p>

      <h2>Sicherheit</h2>
      <p>Moderne Botox-Produkte sind sicherer und langlebiger.</p>

      <p><strong>Empfohlene Praxis:</strong> <a href="/practices/dr-anna-meier" className="text-blue-600">Dr. Anna Meier, München</a></p>
    `,
    date: '2025-02-14',
    author: 'Dr. Anna Meier'
  },
  'hyaluron': {
    title: 'Hyaluronsäure Füllungen: Sicherheit und Effektivität',
    content: `
      <h2>Was ist Hyaluronsäure?</h2>
      <p>Hyaluronsäure ist ein natürlicher Bestandteil der Haut und ideal für Füllungen.</p>

      <h2>Vorteile</h2>
      <p>Sofortige Ergebnisse, minimal invasiv, reversibel.</p>

      <h2>Risiken und Sicherheit</h2>
      <p>Bei qualifizierten Ärzten sehr sicher.</p>

      <p><strong>Empfohlene Praxis:</strong> <a href="/practices/dr-max-mueller" className="text-blue-600">Dr. Max Müller, München</a></p>
    `,
    date: '2025-02-10',
    author: 'Dr. Max Müller'
  },
  'anti-aging': {
    title: 'Anti-Aging Routinen: Was wirklich funktioniert',
    content: `
      <h2>Ganzheitlicher Ansatz</h2>
      <p>Anti-Aging beginnt mit der richtigen Pflege und Lebensweise.</p>

      <h2>Behandlungen</h2>
      <p>Von Cremes bis zu medizinischen Verfahren.</p>

      <h2>Ernährung und Lifestyle</h2>
      <p>Wichtige Faktoren für langfristige Jugendlichkeit.</p>

      <p><strong>Empfohlene Praxis:</strong> <a href="/practices/dr-lisa-schmidt" className="text-blue-600">Dr. Lisa Schmidt, München</a></p>
    `,
    date: '2025-02-05',
    author: 'Dr. Lisa Schmidt'
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

  const disqusConfig = {
    url: `https://aint-my-cloud.vercel.app/blog/${params.slug}`,
    identifier: params.slug,
    title: post.title,
  };

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

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <footer className="mt-12 pt-8 border-t">
            <Link href="/blog" className="text-blue-600 hover:underline">
              ← Zurück zum Blog
            </Link>
          </footer>
        </article>

        {/* Comments Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">Kommentare</h2>
          <DiscussionEmbed shortname="aint-my-cloud" config={disqusConfig} />
        </div>
      </main>
    </div>
  );
}