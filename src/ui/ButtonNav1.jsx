function ButtonNav1({
  children,
  className,
  onClick,
  height = "h-full",
  width,
  textCol = "dark:text-zinc-300 text-zinc-800",
}) {
  const fullStyles = `flex items-center ${textCol} ${height} ${width} font-semibold tracking-tighter text-sm hover:text-yellow-500 ${className}`;
  return (
    <button onClick={onClick} className={fullStyles}>
      {children}
    </button>
  );
}

export default ButtonNav1;
