function OpSystemButton({ icon, children }) {
  return (
    <button className="flex flex-col lg:w-[6.3rem] lg:h-[5.3rem] w-[5.3rem] h-[4.3rem]  rounded-md gap-2 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 dark:text-zinc-200 text-zinc-800 items-center">
      {icon}
      {children}
    </button>
  );
}

export default OpSystemButton;
