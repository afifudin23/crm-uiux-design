import { CheckCircle2, Star } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

const mustHave = [
  "Strong mobile UX design experience with proven portfolio",
  "Expert-level Figma skills (components, variants, auto-layout, prototyping)",
  "Deep understanding of iOS and Android design guidelines",
  "Experience designing responsive components and adaptive layouts",
  "Ability to translate complex web interfaces to mobile-first experiences",
  "Excellent visual design skills (typography, color, spacing, hierarchy)",
  "Great communication skills and ability to explain design decisions",
  "Self-directed with ability to work independently",
];

const niceToHave = [
  "Experience designing CRM or SaaS products",
  "Background in automotive or service industry applications",
  "Understanding of Flutter or React Native constraints and possibilities",
  "Experience designing complex features like dashboards and data visualization",
  "Knowledge of calendar/scheduling interfaces",
  "Experience with appointment booking systems",
  "Invoice and document design experience",
  "Sales pipeline and Kanban board design",
  "Familiarity with design systems and component libraries",
  "Motion design and micro-interaction skills",
];

export function Requirements() {
  return (
    <section>
      <h2 className="text-4xl font-bold mb-6 text-slate-900">What We're Looking For</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Must Have */}
        <Card className="p-8 bg-white border-2 border-blue-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Must Have</h3>
          </div>

          <ul className="space-y-3">
            {mustHave.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">●</span>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Nice to Have */}
        <Card className="p-8 bg-white border-2 border-indigo-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Star className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Nice to Have</h3>
          </div>

          <ul className="space-y-3">
            {niceToHave.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-indigo-600 mt-1">◆</span>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-600 italic">
              These extras aren't required but would definitely give you an edge!
            </p>
          </div>
        </Card>
      </div>

      {/* Key Features Section */}
      <Card className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-slate-200">
        <h3 className="font-semibold text-xl mb-4 text-slate-900">
          Mobile App Will Include These Key Features
        </h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="px-3 py-1 bg-white text-slate-700">Customer Management</Badge>
          <Badge variant="secondary" className="px-3 py-1 bg-white text-slate-700">Appointment Calendar</Badge>
          <Badge variant="secondary" className="px-3 py-1 bg-white text-slate-700">Project Tracking</Badge>
          <Badge variant="secondary" className="px-3 py-1 bg-white text-slate-700">Invoice Generation</Badge>
          <Badge variant="secondary" className="px-3 py-1 bg-white text-slate-700">Sales Pipeline</Badge>
          <Badge variant="secondary" className="px-3 py-1 bg-white text-slate-700">Dashboard & Analytics</Badge>
          <Badge variant="secondary" className="px-3 py-1 bg-white text-slate-700">Photo Gallery</Badge>
          <Badge variant="secondary" className="px-3 py-1 bg-white text-slate-700">Notes & Communications</Badge>
          <Badge variant="secondary" className="px-3 py-1 bg-white text-slate-700">Search & Filters</Badge>
        </div>
      </Card>
    </section>
  );
}
