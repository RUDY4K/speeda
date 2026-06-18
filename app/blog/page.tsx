import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { getAllPostsMeta } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "مدونة Speeda | مقالات لأصحاب المطاعم السعودية",
  description:
    "نصائح، أدلة، وقصص نجاح لأصحاب المطاعم والكافيهات في السعودية. واتساب، Foodics، PDPL، تشغيل، ونمو الأعمال.",
  path: "/blog",
});

const categoryColors: Record<string, string> = {
  مطاعم: "bg-amber-100 text-amber-800",
  تكاملات: "bg-blue-100 text-blue-800",
  قانوني: "bg-rose-100 text-rose-800",
  عام: "bg-ink-100 text-ink-700",
};

export default function BlogIndex() {
  const posts = getAllPostsMeta();

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gradient-to-b from-brand-50 to-white py-20 lg:py-28">
          <div className="container-x text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">
              المدونة
            </span>
            <h1 className="h1 mt-3">أدلة ونصائح لأصحاب المطاعم.</h1>
            <p className="lead mt-5 mx-auto max-w-2xl">
              كل مقال نكتبه يحل مشكلة حقيقية يعيشها صاحب مطعم سعودي. بدون حشو،
              بدون فلسفة.
            </p>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container-x">
            {posts.length === 0 ? (
              <p className="text-center text-ink-500">لا توجد مقالات بعد.</p>
            ) : (
              <div className="grid gap-8 lg:grid-cols-3">
                {posts.map((post, i) => (
                  <Reveal key={post.slug} delay={i * 100}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-ink-900/10 bg-white p-8 transition hover:-translate-y-1 hover:border-brand hover:shadow-xl"
                    >
                      <span
                        className={`inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                          categoryColors[post.category] ?? categoryColors["عام"]
                        }`}
                      >
                        {post.category}
                      </span>
                      <h2 className="mt-5 text-xl font-bold leading-tight text-ink-900 group-hover:text-brand">
                        {post.title}
                      </h2>
                      <p className="mt-3 flex-1 text-ink-500">
                        {post.description}
                      </p>
                      <div className="mt-6 flex items-center justify-between text-sm text-ink-500">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("ar-SA", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        <span>{post.readMins} دقيقة قراءة</span>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
