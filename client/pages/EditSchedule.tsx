import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function EditSchedule() {
  const sectionButtons = Array(6).fill(null);
  const days = ["MON", "TUE", "WED", "THUR", "FRI"];
  
  // Define sections with their respective time slots
  const scheduleData = [
    { section: "Section 1", slots: ["7:00", "8:00", "9:00", "10:00"] },
    { section: "Section 2", slots: ["11:00", "12:00"] },
    { section: "Section 3", slots: ["13:00", "14:00", "15:00"] },
    { section: "Section 4", slots: ["16:00", "17:00", "18:00", "19:00"] },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar with circular section buttons */}
        <aside className="flex-shrink-0 w-[120px] border-r-2 border-black flex flex-col items-center pt-8 pb-8 relative">
          <Link 
            to="/new-schedule" 
            className="mb-6 hover:opacity-70 transition-opacity"
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 36L18 24L30 12" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <div className="flex-1 flex flex-col items-center gap-4 overflow-y-auto">
            {sectionButtons.map((_, index) => (
              <button
                key={index}
                className="w-[50px] h-[50px] rounded-full border-2 border-black hover:bg-gray-100 transition-colors flex-shrink-0"
                aria-label={`Section ${index + 1}`}
              />
            ))}
          </div>

          <button 
            className="w-[45px] h-[45px] rounded-full border-2 border-black hover:bg-gray-100 transition-colors mt-4"
            aria-label="Add new section"
          />
        </aside>

        {/* Main schedule grid area */}
        <main className="flex-1 overflow-auto">
          <div className="min-w-max">
            {/* Header Row */}
            <div className="sticky top-0 z-10 grid grid-cols-[180px_180px_repeat(5,180px)] bg-[#F2F2F7]">
              <div className="border-2 border-[#E5E5EA] px-4 py-2 font-bold text-lg">SECTION</div>
              <div className="border-2 border-[#E5E5EA] px-4 py-2 font-bold text-lg">TIME</div>
              {days.map((day) => (
                <div key={day} className="border-2 border-[#E5E5EA] px-4 py-2 font-bold text-lg">
                  {day}
                </div>
              ))}
            </div>

            {/* Schedule rows */}
            {scheduleData.map((sectionData, sectionIdx) => (
              <div key={sectionIdx} className="grid grid-cols-[180px_180px_repeat(5,180px)]">
                {/* Section cell (spans multiple rows) */}
                <div
                  className="border-2 border-[#E5E5EA] px-4 py-3 flex items-center justify-center font-medium"
                  style={{ gridRow: `span ${sectionData.slots.length}` }}
                >
                  {sectionData.section}
                </div>

                {/* Time slots and day cells */}
                <div className="col-span-6 grid grid-cols-[180px_repeat(5,180px)]">
                  {sectionData.slots.map((timeSlot, slotIdx) => (
                    <div key={slotIdx} className="contents">
                      <div className="border-2 border-[#E5E5EA] px-4 py-3">
                        {timeSlot}
                      </div>
                      {days.map((day) => (
                        <div
                          key={`${sectionIdx}-${slotIdx}-${day}`}
                          className="border-2 border-[#E5E5EA] px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors min-h-[40px]"
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
