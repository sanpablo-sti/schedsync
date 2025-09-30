import { Home } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden md:fixed left-[25px] top-[351px] w-[60px] h-[400px] bg-schedsync-gray-5 border-2 border-black rounded-[30px] md:flex flex-col items-center py-6 z-10">
      {/* Home Icon - Active */}
      <div className="relative mb-6">
        <div className="w-[50px] h-[50px] bg-schedsync-blue rounded-full flex items-center justify-center">
          <Home className="w-[30px] h-[30px] text-black stroke-[4]" />
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col gap-6">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="w-[30px] h-[30px] border-2 border-schedsync-gray-2 rounded-full"></div>
        ))}
      </div>
    </aside>
  );
}
