"use client";

import { useActionState } from "react";
import { submitDemo } from "@/app/actions/submit-demo";

const initial = { ok: false } as const;

export default function DemoForm() {
  const [state, action, pending] = useActionState(submitDemo, initial);

  if (state.ok) {
    return (
      <div className="rounded-3xl border border-brand bg-brand-50 p-10 text-center shadow-xl">
        <div className="text-6xl">🎉</div>
        <h2 className="mt-4 text-2xl font-bold text-brand-700">
          استلمنا طلبك!
        </h2>
        <p className="mt-3 text-ink-700">
          فريق Speeda يراجع التفاصيل ويتواصل معك خلال ساعة على الواتساب أو
          البريد.
        </p>
        <p className="mt-6 text-sm text-ink-500">
          مستعجل؟{" "}
          <a
            href="https://wa.me/966500000000"
            className="font-semibold text-brand hover:underline"
          >
            كلمنا واتساب الحين
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      action={action}
      className="rounded-3xl border border-ink-900/10 bg-white p-8 shadow-xl"
    >
      <h2 className="text-2xl font-bold">املأ النموذج، نرجع لك خلال ساعة</h2>

      <div className="mt-6 space-y-4">
        <Field name="name" label="الاسم الكامل" placeholder="محمد العتيبي" required />
        <Field name="restaurant" label="اسم المطعم / الكافيه" placeholder="مطعم البرقر الذهبي" required />
        <Field name="phone" label="رقم الواتساب" placeholder="5XXXXXXXX" type="tel" required />
        <Field name="email" label="البريد الإلكتروني" placeholder="you@restaurant.sa" type="email" required />

        <Select
          name="branches"
          label="عدد الفروع"
          options={["1 فرع", "2-3 فروع", "4-10 فروع", "11-30 فرع", "30+ فرع"]}
        />
        <Select
          name="pos"
          label="POS الحالي"
          options={["Foodics", "Salla", "Zid", "Marn", "أخرى", "ما عندي POS"]}
        />
        <Select
          name="timing"
          label="متى تبي تبدأ؟"
          options={["فوراً", "خلال أسبوع", "خلال شهر", "أبي أفهم بس"]}
        />

        <div>
          <label htmlFor="notes" className="text-sm font-medium text-ink-700">
            ملاحظات (اختياري)
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            placeholder="أي تفاصيل تساعدنا نجهز لك مكالمة مفصلة"
            className="mt-2 w-full rounded-xl border border-ink-900/10 px-4 py-3 text-base focus:border-brand focus:outline-none"
          />
        </div>

        {state.error && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
            ⚠️ {state.error}
          </p>
        )}

        <p className="text-xs text-ink-500">
          🔒 بياناتك آمنة. ما نشاركها مع أي طرف.
        </p>

        <button
          type="submit"
          disabled={pending}
          className="btn-primary w-full disabled:opacity-60"
        >
          {pending ? "جارٍ الإرسال..." : "احجز موعدي"}
        </button>

        <p className="text-center text-sm text-ink-500">
          تبي تكلمنا الحين؟{" "}
          <a
            href="https://wa.me/966500000000"
            className="text-brand hover:underline"
          >
            اضغط للواتساب
          </a>
        </p>
      </div>
    </form>
  );
}

function Field({
  name,
  label,
  placeholder,
  required,
  type = "text",
}: {
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-ink-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-ink-900/10 px-4 py-3 text-base focus:border-brand focus:outline-none"
      />
    </div>
  );
}

function Select({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options: string[];
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-ink-700">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="mt-2 w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-base focus:border-brand focus:outline-none"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
