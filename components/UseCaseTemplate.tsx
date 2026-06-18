import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Section from "./Section";
import Reveal from "./Reveal";
import Link from "next/link";

type Stat = { v: string; l: string };
type Pain = { icon: string; title: string; desc: string };

type Props = {
  icon: string;
  eyebrow: string;
  title: string;
  description: string;
  stats: Stat[];
  pains: Pain[];
  features: { icon: string; title: string; desc: string }[];
  quote: { text: string; name: string; role: string };
  cta: string;
  children?: ReactNode;
};

export default function UseCaseTemplate({
  icon,
  eyebrow,
  title,
  description,
  stats,
  pains,
  features,
  quote,
  cta,
  children,
}: Props) {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-gradient-to-b from-brand-50 to-white pt-20 pb-20 lg:pt-28">
          <div className="container-x">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-6xl">{icon}</div>
              <span className="mt-6 inline-block text-sm font-semibold uppercase tracking-wider text-brand">
                {eyebrow}
              </span>
              <h1 className="h1 mt-4">{title}</h1>
              <p className="lead mt-6">{description}</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link href="/demo" className="btn-primary">
                  {cta}
                </Link>
                <Link href="/pricing" className="btn-secondary">
                  شف الأسعار
                </Link>
              </div>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={s.l} delay={i * 80}>
                  <div className="rounded-2xl border border-ink-900/10 bg-white p-6 text-center shadow-sm">
                    <div className="text-3xl font-bold text-brand">{s.v}</div>
                    <div className="mt-2 text-sm text-ink-500">{s.l}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Section
          eyebrow="التحديات"
          title="3 آلام يعيشها كل صاحب عمل في هالقطاع."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {pains.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="rounded-2xl border border-ink-900/10 bg-white p-8 shadow-sm">
                  <div className="text-4xl">{p.icon}</div>
                  <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-ink-500">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section bg="ink" eyebrow="الحل" title="كيف يساعدك Speeda بالضبط.">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="rounded-2xl bg-white p-6 transition hover:shadow-xl">
                  <div className="text-3xl">{f.icon}</div>
                  <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 text-ink-500">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {children}

        <Section title="">
          <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-brand-50 to-white p-10 text-center shadow-sm">
            <div className="text-5xl">"</div>
            <p className="mt-4 text-2xl font-medium leading-relaxed text-ink-900">
              {quote.text}
            </p>
            <div className="mt-6">
              <div className="font-semibold">{quote.name}</div>
              <div className="text-sm text-ink-500">{quote.role}</div>
            </div>
          </div>
        </Section>

        <Section
          bg="brand"
          title={cta}
          description="14 يوم تجربة مجانية، بدون كرت ائتمان."
        >
          <div className="flex justify-center">
            <Link
              href="/demo"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-brand hover:bg-ink-100"
            >
              ابدأ الحين
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
