import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Aesthetic Medicine Blog
          </Link>
          <nav className="flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900">
              Blog
            </Link>
            <Link href="/practices" className="text-gray-700 hover:text-gray-900">
              Praxen
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-gray-900">
              FAQ
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              Über uns
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Kontakt
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}