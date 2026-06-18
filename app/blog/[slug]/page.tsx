import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPost } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="bg-white">
        <article className="container-x py-16">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="text-sm text-ink-500 hover:text-brand"
            >
              ← العودة للمدونة
            </Link>

            <div className="mt-6 flex items-center gap-3 text-sm text-ink-500">
              <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-700">
                {post.category}
              </span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("ar-SA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>·</span>
              <span>{post.readMins} دقيقة قراءة</span>
            </div>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-ink-900 sm:text-5xl">
              {post.title}
            </h1>

            <p className="mt-6 text-lg text-ink-500">{post.description}</p>

            <div
              className="prose-blog mt-12"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            <div className="mt-16 rounded-3xl bg-gradient-to-br from-brand-50 to-white p-10 text-center">
              <h2 className="text-2xl font-bold">جرّب Speeda مجاناً</h2>
              <p className="mt-3 text-ink-500">
                14 يوم تجربة كاملة. بدون كرت ائتمان. بدون التزام.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link href="/demo" className="btn-primary">
                  ابدأ الآن
                </Link>
                <Link href="/pricing" className="btn-secondary">
                  شف الأسعار
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
