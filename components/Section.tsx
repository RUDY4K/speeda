import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  bg?: "white" | "ink" | "brand";
};

export default function Section({
  eyebrow,
  title,
  description,
  children,
  bg = "white",
}: Props) {
  const bgClass =
    bg === "ink"
      ? "bg-ink-100"
      : bg === "brand"
      ? "bg-brand text-white"
      : "bg-white";
  return (
    <section className={`section ${bgClass}`}>
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">
              {eyebrow}
            </span>
          )}
          <h2 className={`h2 mt-3 ${bg === "brand" ? "text-white" : ""}`}>
            {title}
          </h2>
          {description && (
            <p
              className={`lead mt-5 ${
                bg === "brand" ? "text-white/90" : ""
              }`}
            >
              {description}
            </p>
          )}
        </div>
        {children && <div className="mt-14">{children}</div>}
      </div>
    </section>
  );
}
