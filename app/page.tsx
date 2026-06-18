import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import LogoCloud from "@/components/LogoCloud";
import FoodicsSpotlight from "@/components/FoodicsSpotlight";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Speeda | بوت واتساب AI للمطاعم السعودية + ربط Foodics",
  description:
    "موظف خدمة عملاء AI يرد على عملاء مطعمك بالعربي السعودي 24/7، ويسجل الطلبات في Foodics مباشرة. جرّب 14 يوم مجاناً، بدون كرت ائتمان.",
  path: "/",
  ogImage: "/og/home.png",
});

const problems = [
  {
    icon: "🕐",
    title: "40% من الرسائل تجي بعد الدوام",
    desc: "وتروح للمنافس قبل ما تشوفها.",
  },
  {
    icon: "📞",
    title: "موظف خدمة عملاء = 5,000+ ر.س / شهر",
    desc: "وحتى مع كذا، ما يشتغل 24/7.",
  },
  {
    icon: "📋",
    title: "الطلبات تتسجل يدوياً",
    desc: "أخطاء، تأخير، وعملاء مستائين.",
  },
];

const steps = [
  { n: "1", title: "اربط رقم واتساب أعمالك", desc: "في دقيقتين." },
  { n: "2", title: "علّم Speeda على منيوك", desc: "اسحب وأفلت من Foodics." },
  { n: "3", title: "اقعد، Speeda يرد", desc: "وتابع من Dashboard لحظياً." },
];

const features = [
  { icon: "🇸🇦", title: "يتكلم سعودي أصلي", desc: "مو فصحى ميتة." },
  { icon: "🍔", title: "يفهم المنيو والإضافات", desc: "حتى الاستثناءات." },
  { icon: "🔄", title: "يربط مع Foodics", desc: "مباشرة، بدون نسخ ولصق." },
  { icon: "📊", title: "Dashboard لحظي", desc: "كل الطلبات في مكان واحد." },
  { icon: "🛡️", title: "متوافق مع PDPL", desc: "ومستضاف في السعودية." },
  { icon: "🌙", title: "يشتغل في رمضان", desc: "وفي 3 الفجر." },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />

        {/* Problem */}
        <Section
          eyebrow="المشكلة"
          title="مطعمك يخسر طلبات وأنت ما تدري."
          description="3 آلام يعيشها كل صاحب مطعم سعودي يستقبل طلبات على واتساب."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <div className="rounded-2xl border border-ink-900/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="text-4xl">{p.icon}</div>
                  <h3 className="mt-4 text-xl font-bold text-ink-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-ink-500">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* How it works */}
        <Section bg="ink" eyebrow="الحل" title="3 خطوات وSpeeda يرد بدلك.">
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand text-2xl font-bold text-white animate-pulse-ring">
                    {s.n}
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-ink-500">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Features */}
        <Section eyebrow="الميزات" title="مبني للسوق السعودي، من الصفر.">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-ink-900/10 p-6 transition hover:-translate-y-1 hover:border-brand hover:shadow-xl">
                  <div className="text-3xl">{f.icon}</div>
                  <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 text-ink-500">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Foodics Spotlight */}
        <FoodicsSpotlight />

        {/* Testimonials */}
        <Testimonials />

        {/* Pricing teaser */}
        <Section
          eyebrow="الأسعار"
          title="ابدأ من 199 ر.س / شهر."
          description="3 باقات شفافة. 14 يوم تجربة مجانية. إلغاء أي وقت."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Starter", price: "199", desc: "للمطعم اللي بدأ يكبر" },
              {
                name: "Pro",
                price: "499",
                desc: "للمطاعم اللي تبي تكبر بسرعة",
                featured: true,
              },
              { name: "Business", price: "1,499", desc: "لسلاسل الفروع" },
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <div
                  className={`h-full rounded-2xl p-8 transition ${
                    t.featured
                      ? "border-2 border-brand bg-brand-50 shadow-xl lg:-translate-y-4"
                      : "border border-ink-900/10 bg-white hover:-translate-y-1 hover:shadow-lg"
                  }`}
                >
                  {t.featured && (
                    <span className="inline-block rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                      الأكثر طلباً ⭐
                    </span>
                  )}
                  <h3 className="mt-4 text-2xl font-bold">{t.name}</h3>
                  <p className="mt-2 text-ink-500">{t.desc}</p>
                  <div className="mt-6">
                    <span className="text-5xl font-bold">{t.price}</span>
                    <span className="mr-1 text-ink-500">ر.س / شهر</span>
                  </div>
                  <Link
                    href="/pricing"
                    className={`mt-6 block w-full text-center ${
                      t.featured ? "btn-primary" : "btn-secondary"
                    }`}
                  >
                    اختر الباقة
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/pricing" className="text-brand hover:underline">
              شف مقارنة الباقات الكاملة ←
            </Link>
          </div>
        </Section>

        {/* FAQ */}
        <FAQ />

        {/* Final CTA */}
        <Section
          bg="brand"
          title="خلّ Speeda يرد بدالك الليلة."
          description="ابدأ 14 يوم مجاناً. بدون كرت ائتمان. بدون التزام."
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/demo"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-brand transition hover:bg-ink-100 hover:scale-105"
            >
              احجز ديمو
            </Link>
            <Link
              href="/pricing"
              className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              شف الأسعار
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
