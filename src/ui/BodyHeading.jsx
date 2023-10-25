function BodyHeading({ children, type = "large", className }) {
  let styles = `dark:text-zinc-200 text-zinc-900 ${className}`;
  if (type === "large")
    styles = `${styles} lg:text-4xl md:text-2xl text-xl font-bold`;
  if (type === "largest")
    styles = `${styles} text-3xl md:text-5xl font-bold md:leading-[4.5rem] text-center md:text-left`;
  if (type === "medium")
    styles = `${styles} lg:text-3xl md:text-2xl text-xl font-semibold`;
  if (type === "medium-2") styles = `${styles} md:text-xl text-md font-medium`;
  if (type === "small") styles = `${styles} md:text-lg text-md font-medium`;
  if (type === "smallest") styles = `${styles} md:text-md text-sm font-medium`;
  if (type === "smallest-2") styles = `${styles} text-sm  font-semibold`;
  if (type === "smallest-3")
    styles = `${styles} md:text-md text-sm font-semibold`;
  return <header className={styles}>{children}</header>;
}

export default BodyHeading;
