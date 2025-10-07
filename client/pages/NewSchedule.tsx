import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Trash2, Plus } from "lucide-react";

export default function NewSchedule() {
  const [scheduleName, setScheduleName] = useState("");
  const [timeDuration, setTimeDuration] = useState("");
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [sections, setSections] = useState<string[]>(["Section 1", "Section 2"]);

  const weekDays = [
    ["Monday", "Tuesday", "Wednesday"],
    ["Thursday", "Friday", "Saturday", "Sunday"]
  ];

  const toggleDay = (day: string) => {
    setSelectedDays(prev => 
      prev.includes(day) 
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  };

  const addSection = () => {
    const newSectionNum = sections.length + 1;
    setSections([...sections, `Section ${newSectionNum}`]);
  };

  const deleteSection = (index: number) => {
    setSections(sections.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-white relative flex flex-col">
      <Header />
      <Sidebar />

      <main className="pt-8 pl-8 md:pl-32 pr-8 pb-8 flex-1">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 mb-8 text-black hover:opacity-70 transition-opacity">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 36L18 24L30 12" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <h1 className="text-4xl font-bold text-center mb-12">New Schedule</h1>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xl font-bold mb-3">Schedule Name</label>
                  <input
                    type="text"
                    value={scheduleName}
                    onChange={(e) => setScheduleName(e.target.value)}
                    placeholder="Name"
                    className="w-full px-4 py-4 rounded-lg border-2 border-black text-xl placeholder:text-[#8E8E93]"
                  />
                </div>

                <div>
                  <label className="block text-xl font-bold mb-3">Time Duration</label>
                  <input
                    type="text"
                    value={timeDuration}
                    onChange={(e) => setTimeDuration(e.target.value)}
                    placeholder="7:00 - 19:00"
                    className="w-full px-4 py-4 rounded-lg border-2 border-black text-xl placeholder:text-[#8E8E93]"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Schedule Days Configuration</h2>
                
                <div className="space-y-4">
                  {weekDays.map((row, rowIndex) => (
                    <div 
                      key={rowIndex}
                      className="flex gap-0 rounded-lg border-2 border-black overflow-hidden"
                    >
                      {row.map((day, dayIndex) => (
                        <button
                          key={day}
                          onClick={() => toggleDay(day)}
                          className={`flex-1 py-6 text-xl font-bold border-black transition-colors ${
                            dayIndex !== 0 ? 'border-l-2' : ''
                          } ${
                            selectedDays.includes(day) 
                              ? 'bg-black text-white' 
                              : 'bg-white text-black hover:bg-gray-100'
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-bold">School Days:</h3>
                  <p className="text-[#8E8E93]">
                    {selectedDays.length > 0 ? selectedDays.join(", ") : "(Days Selected)"}
                  </p>
                </div>
              </div>

              <div className="flex justify-center pt-8">
                <button className="px-20 py-4 bg-[#D9D9D9] border border-black font-['Comic_Neue'] text-xl hover:bg-gray-300 transition-colors">
                  EDIT
                </button>
              </div>
            </div>

            <div className="lg:border-l-2 lg:border-[#D3D3D3] lg:pl-8">
              <div className="min-w-[300px] lg:min-w-[580px]">
                <h2 className="text-xl font-bold mb-4">Sections</h2>
                
                <div className="space-y-4">
                  {sections.map((section, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between px-6 py-5 rounded-lg border-2 border-black"
                    >
                      <span className="text-xl font-bold">{section}</span>
                      <button
                        onClick={() => deleteSection(index)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-6 h-6" />
                      </button>
                    </div>
                  ))}

                  <button
                    onClick={addSection}
                    className="w-full flex items-center gap-4 px-6 py-5 rounded-lg border-2 border-[#8E8E93] text-[#8E8E93] hover:bg-gray-50 transition-colors"
                  >
                    <Plus className="w-6 h-6" strokeWidth={3} />
                    <span className="text-xl">Add Selection</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
