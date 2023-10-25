function TextInput({ placeholder, icon, size = "small" }) {
  let style = `transition duration-300 hover:ring-1  font-semibold hover:ring-yellow-300 dark:bg-zinc-900 bg-zinc-50 dark:placeholder:text-zinc-600 placeholder:text-zinc-400  w-full h-7 dark:text-zinc-200 text-zinc-800 focus:outline-yellow-300 focus:outline-0 focus:ring-1 focus:ring-yellow-300 placeholder:tracking-tighter  border-[0.8px] dark:border-zinc-600 border-zinc-300 `;
  if (size === "small")
    style = `${style} pl-3 py-3.5 placeholder:text-[0.8rem] placeholder:font-semibold text-xs`;
  if (size === "medium" && icon)
    style = `${style}pl-10 p-6 pr-10 rounded-sm placeholder:text-[0.8rem] placeholder:font-semibold text-sm`;
  if (size === "medium-2" && !icon)
    style = `${style}pl-3 p-4 rounded-sm placeholder:text-md placeholder:font-semibold `;
  if (size === "medium" && !icon)
    style = `${style}pl-4 p-6 pr-10 rounded-md placeholder:text-[1rem] font-light text-sm`;
  if (icon)
    return (
      <div className="group relative w-full">
        <span className=" absolute dark:text-zinc-600 text-zinc-300 top-4 left-4">
          {icon}
        </span>
        <input type="text" className={style} placeholder={placeholder}></input>
      </div>
    );
  return (
    <div className="group relative w-full">
      <input type="text" className={style} placeholder={placeholder}></input>
    </div>
  );
}

export default TextInput;
