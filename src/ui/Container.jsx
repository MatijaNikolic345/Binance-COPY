function Container({ children, className }) {
  let style = `flex h-full w-full lg:max-w-screen-xl md:pt-20 pt-10 pb-5 ${className} px-3 lg:px-8 md:justify-normal justify-center`;
  return <div className={style}>{children}</div>;
}

export default Container;
