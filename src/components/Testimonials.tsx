export default function Testimonials() {
  const testimonials = [
    {
      name: 'Anna M.',
      age: 34,
      procedure: 'Botox',
      text: 'Endlich sehe ich wieder frisch aus. Die Behandlung war professionell und das Ergebnis natürlich.',
      rating: 5
    },
    {
      name: 'Max K.',
      age: 42,
      procedure: 'Hyaluron',
      text: 'Sehr zufrieden mit der Beratung und dem Resultat. Würde es jederzeit weiterempfehlen.',
      rating: 5
    },
    {
      name: 'Lisa S.',
      age: 29,
      procedure: 'Anti-Aging',
      text: 'Das Team war super einfühlsam. Meine Haut sieht strahlend aus.',
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Was unsere Patienten sagen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <div className="text-sm text-gray-500">
                <strong>{testimonial.name}</strong>, {testimonial.age} Jahre, {testimonial.procedure}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}