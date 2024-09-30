import Logo from "./Logo";
import SideBarItems from "./SideBarItems";

export default function SideBar() {
  return (
    <div className="h-screen bg-[#FAFAFA] w-[15%] pt-[40px]">
      <Logo />
      <div className=" h-full pl-4">
        <SideBarItems title={"Home"} icon={"Home.png"} />
        <SideBarItems title={"Search"} icon={"Search.png"} />
        <SideBarItems title={"Members"} icon={"Members.png"} />
        <SideBarItems title={"Import/Export"} icon={"Import.png"} />
        <SideBarItems title={"Summary"} icon={"Home.png"} />
      </div>
    </div>
  );
}
