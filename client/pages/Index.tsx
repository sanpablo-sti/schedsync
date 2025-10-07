import { Calendar, CalendarCheck, Users, Image, Map, MoreHorizontal } from "lucide-react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import { Link } from "react-router-dom";

export default function Index() {
  const dashboardItems = [
    {
      icon: <Calendar className="w-[60px] md:w-[120px] h-[60px] md:h-[120px] text-black stroke-[2]" />,
      title: "New Schedule",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: <CalendarCheck className="w-[60px] md:w-[120px] h-[60px] md:h-[120px] text-black stroke-[2] fill-black" />,
      title: "My Schedule",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: <Users className="w-[60px] md:w-[120px] h-[60px] md:h-[120px] text-black stroke-[2]" />,
      title: "Faculty",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: <Image className="w-[60px] md:w-[120px] h-[60px] md:h-[120px] text-black stroke-[2]" />,
      title: "Campus",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: <Map className="w-[60px] md:w-[120px] h-[60px] md:h-[120px] text-black stroke-[2]" />,
      title: "Map",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: <MoreHorizontal className="w-[60px] md:w-[120px] h-[60px] md:h-[120px] text-black stroke-[2]" />,
      title: "Others",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  return (
    <div className="min-h-[736px] bg-white relative flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="pt-4 pl-8 md:pl-32 pr-8 pb-8">
        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 max-w-[1300px] mx-auto">
          {dashboardItems.map((item, index) => {
            if (item.title === 'New Schedule') {
              return (
                <Link key={index} to="/new-schedule" className="block">
                  <DashboardCard
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                </Link>
              );
            } else if (item.title === 'My Schedule') {
              return (
                <Link key={index} to="/my-schedules" className="block">
                  <DashboardCard
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                </Link>
              );
            }
            return (
              <DashboardCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </main>
      
      {/* Help Button */}
      <button className="fixed bottom-4 md:bottom-8 right-4 md:right-8 w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-schedsync-blue border-2 border-black rounded-full flex items-center justify-center z-10">
        <span className="text-black font-inter font-bold text-2xl md:text-4xl">?</span>
      </button>
    </div>
  );
}
