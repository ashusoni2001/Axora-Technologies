import { motion, useReducedMotion } from "framer-motion";
import { revealVariants, viewportConfig, revealTransition } from "../../lib/animations";

/**
 * Scroll-reveal wrapper. Animates in once when it enters the viewport.
 *   variant: "up" | "left" | "right" | "scale"
 *   delay:   milliseconds (matches the data's stagger values)
 *   as:      element/tag to render (motion proxy)
 * Honours prefers-reduced-motion by rendering statically.
 */
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  as = "div",
  className = "",
  style,
  ...rest
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} style={style} {...rest}>
        {children}
      </Tag>
    );
  }

  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      variants={revealVariants[variant] || revealVariants.up}
      initial="hidden"
      whileInView="show"
      viewport={viewportConfig}
      transition={revealTransition(delay)}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
