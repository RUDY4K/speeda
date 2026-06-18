import Link from "next/link";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/pricing", label: "الأسعار" },
  { href: "/use-cases", label: "الاستخدامات" },
  { href: "/integrations", label: "الربط" },
  { href: "/about", label: "عن سبيدا" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/5 bg-white/80 backdrop-blur">
      <nav className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-brand">Speeda</span>
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
