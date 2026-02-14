import Link from 'next/link';

export default function Resources() {
  const resources = [
    {
      title: 'Leitfäden',
      description: 'Umfassende Anleitungen zu Behandlungen.',
      link: '/guides',
      icon: '📖'
    },
    {
      title: 'Foto-Galerie',
      description: 'Inspirierende Vorher/Nachher Bilder.',
      link: '/gallery',
      icon: '🖼️'
    },
    {
      title: 'Fragen & Antworten',
      description: 'Häufige Fragen beantwortet von Experten.',
      link: '/faq',
      icon: '❓'
    },
    {
      title: 'Sicherheit',
      description: 'Alles über sichere ästhetische Medizin.',
      link: '/safety',
      icon: '🛡️'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Ressourcen & Wissen</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">{resource.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <Link href={resource.link} className="text-blue-600 hover:underline">
                Entdecken
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}