import Reveal from "./Reveal";

const flow = [
  {
    icon: "💬",
    title: "العميل يطلب على واتساب",
    desc: "أبي 2 برقر + بطاطس كبير",
  },
  {
    icon: "🤖",
    title: "Speeda يفهم ويأكد",
    desc: "في 3 ثواني، باللهجة السعودية",
  },
  {
    icon: "⚡",
    title: "الطلب يدخل Foodics فوراً",
    desc: "بكل الإضافات والاستثناءات",
  },
  {
    icon: "🍳",
    title: "المطبخ يبدأ، العميل يتابع",
    desc: "إشعارات تلقائية لكل مرحلة",
  },
];

export default function FoodicsSpotlight() {
  return (
    <section className="section bg-gradient-to-br from-brand-50 via-white to-brand-50">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-white">
            🏆 شريك Foodics معتمد
          </span>
          <h2 className="h2 mt-5">
            Foodics × Speeda — أعمق تكامل واتساب POS في السعودية.
          </h2>
          <p className="lead mt-5">
            كل طلب يدخل من واتساب → يطلع في Foodics POS تلقائياً.
            بدون نسخ ولصق، بدون أخطاء، بدون موظف.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid gap-4 md:grid-cols-4">
            {flow.map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <div className="relative rounded-2xl border border-ink-900/10 bg-white p-6 shadow-sm">
                  <div className="absolute -top-4 right-6 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  <div className="text-4xl">{step.icon}</div>
                  <h3 className="mt-4 text-base font-bold text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-500">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="mt-12 rounded-3xl bg-ink-900 p-8 text-white shadow-2xl lg:p-12">
              <div className="grid items-center gap-8 lg:grid-cols-3">
                <div>
                  <div className="text-sm font-medium text-emerald-400">
                    ما يدخل تلقائياً
                  </div>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li>✅ الطلب كاملاً بالأصناف</li>
                    <li>✅ الإضافات والاستثناءات</li>
                    <li>✅ بيانات العميل والعنوان</li>
                    <li>✅ طريقة الدفع</li>
                  </ul>
                </div>
                <div>
                  <div className="text-sm font-medium text-emerald-400">
                    ما يتحدّث لحظياً
                  </div>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li>🟢 توفّر الأصناف</li>
                    <li>💰 الأسعار</li>
                    <li>🏪 حالة الفرع</li>
                    <li>📍 مناطق التوصيل</li>
                  </ul>
                </div>
                <div>
                  <div className="text-sm font-medium text-emerald-400">
                    تشوفه في Dashboard
                  </div>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li>📈 طلبات حسب القناة</li>
                    <li>💵 إيرادات لحظية</li>
                    <li>⏱️ متوسط وقت التجهيز</li>
                    <li>🌟 أكثر العملاء تكراراً</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
