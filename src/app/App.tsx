import { JobHero } from "./components/JobHero";
import { JobOverview } from "./components/JobOverview";
import { Responsibilities } from "./components/Responsibilities";
import { Deliverables } from "./components/Deliverables";
import { Requirements } from "./components/Requirements";
import { ApplicationCTA } from "./components/ApplicationCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <JobHero />
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        <JobOverview />
        <Responsibilities />
        <Deliverables />
        <Requirements />
      </div>
      <ApplicationCTA />
    </div>
  );
}
