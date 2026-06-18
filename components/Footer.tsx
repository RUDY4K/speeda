import Link from "next/link";

const groups = [
  {
    title: "المنتج",
    links: [
      { href: "/", label: "الرئيسية" },
      { href: "/pricing", label: "الأسعار" },
      { href: "/use-cases", label: "الاستخدامات" },
      { href: "/integrations", label: "الربط والتكاملات" },
    ],
  },
  {
    title: "الشركة",
    links: [
      { href: "/about", label: "عن سبيدا" },
      { href: "/demo", label: "احجز ديمو" },
      { href: "#", label: "الوظائف" },
      { href: "#", label: "المدونة" },
    ],
  },
  {
    title: "قانوني",
    links: [
      { href: "/privacy", label: "سياسة الخصوصية" },
      { href: "/terms", label: "شروط الاستخدام" },
      { href: "/dpa", label: "اتفاقية معالجة البيانات" },
      { href: "/privacy#7", label: "حقوقك في PDPL" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-900/10 bg-ink-100">
      <div className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="text-2xl font-bold text-brand">Speeda</div>
            <p className="mt-4 text-sm text-ink-500">
              بوت واتساب AI للمطاعم والكافيهات السعودية. يرد، يستقبل طلبات، ويربطها بـ Foodics.
            </p>
            <p className="mt-6 text-xs text-ink-300">
              🇸🇦 بيانات في السعودية · متوافق مع PDPL
            </p>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-sm font-semibold text-ink-900">{g.title}</h3>
              <ul className="mt-4 space-y-3">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink-500 transition hover:text-brand"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink-900/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} Speeda. كل الحقوق محفوظة.
          </p>
          <div className="flex gap-4 text-xs text-ink-500">
            <a href="#" className="transition hover:text-brand">X</a>
            <a href="#" className="transition hover:text-brand">LinkedIn</a>
            <a href="#" className="transition hover:text-brand">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
