import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "احجز ديمو Speeda | شف البوت يشتغل على مطعمك",
  description:
    "ديمو حي 20 دقيقة على بيانات مطعمك الحقيقية. شف Speeda يرد على عملائك ويسجل الطلبات في Foodics. مجاني، بدون التزام.",
  path: "/demo",
  ogImage: "/og/demo.png",
});

export default function DemoPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gradient-to-b from-brand-50 to-white py-20 lg:py-28">
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left — copy */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-sm font-medium text-brand-700">
                  احجز ديمو
                </span>
                <h1 className="h1 mt-6">
                  شف Speeda يشتغل على مطعمك أنت — في 20 دقيقة.
                </h1>
                <p className="lead mt-6">
                  خلال المكالمة، راح نريك:
                </p>

                <ul className="mt-6 space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-brand">✓</span>
                    <span>كيف Speeda يرد على عملاء مطعمك بمنيوك الحقيقي</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand">✓</span>
                    <span>كيف يدخل الطلب في Foodics خطوة بخطوة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand">✓</span>
                    <span>Dashboard حقيقي مع بيانات مطعم مشابه لمطعمك</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand">✓</span>
                    <span>حساب ROI متوقع لشغلك</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand">✓</span>
                    <span>خطة تطبيق مفصّلة لو قررت تبدأ</span>
                  </li>
                </ul>

                <div className="mt-10 flex flex-wrap gap-6 text-sm text-ink-500">
                  <span>🌟 4.9/5 من 80+ تقييم</span>
                  <span>🇸🇦 فريق سعودي يكلمك مباشرة</span>
                  <span>⏰ 20 دقيقة، بدون ضغط مبيعات</span>
                </div>
              </div>

              {/* Right — form */}
              <div className="rounded-3xl border border-ink-900/10 bg-white p-8 shadow-xl">
                <h2 className="text-2xl font-bold">املأ النموذج، نرجع لك خلال ساعة</h2>
                <form className="mt-6 space-y-4">
                  <Field label="الاسم الكامل" placeholder="محمد العتيبي" required />
                  <Field label="اسم المطعم / الكافيه" placeholder="مطعم البرقر الذهبي" required />
                  <Field label="رقم الواتساب" placeholder="5XXXXXXXX" required type="tel" />
                  <Field label="البريد الإلكتروني" placeholder="you@restaurant.sa" required type="email" />

                  <Select label="عدد الفروع" options={["1 فرع", "2-3 فروع", "4-10 فروع", "11-30 فرع", "30+ فرع"]} />
                  <Select label="POS الحالي" options={["Foodics", "Salla", "Zid", "Marn", "أخرى", "ما عندي POS"]} />
                  <Select label="متى تبي تبدأ؟" options={["فوراً", "خلال أسبوع", "خلال شهر", "أبي أفهم بس"]} />

                  <div>
                    <label className="text-sm font-medium text-ink-700">ملاحظات (اختياري)</label>
                    <textarea
                      rows={3}
                      placeholder="أي تفاصيل تساعدنا نجهز لك مكالمة مفصلة"
                      className="mt-2 w-full rounded-xl border border-ink-900/10 px-4 py-3 text-base focus:border-brand focus:outline-none"
                    />
                  </div>

                  <p className="text-xs text-ink-500">
                    🔒 بياناتك آمنة. ما نشاركها مع أي طرف.
                  </p>

                  <button type="submit" className="btn-primary w-full">
                    احجز موعدي
                  </button>

                  <p className="text-center text-sm text-ink-500">
                    تبي تكلمنا الحين؟{" "}
                    <a href="https://wa.me/966500000000" className="text-brand hover:underline">
                      اضغط للواتساب
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Field({
  label,
  placeholder,
  required,
  type = "text",
}: {
  label: string;
  placeholder: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-ink-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-ink-900/10 px-4 py-3 text-base focus:border-brand focus:outline-none"
      />
    </div>
  );
}

function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="text-sm font-medium text-ink-700">{label}</label>
      <select className="mt-2 w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-base focus:border-brand focus:outline-none">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
