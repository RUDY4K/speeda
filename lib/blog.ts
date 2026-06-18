import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readMins: number;
  category: string;
  cover?: string;
};

export type Post = PostMeta & {
  html: string;
};

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPostsMeta(): PostMeta[] {
  return getAllPostSlugs()
    .map((slug) => readPost(slug))
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ html: _html, ...meta }) => meta);
}

export function getPost(slug: string): Post | null {
  return readPost(slug);
}

function readPost(slug: string): Post | null {
  const file = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;

  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const html = marked.parse(content, { async: false }) as string;
  const words = content.split(/\s+/).filter(Boolean).length;
  const readMins = Math.max(1, Math.round(words / 200));

  return {
    slug,
    title: String(data.title ?? "Untitled"),
    description: String(data.description ?? ""),
    date: String(data.date ?? new Date().toISOString().slice(0, 10)),
    readMins,
    category: String(data.category ?? "عام"),
    cover: data.cover ? String(data.cover) : undefined,
    html,
  };
}
