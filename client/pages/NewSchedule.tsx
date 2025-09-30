import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

export default function NewSchedule() {
  return (
    <div className="min-h-[736px] bg-white relative flex flex-col">
      <Header />
      <Sidebar />

      <main className="pt-4 pl-8 md:pl-32 pr-8 pb-8 flex-1">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-block mb-6 text-sm text-slate-600 underline">
            ← Back
          </Link>

          <h2 className="text-3xl font-bold mb-4">Create New Schedule</h2>
          <p className="text-base text-slate-700 mb-6">
            This is the New Schedule page. Build the scheduling form or workflow here.
          </p>

          <div className="bg-white border border-schedsync-gray-4 rounded-lg p-6">
            <p className="text-sm text-slate-600">Placeholder for form components. Ask me to implement the form or specific fields (date, time, faculty, recurrence, etc.) and I will add them.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
