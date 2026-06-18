import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white pt-20 pb-24 lg:pt-28 lg:pb-32">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-sm font-medium text-brand-700">
              🇸🇦 الإصدار التجريبي مفتوح الآن
            </span>

            <h1 className="h1 mt-6">
              موظف واتساب ما ينام،
              <br />
              ما يغلط، وما يطلب راتب.
            </h1>

            <p className="lead mt-6 max-w-xl">
              Speeda يرد على عملاء مطعمك بالعربي السعودي، يستقبل الطلبات،
              ويسجلها مباشرة في <span className="font-semibold text-ink-900">Foodics</span> —
              24 ساعة، 7 أيام.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/demo" className="btn-primary">
                ابدأ تجربة 14 يوم مجاناً
              </Link>
              <Link href="#demo-video" className="btn-secondary">
                شاهد ديمو 2 دقيقة ▸
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-ink-500">
              <span>✓ بدون كرت ائتمان</span>
              <span>✓ تركيب في 5 دقائق</span>
              <span>✓ إلغاء أي وقت</span>
            </div>
          </div>

          {/* WhatsApp mock */}
          <div className="relative">
            <div className="mx-auto max-w-sm rounded-3xl border border-ink-900/10 bg-white p-3 shadow-2xl">
              <div className="rounded-2xl bg-[#0b141a] p-4">
                <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">
                    S
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">مطعم البرقر الذهبي</div>
                    <div className="text-xs text-emerald-400">متصل الآن</div>
                  </div>
                </div>

                <div className="mt-4 space-y-3 text-sm">
                  <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-emerald-700 px-3 py-2 text-white">
                    أبي 2 برقر لحم + بطاطس كبير، بدون مخلل
                  </div>
                  <div className="mr-auto max-w-[80%] rounded-2xl rounded-bl-md bg-white px-3 py-2 text-ink-900">
                    هلا بك! 🌟
                    <br />
                    طلبك:
                    <br />
                    🍔 برقر لحم × 2 — 50 ر.س
                    <br />
                    🍟 بطاطس كبير — 12 ر.س
                    <br />
                    <strong>المجموع: 62 ر.س</strong>
                    <br />
                    أأكد الطلب؟
                  </div>
                  <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-emerald-700 px-3 py-2 text-white">
                    أكّد 👍
                  </div>
                  <div className="mr-auto max-w-[80%] rounded-2xl rounded-bl-md bg-white px-3 py-2 text-ink-900">
                    تمام! طلبك دخل المطبخ ✅
                    <br />
                    <span className="text-xs text-ink-500">⚡ تم التسجيل في Foodics</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-brand/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
