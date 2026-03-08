import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";

export function JobOverview() {
  return (
    <section>
      <h2 className="text-4xl font-bold mb-6 text-slate-900">About the Project</h2>
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <p className="text-lg text-slate-700 leading-relaxed">
            We've successfully built a comprehensive web-based CRM system specifically 
            designed for automotive restyling businesses. Our platform helps shops manage 
            customers, appointments, projects, invoices, and their sales pipeline.
          </p>
          
          <p className="text-lg text-slate-700 leading-relaxed">
            Now, we need a talented mobile designer to extend this experience to mobile 
            platforms. You'll work from our existing web design and flows to create a 
            native mobile experience that feels intuitive and professional on both iOS 
            and Android devices.
          </p>

          <Card className="p-6 bg-blue-50 border-blue-200">
            <h3 className="font-semibold text-lg mb-3 text-slate-900">What Makes This Unique</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Industry-specific CRM with specialized workflows</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Existing web design system to build upon</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Real-world business needs driving design decisions</span>
              </li>
            </ul>
          </Card>
        </div>

        <div className="space-y-4">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1771340012319-0b4fca008b54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwY2FyJTIwd29ya3Nob3AlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyOTg4NTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Automotive workshop"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
          />
          
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBVWCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzI5ODg1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Mobile app design"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
