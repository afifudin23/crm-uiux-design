import { FileText, Link2, Package } from "lucide-react";
import { Card } from "./ui/card";

const deliverables = [
  {
    icon: Package,
    title: "Complete Figma File",
    items: [
      "All mobile screens organized by user flows",
      "Component library with all reusable elements",
      "Design tokens (colors, typography, spacing)",
      "iOS and Android specific variants where needed",
    ],
  },
  {
    icon: Link2,
    title: "Interactive Prototypes",
    items: [
      "Clickable prototype links for main user flows",
      "Key interactions and animations demonstrated",
      "User journey walkthroughs",
      "Edge cases and error states",
    ],
  },
  {
    icon: FileText,
    title: "Design Specifications",
    items: [
      "Handoff-ready assets and exports",
      "Design documentation and guidelines",
      "Spacing, typography, and color usage specs",
      "Developer-friendly annotations",
    ],
  },
];

export function Deliverables() {
  return (
    <section>
      <h2 className="text-4xl font-bold mb-6 text-slate-900">Deliverables</h2>
      
      <p className="text-lg text-slate-700 mb-8 max-w-3xl">
        You'll provide comprehensive design files and documentation to ensure a smooth 
        handoff to our development team.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {deliverables.map((item, index) => (
          <Card key={index} className="p-6 bg-gradient-to-br from-white to-slate-50 border-slate-200">
            <div className="p-3 bg-indigo-100 rounded-lg w-fit mb-4">
              <item.icon className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="font-semibold text-xl mb-4 text-slate-900">{item.title}</h3>
            <ul className="space-y-2">
              {item.items.map((listItem, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-600">
                  <span className="text-indigo-600 mt-1 text-sm">▸</span>
                  <span>{listItem}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <Card className="mt-8 p-6 bg-amber-50 border-amber-200">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-amber-100 rounded-lg">
            <Package className="w-5 h-5 text-amber-700" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-slate-900">
              Comprehensive Documentation
            </h3>
            <p className="text-slate-700">
              All deliverables should be well-organized, clearly labeled, and include 
              sufficient documentation for developers to implement without constant back-and-forth. 
              Think of this as a complete design package ready for production.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
}
