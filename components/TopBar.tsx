import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
export default function TopBar() {

    return (
      <div className="h-20 w-full flex items-center justify-between px-20 border-b-[1px] ">
        <div>
          
        </div>
        <div className="flex gap-10">
          <img src="Bell.png" alt="" />
          <div className="flex gap-3 items-center">
            <img src="pp.png" alt="" />
            <h1>Samir S.</h1>
            <DropdownMenu>
              <DropdownMenuTrigger><img src="DropDown.png" alt="" /></DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
          </div>
        </div>
      </div>
    )}