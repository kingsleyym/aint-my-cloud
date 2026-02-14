export default function TrustBadges() {
  return (
    <section className="py-8 bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">✓</div>
            <p className="text-sm text-gray-600 mt-2">Zertifizierte Ärzte</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">🛡️</div>
            <p className="text-sm text-gray-600 mt-2">Sicher & Vertraulich</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">⭐</div>
            <p className="text-sm text-gray-600 mt-2">4.8/5 Bewertung</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">🔒</div>
            <p className="text-sm text-gray-600 mt-2">DSGVO konform</p>
          </div>
        </div>
      </div>
    </section>
  );
}