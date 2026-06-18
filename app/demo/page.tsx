import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoForm from "@/components/DemoForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "احجز ديمو Speeda | شف البوت يشتغل على مطعمك",
  description:
    "ديمو حي 20 دقيقة على بيانات مطعمك الحقيقية. شف Speeda يرد على عملائك ويسجل الطلبات في Foodics. مجاني، بدون التزام.",
  path: "/demo",
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
                <p className="lead mt-6">خلال المكالمة، راح نريك:</p>

                <ul className="mt-6 space-y-3 text-lg">
                  {[
                    "كيف Speeda يرد على عملاء مطعمك بمنيوك الحقيقي",
                    "كيف يدخل الطلب في Foodics خطوة بخطوة",
                    "Dashboard حقيقي مع بيانات مطعم مشابه لمطعمك",
                    "حساب ROI متوقع لشغلك",
                    "خطة تطبيق مفصّلة لو قررت تبدأ",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-brand">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-wrap gap-6 text-sm text-ink-500">
                  <span>🌟 4.9/5 من 80+ تقييم</span>
                  <span>🇸🇦 فريق سعودي يكلمك مباشرة</span>
                  <span>⏰ 20 دقيقة، بدون ضغط مبيعات</span>
                </div>
              </div>

              {/* Right — form */}
              <DemoForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
