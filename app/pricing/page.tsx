import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "أسعار Speeda | باقات شهرية من 199 ر.س — بدون التزام",
  description:
    "3 باقات شفافة من 199 إلى 1,499 ر.س شهرياً. 14 يوم تجربة مجانية، إلغاء أي وقت، فاتورة ZATCA. كل الباقات تشمل دعم سعودي ودمج Foodics.",
  path: "/pricing",
  ogImage: "/og/pricing.png",
});

const tiers = [
  {
    name: "Starter",
    price: "199",
    desc: "للمطعم اللي بدأ يكبر",
    features: [
      "فرع واحد",
      "1,000 محادثة / شهر",
      "رد آلي بالعربي السعودي",
      "Dashboard لحظي",
      "دعم بالواتساب",
    ],
    cta: "ابدأ مجاناً",
    href: "/demo",
  },
  {
    name: "Pro",
    price: "499",
    desc: "للمطاعم اللي تبي تكبر بسرعة",
    featured: true,
    features: [
      "حتى 3 فروع",
      "5,000 محادثة / شهر",
      "ربط Foodics مباشر",
      "ربط Salla و Zid",
      "تعديل ردود البوت",
      "تقارير متقدمة",
      "دعم أولوية",
    ],
    cta: "ابدأ مجاناً",
    href: "/demo",
  },
  {
    name: "Business",
    price: "1,499",
    desc: "لسلاسل الفروع والامتيازات",
    features: [
      "فروع غير محدودة",
      "محادثات غير محدودة",
      "توجيه ذكي للفروع",
      "API + Webhooks",
      "مدير حساب مخصص",
      "SLA 99.9%",
      "دعم 24/7",
    ],
    cta: "احجز ديمو",
    href: "/demo",
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section
          eyebrow="الأسعار"
          title="سعر واضح. بدون مفاجآت."
          description="كل الباقات تجي مع 14 يوم تجربة مجانية، بدون كرت ائتمان، وتقدر تلغي في أي لحظة."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`rounded-2xl p-8 ${
                  t.featured
                    ? "border-2 border-brand bg-brand-50 shadow-xl lg:-translate-y-4"
                    : "border border-ink-900/10 bg-white"
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
                  href={t.href}
                  className={`mt-6 block w-full text-center ${
                    t.featured ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  {t.cta}
                </Link>

                <ul className="mt-8 space-y-3 text-sm">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-brand">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section
          bg="ink"
          title="عندك أكثر من 50 فرع؟"
          description="نبني لك حزمة مخصصة بأسعار خاصة وتكاملات على المقاس."
        >
          <div className="flex justify-center">
            <Link href="/demo" className="btn-primary">
              تواصل مع المبيعات
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
