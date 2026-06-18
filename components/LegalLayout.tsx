import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";

type Props = {
  title: string;
  updated: string;
  intro: string;
  children: ReactNode;
};

export default function LegalLayout({ title, updated, intro, children }: Props) {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <div className="border-b border-ink-900/5 bg-ink-100/40 py-12">
          <div className="container-x">
            <p className="text-sm font-semibold text-brand">المستندات القانونية</p>
            <h1 className="mt-3 text-3xl font-bold text-ink-900 sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-sm text-ink-500">آخر تحديث: {updated}</p>
            <p className="mt-5 max-w-3xl text-lg text-ink-700">{intro}</p>
            <nav className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link href="/privacy" className="text-ink-500 hover:text-brand">
                سياسة الخصوصية
              </Link>
              <span className="text-ink-300">·</span>
              <Link href="/terms" className="text-ink-500 hover:text-brand">
                شروط الاستخدام
              </Link>
              <span className="text-ink-300">·</span>
              <Link href="/dpa" className="text-ink-500 hover:text-brand">
                اتفاقية معالجة البيانات
              </Link>
            </nav>
          </div>
        </div>

        <article className="container-x py-16">
          <div className="prose-legal mx-auto max-w-3xl">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
              <strong>⚠️ ملاحظة قانونية:</strong> هذا المستند نموذج يستوفي
              الحد الأدنى من متطلبات نظام حماية البيانات الشخصية السعودي (PDPL).
              يُنصح بمراجعته من قِبل محامٍ مرخّص قبل الاعتماد عليه رسمياً.
            </div>

            <div className="mt-10 space-y-8 leading-loose text-ink-700">
              {children}
            </div>

            <div className="mt-16 rounded-2xl bg-brand-50 p-6 text-sm">
              <p className="font-semibold text-brand-700">📧 للتواصل بشأن البيانات</p>
              <p className="mt-2">
                مسؤول حماية البيانات (DPO):{" "}
                <a href="mailto:privacy@speeda.sa" className="text-brand hover:underline">
                  privacy@speeda.sa
                </a>
              </p>
              <p>
                للشكاوى:{" "}
                <a href="mailto:legal@speeda.sa" className="text-brand hover:underline">
                  legal@speeda.sa
                </a>
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
