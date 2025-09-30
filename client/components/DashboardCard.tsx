import { ReactNode } from "react";

interface DashboardCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function DashboardCard({ icon, title, description }: DashboardCardProps) {
  return (
    <div className="w-full h-[285px] bg-white border-2 border-schedsync-gray-4 rounded-[30px] p-6 flex">
      {/* Icon */}
      <div className="flex-shrink-0 mr-6">
        <div className="w-[120px] h-[120px] flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col pt-4">
        {/* Title */}
        <h3 className="text-black font-inter font-bold text-[36px] mb-4 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-black font-inter text-[16px] leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
}
