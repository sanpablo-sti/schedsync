import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NewSchedule() {
  const command = `npx "@builder.io/dev-tools@latest" code  --url vcp://quickcopy/vcp-470dd34acc314a2097776880bd524c94 --spaceId afc4f2c9e97d4cd68f06669c3d94c581`;
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("Copy failed", e);
    }
  };

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

          <div className="bg-white/40 backdrop-blur-sm border border-white/20 rounded-lg p-6 mb-6">
            <p className="text-sm text-slate-600 mb-4">To import the Builder content for this page, run the following command in your terminal on your machine (not in the browser):</p>

            <div className="flex items-start gap-4">
              <pre className="flex-1 overflow-x-auto bg-black/80 text-white text-sm p-4 rounded-md">{command}</pre>
              <div className="flex flex-col gap-2">
                <button
                  onClick={copy}
                  className="px-3 py-2 bg-white text-sm rounded-md border hover:bg-slate-100"
                >
                  Copy
                </button>
                <a
                  href="https://www.builder.io/c/docs/projects-local-repo"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 text-sm rounded-md border bg-white hover:bg-slate-100 text-center"
                >
                  Docs
                </a>
              </div>
            </div>

            {copied && <div className="mt-3 text-sm text-green-600">Command copied to clipboard</div>}

            <p className="mt-4 text-xs text-slate-500">Note: This command requires you to have Node.js and npm installed locally. It will run a Builder CLI that imports or syncs content into your project space. I cannot run it from here; copy and run it in your terminal.</p>
          </div>

          <div className="bg-white border border-schedsync-gray-4 rounded-lg p-6">
            <p className="text-sm text-slate-600">Placeholder for form components. Ask me to implement the form or specific fields (date, time, faculty, recurrence, etc.) and I will add them.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
