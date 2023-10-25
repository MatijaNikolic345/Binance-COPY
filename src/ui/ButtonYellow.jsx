function ButtonYellow({ children, className, type = "small", ml }) {
  let fullStyles = "rounded-md  text-zinc-900 bg-yellow-300  flex items-center";
  if (type === "small") {
    fullStyles = `${fullStyles} p-2 gap-1 text-sm group-hover:bg-yellow-500 font-semibold ${className} ${ml}`;
  }
  if (type === "medium") {
    fullStyles = `${fullStyles} py-3 md:py-4 md:px-10 px-4 font-semibold md:text-md text-sm hover:bg-yellow-500 ${className} ${ml}`;
  }
  if (type === "medium-2") {
    fullStyles = `${fullStyles} py-2 px-7 font-semibold md:text-md text-sm  hover:bg-yellow-500 ${className} ${ml}`;
  }
  if (type === "QrCode") {
    fullStyles = `${fullStyles} p-2 text-[0.7rem] hover:bg-yellow-500 font-semibold ${className}`;
  }
  return (
    <div className="h-full flex items-center group cursor-pointer">
      <button className={fullStyles}>{children}</button>
    </div>
  );
}

export default ButtonYellow;
