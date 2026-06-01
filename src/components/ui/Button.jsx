import Icon from "./Icon";

/**
 * Pill button. Renders an <a> when `href` is given, otherwise a <button>.
 *   variant: "primary" | "ghost"
 *   size:    "md" | "sm"
 *   icon:    optional trailing Icon name (from the custom set)
 */
export default function Button({
  href,
  variant = "primary",
  size = "md",
  icon,
  iconSize = 17,
  className = "",
  children,
  ...rest
}) {
  const cls = ["btn", `btn-${variant}`, size === "sm" && "btn-sm", className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {children}
      {icon && <Icon name={icon} size={iconSize} />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {content}
    </button>
  );
}
