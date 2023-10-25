function Heading({ children, className, text = "text-xs" }) {
  const style = `text-zinc-500  ${text} w-full font-semibold ${className}`;
  return <h3 className={style}>{children}</h3>;
}

export default Heading;
