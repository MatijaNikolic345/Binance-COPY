function DownloadStore({ text, icon, name, textStyle = "text-[0.6rem]" }) {
  const style = `md:hidden dark:text-zinc-200 text-zinc-800  font-semibold rounded-md w-[9.5rem] self-center flex gap-2 dark:bg-zinc-700 bg-zinc-300 p-1 ${textStyle}`;
  return (
    <div className={style}>
      {icon}
      <div className="flex flex-col ">
        <div>{text}</div>
        <div className="text-sm">{name}</div>
      </div>
    </div>
  );
}

export default DownloadStore;
