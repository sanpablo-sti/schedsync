import Header from "../components/Header";
import { MoreVertical } from "lucide-react";

interface ScheduleItemProps {
  name: string;
  updated: string;
  created: string;
  isPublished: boolean;
}

function ScheduleItem({
  name,
  updated,
  created,
  isPublished,
}: ScheduleItemProps) {
  return (
    <div className="w-full h-[80px] rounded-[30px] border-2 border-black flex items-center px-4 gap-4 mb-4">
      {/* Avatar Circle */}
      <div className="w-[60px] h-[60px] rounded-[30px] border-2 border-black flex-shrink-0" />

      {/* Schedule Info */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold">{name}</h3>
        <div className="text-xs">
          <div>Updated: {updated}</div>
          <div>Created: {created}</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <button className="px-6 py-2 rounded-lg border-2 border-black font-bold text-xl hover:bg-gray-100 transition-colors">
          {isPublished ? "UNPUBLISH" : "PUBLISH"}
        </button>

        <button className="px-6 py-2 rounded-lg border-2 border-black font-bold text-xl hover:bg-gray-100 transition-colors">
          EDIT
        </button>

        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <MoreVertical className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}

export default function MySchedules() {
  const publishedSchedules = [
    {
      name: "Schedule Name",
      updated: "(date)",
      created: "(date)",
      isPublished: true,
    },
  ];

  const draftSchedules = [
    {
      name: "Schedule Name",
      updated: "(date)",
      created: "(date)",
      isPublished: false,
    },
    {
      name: "Schedule Name",
      updated: "(date)",
      created: "(date)",
      isPublished: false,
    },
    {
      name: "Schedule Name",
      updated: "(date)",
      created: "(date)",
      isPublished: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-8 px-8 md:px-12 pb-8">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-8">My Schedules</h1>

        <div className="border-b-2 border-[#D3D3D3] mb-8" />

        {/* Published Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Publish (No.)</h2>
          <div className="space-y-4">
            {publishedSchedules.map((schedule, index) => (
              <ScheduleItem key={index} {...schedule} />
            ))}
          </div>
        </section>

        {/* Draft Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Draft (No.)</h2>
          <div className="space-y-4">
            {draftSchedules.map((schedule, index) => (
              <ScheduleItem key={index} {...schedule} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
