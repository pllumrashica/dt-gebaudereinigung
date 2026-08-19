import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  className?: string;
  linked?: boolean;
  priority?: boolean;
};

export function BrandLogo({ className = "", linked = true, priority = false }: BrandLogoProps) {
  const image = (
    <Image
      className="brand-logo-image"
      src="/logo.svg"
      alt={linked ? "" : "DT-Gebäudereinigung"}
      width={1052}
      height={639}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      unoptimized
    />
  );

  if (!linked) {
    return <span className={`brand-logo ${className}`.trim()}>{image}</span>;
  }

  return (
    <Link className={`brand-logo ${className}`.trim()} href="/" aria-label="DT-Gebäudereinigung Startseite">
      {image}
    </Link>
  );
}
