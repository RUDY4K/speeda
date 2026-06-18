import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "ربط Speeda بـ Foodics، Salla، Zid، مدى | تكاملات Speeda",
  description:
    "شريك Foodics معتمد. اربط Speeda بنظام مطعمك في 5 دقائق: POS، متاجر، دفع، توصيل. OAuth آمن + API كامل + Webhooks للمطورين.",
  path: "/integrations",
  ogImage: "/og/integrations.png",
});

const groups = [
  {
    title: "أنظمة POS",
    items: [
      { name: "Foodics", status: "جاهز", featured: true },
      { name: "Marn", status: "جاهز" },
      { name: "Lightspeed", status: "قريباً" },
      { name: "نظام داخلي", status: "API" },
    ],
  },
  {
    title: "متاجر إلكترونية",
    items: [
      { name: "Salla", status: "جاهز" },
      { name: "Zid", status: "جاهز" },
      { name: "Shopify", status: "قريباً" },
      { name: "WooCommerce", status: "قريباً" },
    ],
  },
  {
    title: "الدفع",
    items: [
      { name: "Mada Pay", status: "جاهز" },
      { name: "STC Pay", status: "جاهز" },
      { name: "Apple Pay", status: "جاهز" },
      { name: "Tabby & Tamara", status: "جاهز" },
    ],
  },
  {
    title: "التوصيل",
    items: [
      { name: "Mrsool", status: "جاهز" },
      { name: "Jahez", status: "جاهز" },
      { name: "HungerStation", status: "جاهز" },
      { name: "Talabat", status: "قريباً" },
    ],
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section
          eyebrow="الربط والتكاملات"
          title="Speeda يتكلم مع كل أدواتك — بدون نسخ ولصق."
          description="اربط Speeda بنظام مطعمك في دقيقتين. الطلب يدخل من واتساب → POS → محاسبة → عميل. سلسلة وحدة."
        >
          <div className="space-y-12">
            {groups.map((g) => (
              <div key={g.title}>
                <h3 className="mb-6 text-xl font-bold">{g.title}</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {g.items.map((it) => (
                    <div
                      key={it.name}
                      className={`rounded-2xl border p-6 ${
                        it.featured
                          ? "border-brand bg-brand-50"
                          : "border-ink-900/10 bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold">{it.name}</span>
                        <span
                          className={`rounded-full px-2 py-1 text-xs font-semibold ${
                            it.status === "جاهز"
                              ? "bg-green-100 text-green-700"
                              : it.status === "قريباً"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-ink-100 text-ink-700"
                          }`}
                        >
                          {it.status}
                        </span>
                      </div>
                      {it.featured && (
                        <p className="mt-3 text-xs text-brand-700">
                          ⭐ الأكثر استخداماً — شريك معتمد
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          bg="ink"
          eyebrow="للمطورين"
          title="عندك نظام داخلي؟ Speeda API يربطك بأي شي."
          description="REST API كامل + Webhooks + Sandbox مجاني. ابنِ تكاملات مخصصة في ساعات."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { t: "📘 REST API", d: "نقطة نهاية لكل ميزة. Auth بـ JWT." },
              { t: "🔔 Webhooks", d: "استقبل أحداث Speeda في نظامك." },
              { t: "🧪 Sandbox", d: "بيئة اختبار مجانية وكاملة." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl bg-white p-6">
                <h3 className="text-lg font-bold">{c.t}</h3>
                <p className="mt-2 text-ink-500">{c.d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          bg="brand"
          title="أداة وحدة. كل أنظمتك تشتغل سوا."
          description="اربط Foodics، Salla، Mada، Mrsool — في أقل من 10 دقائق."
        >
          <div className="flex justify-center">
            <Link href="/demo" className="rounded-xl bg-white px-6 py-3 font-semibold text-brand hover:bg-ink-100">
              احجز ديمو ربط
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
