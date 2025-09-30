import { ReactNode } from "react";

interface DashboardCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function DashboardCard({ icon, title, description }: DashboardCardProps) {
  return (
    <div className="w-full h-[285px] bg-white border-2 border-schedsync-gray-4 rounded-[30px] p-8 flex flex-col">
      {/* Icon */}
      <div className="mb-6">
        {icon}
      </div>
      
      {/* Title */}
      <h3 className="text-black font-inter font-bold text-4xl mb-4 leading-none">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-black font-inter text-base leading-normal flex-1">
        {description}
      </p>
    </div>
  );
}
