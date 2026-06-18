"use server";

import { Resend } from "resend";

type State = {
  ok: boolean;
  error?: string;
};

const REQUIRED_FIELDS = ["name", "restaurant", "phone", "email"] as const;

export async function submitDemo(
  _prev: State,
  formData: FormData
): Promise<State> {
  for (const field of REQUIRED_FIELDS) {
    const value = formData.get(field);
    if (!value || typeof value !== "string" || value.trim().length < 2) {
      return { ok: false, error: `الحقل ${field} مطلوب` };
    }
  }

  const data = {
    name: String(formData.get("name")),
    restaurant: String(formData.get("restaurant")),
    phone: String(formData.get("phone")),
    email: String(formData.get("email")),
    branches: String(formData.get("branches") ?? ""),
    pos: String(formData.get("pos") ?? ""),
    timing: String(formData.get("timing") ?? ""),
    notes: String(formData.get("notes") ?? ""),
  };

  if (!/^[^@]+@[^@]+\.[^@]+$/.test(data.email)) {
    return { ok: false, error: "البريد الإلكتروني غير صحيح" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.DEMO_NOTIFY_EMAIL ?? "hello@speeda.sa";
  const from = process.env.RESEND_FROM ?? "Speeda Demo <onboarding@resend.dev>";

  if (!apiKey) {
    console.warn("[submit-demo] RESEND_API_KEY not set — skipping email send");
    console.log("[submit-demo] received:", data);
    return { ok: true };
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `📥 طلب ديمو جديد — ${data.restaurant}`,
      html: `
        <div dir="rtl" style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px;">
          <h2 style="color: #006C35;">طلب ديمو جديد من Speeda</h2>
          <table cellpadding="8" style="border-collapse: collapse; width: 100%;">
            <tr><td style="background:#f5f5f5;"><strong>الاسم</strong></td><td>${data.name}</td></tr>
            <tr><td style="background:#f5f5f5;"><strong>المطعم</strong></td><td>${data.restaurant}</td></tr>
            <tr><td style="background:#f5f5f5;"><strong>الواتساب</strong></td><td>${data.phone}</td></tr>
            <tr><td style="background:#f5f5f5;"><strong>البريد</strong></td><td>${data.email}</td></tr>
            <tr><td style="background:#f5f5f5;"><strong>عدد الفروع</strong></td><td>${data.branches}</td></tr>
            <tr><td style="background:#f5f5f5;"><strong>POS</strong></td><td>${data.pos}</td></tr>
            <tr><td style="background:#f5f5f5;"><strong>التوقيت</strong></td><td>${data.timing}</td></tr>
            <tr><td style="background:#f5f5f5;"><strong>ملاحظات</strong></td><td>${data.notes || "—"}</td></tr>
          </table>
        </div>
      `,
    });
    return { ok: true };
  } catch (err) {
    console.error("[submit-demo] resend error", err);
    return { ok: false, error: "صار خطأ غير متوقع. حاول مرة ثانية أو كلمنا واتساب." };
  }
}
