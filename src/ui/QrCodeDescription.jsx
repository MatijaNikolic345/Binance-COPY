function QrCodeDescription({
  mb = "mb-2",
  textPosition = "text-center",
  type = "small",
}) {
  let styles = "";
  let stylesSpan = "block";
  if (type === "small")
    styles = `dark:text-zinc-300 text-zinc-700 block text-xs font-medium ${textPosition} ${mb}`;
  if (type === "large") {
    styles = `dark:text-zinc-600 text-zinc-400 block lg:text-lg text-md font-medium ${textPosition} ${mb}`;
    stylesSpan = `${stylesSpan}  dark:text-zinc-200 text-zinc-800`;
  }

  return (
    <p className={styles}>
      Scan to Download App <span className={stylesSpan}>IOS & Android</span>
    </p>
  );
}

export default QrCodeDescription;
