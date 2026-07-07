import markUrl from "../../assets/axora-mark.png";

/** The brand "A" mark (bundled asset). */
export function LogoMark({ size = 34, glow = false, className = "logo-mark" }) {
  return (
    <img
      src={markUrl}
      alt="Axora"
      width={size}
      height={size}
      className={className}
      style={{
        objectFit: "contain",
        filter: glow ? "drop-shadow(0 10px 30px rgba(79,157,255,.45))" : undefined,
      }}
    />
  );
}

/** Mark + wordmark, links to the top of the page. */
export default function Brand({ markSize = 32 }) {
  return (
    <a href="#top" className="logo" aria-label="Axora Technologies home">
      <LogoMark size={markSize} />
      <span className="logo-word">
        Axora<span className="t">Technologies</span>
      </span>
    </a>
  );
}
