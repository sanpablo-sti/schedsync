import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function EditSchedule() {
  const sections = ["Section 1", "Section 2", "Section 3", "Section 4", "Section 5", "Section 6"];
  const days = ["MON", "TUE", "WED", "THUR", "FRI"];
  
  // Time slots from 7:00 to 19:00
  const timeSlots = [
    "7:00", "8:00", "9:00", "10:00", "11:00", "12:00",
    "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="flex">
        {/* Sidebar with section circles */}
        <div className="w-[120px] flex-shrink-0 border-r-2 border-black p-4">
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

          <button className="w-[45px] h-[45px] rounded-full border-2 border-black hover:bg-gray-100 transition-colors mx-auto block mt-auto absolute bottom-8 left-7">
            <span className="sr-only">Add section</span>
          </button>
        </div>

        {/* Main Schedule Grid */}
        <div className="flex-1 overflow-x-auto">
          <div className="min-w-[1200px] p-4">
            {/* Grid Container */}
            <div className="inline-block min-w-full">
              {/* Header Row */}
              <div className="grid grid-cols-[180px_180px_repeat(5,180px)] bg-[#F2F2F7]">
                <div className="border-2 border-[#E5E5EA] p-3 font-bold text-lg flex items-center">SECTION</div>
                <div className="border-2 border-[#E5E5EA] p-3 font-bold text-lg flex items-center">TIME</div>
                {days.map((day) => (
                  <div key={day} className="border-2 border-[#E5E5EA] p-3 font-bold text-lg flex items-center">
                    {day}
                  </div>
                ))}
              </div>

              {/* Schedule Grid Body */}
              {sections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  {timeSlots.map((time, timeIndex) => (
                    <div key={timeIndex} className="grid grid-cols-[180px_180px_repeat(5,180px)]">
                      {/* Section Cell - spans multiple rows visually */}
                      {timeIndex === 0 && (
                        <div className="border-2 border-[#E5E5EA] p-3 row-span-1 flex items-center" style={{ gridRow: `span ${timeSlots.length}` }}>
                          {section}
                        </div>
                      )}
                      {timeIndex !== 0 && <div className="hidden" />}
                      
                      {/* Time Cell */}
                      <div className="border-2 border-[#E5E5EA] p-3 flex items-center">
                        {time}
                      </div>

                      {/* Day Cells */}
                      {days.map((day) => (
                        <div
                          key={`${section}-${time}-${day}`}
                          className="border-2 border-[#E5E5EA] p-3 hover:bg-gray-50 cursor-pointer transition-colors"
                        >
                          {/* Empty cell for scheduling */}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
