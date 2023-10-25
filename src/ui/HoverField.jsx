function HoverField({
  children,
  position,
  isDouble = false,
  className,
  transition,
  transition2,
}) {
  let styles = `dark:bg-zinc-800 bg-zinc-100 shadow-lg hidden z-50  absolute group-hover:block ${className} ${transition2}`;
  if (transition)
    styles = `dark:bg-zinc-800 bg-zinc-100 shadow-lg invisible absolute group-hover:visible z-50 ${className} ${transition}`;
  if (position === "center-down" && !isDouble) {
    styles = `${styles} right-[-9rem]`;
  }
  if (position === "center-down" && isDouble) {
    styles = `${styles} right-[-28rem]`;
  }
  if (position === "center-down-right" && isDouble) {
    styles = `${styles} right-[-18.2rem]`;
  }
  if (position === "center-down-right" && !isDouble) {
    styles = `${styles} right-[0rem]`;
  }
  if (position === "right" && !isDouble) {
    styles = `${styles} left-[3.8rem] bottom-[0rem]`;
  }
  if (position === "right-2" && !isDouble) {
    styles = `${styles} left-[1.5rem] top-[-2.5rem]`;
  }
  if (position === "top" && !isDouble) {
    styles = `${styles} lg:bottom-[2rem] bottom-[3rem]`;
  }
  return <div className={styles}>{children}</div>;
}

export default HoverField;
