import { Mail, Send, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function ApplicationCTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Shape the Future of Automotive CRM?
        </h2>
        
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          We're excited to see how you'd transform our web platform into an 
          exceptional mobile experience. Let's create something amazing together.
        </p>

        <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <h3 className="text-2xl font-semibold mb-4">How to Apply</h3>
          <div className="text-left max-w-2xl mx-auto space-y-4 text-blue-50">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📱</span>
              <div>
                <p className="font-semibold text-white">Project Goal</p>
                <p>Build a high-quality mobile CRM experience focused on usability and growth.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💬</span>
              <div>
                <p className="font-semibold text-white">Tell Us About Your Vision</p>
                <p>Share your product goals, target users, and the key problems you want to solve.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">⏱️</span>
              <div>
                <p className="font-semibold text-white">Timeline & Availability</p>
                <p>Let us know your preferred timeline, milestones, and expected start date.</p>
              </div>
            </div>
          </div>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg"
          >
            <Mail className="w-5 h-5 mr-2" />
            Submit Application
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Ask Questions
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-blue-100 mb-4">
            <strong className="text-white">What Happens Next?</strong>
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">1</div>
              <span>Review applications</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">2</div>
              <span>Portfolio discussion call</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">3</div>
              <span>Design challenge (paid)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">4</div>
              <span>Project kickoff!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
