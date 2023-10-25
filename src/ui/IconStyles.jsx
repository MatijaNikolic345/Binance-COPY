function IconStyles({ children, size = "medium", shape = "none" }) {
  let styles = `flex items-center justify-center1`;
  if (size === "medium") styles = `${styles} w-9 h-9 p-2`;
  if (shape === "circle")
    styles = `${styles} rounded-full dark:bg-zinc-700 bg-zinc-200`;
  if (size === "large") styles = `${styles} lg:w-12 lg:h-12 w-10 h-10 p-2`;

  if (shape === "square")
    styles = `${styles} border dark:border-zinc-600 border-zinc-300 bg-inherit rounded-lg cursor-pointer`;
  if (shape === "square-hover")
    styles = `${styles} border dark:border-zinc-600 border-zinc-300 hover:border-yellow-500 bg-inherit rounded-lg cursor-pointer`;
  return <div className={styles}>{children}</div>;
}

export default IconStyles;
