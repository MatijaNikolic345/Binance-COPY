import { FaHeadset } from "react-icons/fa";
function Support() {
  return (
    <div className="p-3 bg-yellow-300 group fixed bottom-5 right-5 rounded-full flex gap-2 items-center cursor-pointer z-50">
      <FaHeadset className="bg-inherit w-7 h-7" />
      <div className="hidden group-hover:block text-md text-zinc-900 font-semibold">
        Support
      </div>
    </div>
  );
}

export default Support;
