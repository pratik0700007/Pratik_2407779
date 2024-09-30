export default function ({ title, icon }: { title: string; icon: string }) {
  return (
    <div className="flex gap-2 items-center hover:bg-[#E3F2DA] duration-500 px-3 py-2 rounded-md cursor-pointer">
      <img className="h-[18px] w-[18px]" src={icon} alt="" />
      <h1 className="text-[16px] text-[#737373]">{title}</h1>
    </div>
  );
}
