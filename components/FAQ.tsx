"use client";

import { useState } from "react";

const items = [
  {
    q: "هل يحتاج برمجة أو مطور؟",
    a: "لا أبداً. أي صاحب مطعم يقدر يربط Speeda في 15 دقيقة من خلال Dashboard بسيط. لو احتجت مساعدة، فريقنا يساعدك مباشرة.",
  },
  {
    q: "وش لو ما عندي Foodics؟",
    a: "Speeda يشتغل وحده بدون POS، أو نربطه بـ Salla أو Zid أو نظامك الداخلي. اختر اللي يناسبك من أكثر من 15 تكامل جاهز.",
  },
  {
    q: "وين تنحفظ بيانات عملائي؟",
    a: "كل البيانات تنحفظ في خوادم سعودية متوافقة مع نظام حماية البيانات (PDPL). ما نشاركها، ما نبيعها، وما نستخدمها لتدريب نماذج خارجية.",
  },
  {
    q: "كم ياخذ التركيب فعلياً؟",
    a: "5-15 دقيقة لربط Foodics وتفعيل البوت. تدريب البوت على منيوك الكامل ياخذ ساعة واحدة (نسويها معك بجلسة 1:1 في باقة Pro).",
  },
  {
    q: "هل أقدر أعدّل ردوده وأشخصنها؟",
    a: "أيوه. من Dashboard تقدر تعدّل الترحيب، نبرة الرد، الإيموجي، ساعات العمل، وحتى تضيف ردود لأسئلة معينة. كل تغيير يطبّق فوراً.",
  },
  {
    q: "هل في عقد طويل أو رسوم خفية؟",
    a: "لا. كل باقاتنا شهرية، تلغي أي وقت. ما فيه رسوم تركيب، ما فيه رسوم خفية. الفاتورة شفافة ومعتمدة من ZATCA.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section bg-ink-100/40">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            الأسئلة الشائعة
          </span>
          <h2 className="h2 mt-3">كل ما تحتاج تعرفه.</h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={it.q}
                className="overflow-hidden rounded-2xl border border-ink-900/10 bg-white"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-right transition hover:bg-ink-100/50"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-ink-900">
                    {it.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-ink-500 leading-relaxed">
                      {it.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
