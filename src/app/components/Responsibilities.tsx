import { LayoutGrid, Navigation, Palette, Smartphone, Workflow, Users } from "lucide-react";
import { Card } from "./ui/card";

const responsibilities = [
  {
    icon: Smartphone,
    title: "Design Mobile Screens",
    description: "Create comprehensive mobile UI designs for both iOS and Android platforms, ensuring platform-specific best practices are followed.",
  },
  {
    icon: LayoutGrid,
    title: "Convert Web to Mobile",
    description: "Transform existing web layouts into clean, usable mobile UX that maintains functionality while optimizing for smaller screens.",
  },
  {
    icon: Navigation,
    title: "Mobile Navigation Structure",
    description: "Design intuitive navigation systems including tabs, menus, and gestures that feel native to mobile users.",
  },
  {
    icon: Palette,
    title: "Design System & Components",
    description: "Develop and deliver a consistent design system including colors, typography, spacing, and reusable mobile components.",
  },
  {
    icon: Workflow,
    title: "Clickable Prototypes",
    description: "Create interactive prototypes in Figma for key user flows to demonstrate interactions and validate design decisions.",
  },
  {
    icon: Users,
    title: "Collaboration & Handoff",
    description: "Work closely with development team and provide comprehensive design specs and handoff-ready assets.",
  },
];

export function Responsibilities() {
  return (
    <section>
      <h2 className="text-4xl font-bold mb-6 text-slate-900">Key Responsibilities</h2>
      
      <p className="text-lg text-slate-700 mb-8 max-w-3xl">
        As our Mobile UX/UI Designer, you'll be responsible for the end-to-end design 
        process of transforming our web CRM into a mobile experience.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {responsibilities.map((item, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white border-slate-200">
            <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
              <item.icon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-slate-900">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed">{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
