import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/pricing", label: "الأسعار" },
  { href: "/use-cases", label: "الاستخدامات" },
  { href: "/integrations", label: "الربط" },
  { href: "/blog", label: "المدونة" },
  { href: "/about", label: "عن سبيدا" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/5 bg-white/80 backdrop-blur">
      <nav className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Speeda الرئيسية">
          <Image src="/logo.svg" alt="Speeda" width={120} height={32} priority />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium text-ink-700 transition hover:text-brand"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/demo" className="btn-primary text-sm">
          جرّب مجاناً
        </Link>
      </nav>
    </header>
  );
}
