# Speeda — Marketing Site

موقع Speeda التسويقي. Next.js 15 + Tailwind + TypeScript + RTL عربي.

## التشغيل محلياً

```bash
npm install
npm run dev
```

افتح http://localhost:3000

## النشر على Vercel

1. `git init && git add . && git commit -m "init"`
2. ارفع على GitHub
3. اربط الـ repo بـ [vercel.com/new](https://vercel.com/new)
4. Vercel ينشر تلقائياً — يطلع على `speeda.vercel.app`

## البنية

```
app/
  layout.tsx        — RTL + خط عربي + metadata
  page.tsx          — الرئيسية
  pricing/          — الأسعار
  use-cases/        — الاستخدامات
  integrations/     — الربط
  about/            — عن سبيدا
  demo/             — حجز ديمو
  sitemap.ts        — sitemap تلقائي
  robots.ts         — robots.txt تلقائي
components/         — Navbar, Footer, Hero, Section
lib/seo.ts          — SEO helpers
```

## التعديل

- **النصوص:** كل صفحة تعدلها مباشرة في `app/<page>/page.tsx`
- **الألوان:** `tailwind.config.ts` → `colors.brand`
- **الخط:** `app/layout.tsx` → الحالي IBM Plex Sans Arabic
