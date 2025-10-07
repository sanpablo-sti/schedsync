import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function EditSchedule() {
  const sections = [
    { name: "Section 1", timeSlots: ["7:00", "8:00", "9:00", "10:00"] },
    { name: "Section 2", timeSlots: ["11:00", "12:00"] },
    { name: "Section 3", timeSlots: ["13:00", "14:00", "15:00"] },
    { name: "Section 4", timeSlots: ["16:00", "17:00", "18:00", "19:00"] }
  ];
  
  const days = ["MON", "TUE", "WED", "THUR", "FRI"];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="flex flex-1">
        {/* Sidebar with section circles */}
        <div className="w-[120px] flex-shrink-0 border-r-2 border-black relative">
          <div className="p-4">
            <Link to="/new-schedule" className="inline-flex items-center gap-2 mb-4 text-black hover:opacity-70 transition-opacity">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 36L18 24L30 12" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            <div className="space-y-4 mt-8">
              {sections.map((_, index) => (
                <button
                  key={index}
                  className="w-[50px] h-[50px] rounded-full border-2 border-black hover:bg-gray-100 transition-colors mx-auto block"
                  aria-label={`Section ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <button className="w-[45px] h-[45px] rounded-full border-2 border-black hover:bg-gray-100 transition-colors absolute bottom-8 left-[37px]">
            <span className="sr-only">Add section</span>
          </button>
        </div>

        {/* Main Schedule Grid */}
        <div className="flex-1 overflow-auto">
          <div className="p-4">
            <div className="inline-block min-w-full">
              {/* Header Row */}
              <div className="grid grid-cols-[180px_180px_repeat(5,180px)] bg-[#F2F2F7]">
                <div className="border-2 border-[#E5E5EA] p-3 font-bold text-lg">SECTION</div>
                <div className="border-2 border-[#E5E5EA] p-3 font-bold text-lg">TIME</div>
                {days.map((day) => (
                  <div key={day} className="border-2 border-[#E5E5EA] p-3 font-bold text-lg">
                    {day}
                  </div>
                ))}
              </div>

              {/* Schedule Grid Body */}
              {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="grid grid-cols-[180px_180px_repeat(5,180px)]">
                  {/* Section Column */}
                  <div 
                    className="border-2 border-[#E5E5EA] p-4 flex items-center justify-center font-bold"
                    style={{ gridRow: `span ${section.timeSlots.length}` }}
                  >
                    {section.name}
                  </div>

                  {/* Time and Day Cells */}
                  <div className="col-span-6 grid grid-cols-[180px_repeat(5,180px)]">
                    {section.timeSlots.map((time, timeIndex) => (
                      <div key={timeIndex} className="contents">
                        {/* Time Cell */}
                        <div className="border-2 border-[#E5E5EA] p-3">
                          {time}
                        </div>

                        {/* Day Cells */}
                        {days.map((day) => (
                          <div
                            key={`${section.name}-${time}-${day}`}
                            className="border-2 border-[#E5E5EA] p-3 min-h-[40px] hover:bg-gray-50 cursor-pointer transition-colors"
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
