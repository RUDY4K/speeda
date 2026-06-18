import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "استخدامات Speeda | بوت واتساب لمطاعم، كافيهات، وسلاسل",
  description:
    "شف كيف يستخدم 150+ مطعم وكافيه سعودي Speeda لاستقبال الطلبات وزيادة المبيعات 30% بعد منتصف الليل. قصص حقيقية وأرقام.",
  path: "/use-cases",
  ogImage: "/og/use-cases.png",
});

const cases = [
  {
    icon: "🍔",
    title: "مطاعم الوجبات السريعة",
    desc: "برقر، شاورما، بيتزا — Speeda يستقبل عشرات الطلبات في الذروة بدون أن يضيع طلب.",
    result: "+30% طلبات في رمضان وبعد منتصف الليل",
    quote: "كنّا نخسر 15-20 طلب يومياً بعد ساعة 11 الليل. مع Speeda، صارت أرباحنا الليلية أعلى من النهارية.",
    name: "يوسف، 3 فروع برقر — جدة",
  },
  {
    icon: "☕",
    title: "الكافيهات والمقاهي",
    desc: "العملاء يطلبون من السيارة، Speeda يأخذ الطلب ويبلّغ الباريستا وقت الجاهزية.",
    result: "60% انخفاض في وقت انتظار الطلب",
    quote: "العملاء صاروا يطلبون قبل ما يوصلون بـ 10 دقايق. خفّينا وقت الانتظار 60%.",
    name: "لينا، صاحبة Specialty Cafe — الرياض",
  },
  {
    icon: "🏢",
    title: "سلاسل الفروع والامتيازات",
    desc: "Dashboard مركزي وتوجيه ذكي بـ GPS — كل طلب يروح لأقرب فرع تلقائياً.",
    result: "Dashboard موحد لـ 18 فرع",
    quote: "قبل Speeda، كل فرع له واتساب وكل واحد يرد على هواه. اليوم، رقم واحد لكل العملاء.",
    name: "عبدالعزيز، COO سلسلة مطاعم — الدمام",
  },
];

export default function UseCasesPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section
          eyebrow="الاستخدامات"
          title="Speeda يخدم كل عمل ينعاش على واتساب."
          description="من مطعم برقر بفرع واحد، لسلسلة كافيهات بـ 30 فرع — Speeda يتكيف مع حجمك ونوع شغلك."
        >
          <div className="grid gap-8 lg:grid-cols-3">
            {cases.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-ink-900/10 bg-white p-8 shadow-sm"
              >
                <div className="text-5xl">{c.icon}</div>
                <h3 className="mt-5 text-2xl font-bold">{c.title}</h3>
                <p className="mt-3 text-ink-500">{c.desc}</p>
                <div className="mt-6 rounded-xl bg-brand-50 p-4 text-sm font-semibold text-brand-700">
                  📈 {c.result}
                </div>
                <blockquote className="mt-6 border-r-2 border-brand pr-4 text-sm italic text-ink-700">
                  "{c.quote}"
                </blockquote>
                <p className="mt-3 text-xs text-ink-500">— {c.name}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          bg="brand"
          title="شغلك يستاهل خدمة أفضل."
          description="جرّب Speeda 14 يوم مجاناً، شف كيف يغيّر يومك."
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/demo" className="rounded-xl bg-white px-6 py-3 font-semibold text-brand hover:bg-ink-100">
              ابدأ مجاناً
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
