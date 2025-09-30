import { Calendar, CalendarCheck, Users, Image, Map, MoreHorizontal } from "lucide-react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

export default function Index() {
  const dashboardItems = [
    {
      icon: <Calendar className="w-[200px] h-[200px] text-black stroke-[4]" />,
      title: "New Schedule",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: <CalendarCheck className="w-[200px] h-[200px] text-black stroke-[4] fill-black" />,
      title: "My Schedule", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: <Users className="w-[200px] h-[200px] text-black stroke-[4]" />,
      title: "Faculty",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: <Image className="w-[200px] h-[200px] text-black stroke-[4]" />,
      title: "Campus",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: <Map className="w-[200px] h-[200px] text-black stroke-[4]" />,
      title: "Map",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: <MoreHorizontal className="w-[200px] h-[200px] text-black stroke-[4]" />,
      title: "Others",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Header */}
      <Header />
      
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="pt-4 pl-32 pr-8 pb-8">
        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
          {dashboardItems.map((item, index) => (
            <DashboardCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </main>
      
      {/* Help Button */}
      <button className="fixed bottom-8 right-8 w-[60px] h-[60px] bg-schedsync-blue border-2 border-black rounded-full flex items-center justify-center z-10">
        <span className="text-black font-inter font-bold text-4xl">?</span>
      </button>
    </div>
  );
}
