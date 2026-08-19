import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, text, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <p className="eyebrow eyebrow-dark"><span /> {eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-heading-text">{text}</p>}
    </div>
  );
}
