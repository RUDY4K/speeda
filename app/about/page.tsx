import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "عن Speeda | قصة فريق سعودي يبني أدوات AI للمطاعم",
  description:
    "بدأنا Speeda من ملاحظة بسيطة: أصحاب المطاعم السعودية يرّدون على واتساب الساعة 2 الفجر. اقرأ قصتنا، مهمتنا، وفريقنا.",
  path: "/about",
  ogImage: "/og/about.png",
});

const values = [
  {
    icon: "🇸🇦",
    title: "سعودي أصلي",
    desc: "ما ننسخ حلول جاهزة من الخارج ونعرّبها. نبني للسوق السعودي من الصفر.",
  },
  {
    icon: "⚡",
    title: "السرعة فوق كل شي",
    desc: "عميلك ينتظر 5 ثواني، يروح. Speeda يرد في 3 ثواني.",
  },
  {
    icon: "🛡️",
    title: "الثقة قبل المنتج",
    desc: "بياناتك في السعودية. متوافقون مع PDPL من اليوم الأول.",
  },
  {
    icon: "🤝",
    title: "عميلك هو عميلنا",
    desc: "لما طلب عميلك يضيع، نخسر نحن قبلك. نقيس نفسنا بنجاحك.",
  },
];

const stats = [
  { v: "150+", l: "مطعم وكافيه" },
  { v: "2.1M+", l: "رسالة عميل" },
  { v: "47K+", l: "طلب وصل Foodics" },
  { v: "5 ثوان", l: "متوسط الرد" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section
          eyebrow="عن Speeda"
          title="بنينا Speeda لأن أصحاب المطاعم يستاهلون يناموا."
          description="بدأنا من ملاحظة بسيطة — أكثر صاحب مطعم سعودي يفتح جواله الساعة 2 الفجر يرد على عميل. نحن نبني الأداة اللي تخليه ينام بهدوء، وعميله يطلب بدون انتظار."
        />

        <Section
          bg="ink"
          eyebrow="القصة"
          title="بدأت بمكالمة الساعة 11 الليل"
        >
          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-ink-700">
            <p>
              في 2025، صديقنا أحمد — صاحب مطعم برقر في الرياض — اتصل علينا يبي حل.
              عنده 4 موظفين على الواتساب، ومع ذلك يخسر طلبات كل ليلة بعد الساعة 11.
              حسبها على ورقة: 18 طلب ضايع يومياً × 75 ريال × 30 يوم = <strong>40,500 ريال يطيرون كل شهر</strong>.
            </p>
            <p>
              جلسنا معه أسبوعين، بنينا له بوت يرد بالعربي السعودي ويربط الطلب بـ Foodics.
              في أول 30 يوم، استرجع 32 طلب من أصل 18 — لأنه صار يستقبل طلبات ما كان حتى يعرف إنها موجودة.
            </p>
            <p>
              فهمنا إن المشكلة مو مشكلة أحمد لحاله. <strong>عشرات الآلاف من المطاعم والكافيهات في السعودية يعيشون نفس القصة.</strong> قررنا نبني Speeda.
            </p>
          </div>
        </Section>

        <Section title="قيمنا">
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-ink-900/10 p-8"
              >
                <div className="text-4xl">{v.icon}</div>
                <h3 className="mt-4 text-xl font-bold">{v.title}</h3>
                <p className="mt-2 text-ink-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section bg="brand" title="أرقام تختصرنا">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-5xl font-bold">{s.v}</div>
                <div className="mt-2 text-white/80">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link href="/demo" className="rounded-xl bg-white px-6 py-3 font-semibold text-brand hover:bg-ink-100">
              انضم لرحلتنا
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
