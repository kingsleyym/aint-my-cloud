'use client';

interface CTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref?: string;
  onClick?: () => void;
}

export default function CTA({ title, subtitle, buttonText, buttonHref, onClick }: CTAProps) {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-xl text-gray-600 mb-8">{subtitle}</p>
        {buttonHref ? (
          <a
            href={buttonHref}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            {buttonText}
          </a>
        ) : (
          <button
            onClick={onClick}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
}