import Reveal from "./Reveal";

const items = [
  {
    quote:
      "Speeda وفّر علينا موظفين بدوامين، والطلبات زادت 30% في رمضان. أحسن استثمار سويناه هالسنة.",
    name: "أحمد المطيري",
    role: "صاحب 4 فروع برقر — الرياض",
    initials: "أم",
    bg: "bg-amber-500",
    stat: { v: "+30%", l: "طلبات رمضان" },
  },
  {
    quote:
      "العملاء صاروا يطلبون قبل ما يوصلون بـ 10 دقايق. خفّينا وقت الانتظار 60%، والباريستا يركز على التحضير.",
    name: "لينا الحربي",
    role: "صاحبة Specialty Coffee — جدة",
    initials: "لح",
    bg: "bg-rose-500",
    stat: { v: "-60%", l: "وقت الانتظار" },
  },
  {
    quote:
      "عندنا 18 فرع، وكل فرع كان له واتساب. اليوم رقم واحد، Dashboard واحد، وراحة بال.",
    name: "عبدالعزيز الشهري",
    role: "COO سلسلة مطاعم — الدمام",
    initials: "عش",
    bg: "bg-emerald-600",
    stat: { v: "18", l: "فرع موحّد" },
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            قصص حقيقية
          </span>
          <h2 className="h2 mt-3">عملاؤنا، بكلامهم.</h2>
          <p className="lead mt-5">
            150+ مطعم وكافيه سعودي يستخدمون Speeda يومياً.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className="flex h-full flex-col rounded-2xl border border-ink-900/10 bg-white p-8 shadow-sm transition hover:shadow-xl">
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-ink-700">
                  "{t.quote}"
                </blockquote>

                <div className="mt-6 rounded-xl bg-brand-50 p-4">
                  <div className="text-3xl font-bold text-brand-700">{t.stat.v}</div>
                  <div className="text-xs text-ink-500">{t.stat.l}</div>
                </div>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-900/5 pt-5">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full text-white font-bold ${t.bg}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-ink-900">{t.name}</div>
                    <div className="text-sm text-ink-500">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
