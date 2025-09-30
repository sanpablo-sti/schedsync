import { Search, Bell, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full h-[109px] bg-gradient-to-b from-schedsync-gray-5 to-transparent flex items-center justify-between px-6 relative">
      {/* Left Section - Logo and Search */}
      <div className="flex items-center gap-4">
        {/* Logo Container */}
        <div className="flex items-center bg-white border-2 border-[#D3D3D3] rounded-[30px] px-6 py-4 h-[70px]">
          <div className="w-[50px] h-[50px] border-2 border-black rounded-full flex items-center justify-center mr-4">
            <div className="w-6 h-6 bg-black rounded-full"></div>
          </div>
          <span className="text-black font-inter font-bold text-xl">SchedSync</span>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-[30px] h-[30px] text-black stroke-[4]" />
          <div className="w-[200px] h-[48px] bg-transparent border-none"></div>
        </div>
      </div>

      {/* Center - Greeting */}
      <div className="flex-1 flex justify-center">
        <h1 className="text-black font-inter font-bold text-4xl">Good Day, (name)!</h1>
      </div>

      {/* Right Section - Notifications and Profile */}
      <div className="flex items-center gap-6">
        {/* Notifications */}
        <div className="relative">
          <Bell className="w-[35px] h-[35px] text-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]" />
        </div>

        {/* Profile Section */}
        <div className="flex items-center bg-white border-2 border-[#D3D3D3] rounded-[30px] px-6 py-4 h-[70px]">
          <span className="text-black font-inter font-bold text-2xl mr-4">NAME</span>
          <div className="relative">
            <div className="w-[50px] h-[50px] border-2 border-black rounded-full bg-black flex items-center justify-center">
              <ChevronDown className="w-[25px] h-[25px] text-[#D0D0D0]" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
