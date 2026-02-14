import Link from 'next/link';

export default function Features() {
  const features = [
    {
      icon: '⭐',
      title: 'Echte Bewertungen',
      description: 'Lesen Sie authentische Erfahrungen von Patienten.',
      link: '/reviews'
    },
    {
      icon: '📸',
      title: 'Vorher/Nachher Fotos',
      description: 'Über 500.000 unretuschierte Patientenfotos.',
      link: '/photos'
    },
    {
      icon: '👩‍⚕️',
      title: 'Expertenrat',
      description: 'Fragen Sie zertifizierte Ärzte direkt.',
      link: '/ask-doctor'
    },
    {
      icon: '🏥',
      title: 'Praxen finden',
      description: 'Bewertete Praxen in Ihrer Nähe.',
      link: '/practices'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Warum uns wählen?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Link href={feature.link} className="text-blue-600 hover:underline">
                Mehr erfahren
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}