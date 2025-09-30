import { ReactNode } from "react";

interface DashboardCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function DashboardCard({ icon, title, description }: DashboardCardProps) {
  return (
    <div className="w-full h-auto md:h-[285px] bg-white border-2 border-schedsync-gray-4 rounded-[20px] md:rounded-[30px] p-4 md:p-6 flex flex-col md:flex-row">
      {/* Icon */}
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 flex justify-center md:justify-start">
        <div className="w-[60px] md:w-[120px] h-[60px] md:h-[120px] flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col text-center md:text-left md:pt-4">
        {/* Title */}
        <h3 className="text-black font-inter font-bold text-[24px] md:text-[36px] mb-3 md:mb-4 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-black font-inter text-[14px] md:text-[16px] leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
}
