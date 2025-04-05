import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 border-b border-gray-800 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          Rusar R P
        </Link>
        <div className="space-x-4 text-gray-300 text-sm">
          <Link href="#about" className="hover:text-white">
            About
          </Link>
          <Link href="#skills" className="hover:text-white">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-white">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
