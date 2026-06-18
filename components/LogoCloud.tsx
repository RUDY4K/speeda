const logos = [
  { name: "Foodics", letter: "F" },
  { name: "Salla", letter: "س" },
  { name: "Zid", letter: "Z" },
  { name: "Mada", letter: "م" },
  { name: "STC Pay", letter: "S" },
  { name: "Mrsool", letter: "م" },
];

export default function LogoCloud() {
  return (
    <section className="border-y border-ink-900/5 bg-ink-100/40 py-14">
      <div className="container-x">
        <p className="text-center text-sm font-medium text-ink-500">
          متوافق مع الأنظمة اللي تستخدمها يومياً
        </p>
        <div className="mt-8 grid grid-cols-3 items-center gap-x-8 gap-y-8 lg:grid-cols-6">
          {logos.map((l) => (
            <div
              key={l.name}
              className="flex items-center justify-center gap-2 opacity-70 transition hover:opacity-100"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-900/5 text-base font-bold text-ink-700">
                {l.letter}
              </span>
              <span className="text-base font-semibold text-ink-700">
                {l.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
