import Header from '@/components/Header';
import Link from 'next/link';

// Sample FAQs
const faqs = [
  {
    question: "Was ist ästhetische Medizin?",
    answer: "Ästhetische Medizin umfasst nicht-chirurgische Behandlungen zur Verbesserung des äußeren Erscheinungsbildes, wie Botox, Fillers und Lasertherapien."
  },
  {
    question: "Sind die Behandlungen sicher?",
    answer: "Bei qualifizierten Ärzten sind sie sicher, aber Risiken bestehen. Konsultieren Sie immer einen Fachmann."
  },
  {
    question: "Wie lange halten die Ergebnisse?",
    answer: "Abhängig von der Behandlung: Botox 3-6 Monate, Fillers 6-18 Monate. Regelmäßige Nachsorge empfohlen."
  },
  {
    question: "Was kostet eine Botox-Behandlung?",
    answer: "Preise variieren, typisch 200-500€ pro Behandlung. Genauen Preis beim Arzt erfragen."
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Häufige Fragen</h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-white rounded-lg shadow-md p-6">
              <summary className="font-semibold cursor-pointer">{faq.question}</summary>
              <p className="mt-4 text-gray-700">{faq.answer}</p>
            </details>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Mehr Fragen? Kontaktieren Sie uns
          </Link>
        </div>
      </main>

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </div>
  );
}