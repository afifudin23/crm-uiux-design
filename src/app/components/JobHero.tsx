import { Smartphone, Palette, Code } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function JobHero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex gap-2">
            <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
              <Smartphone className="w-6 h-6" />
            </div>
            <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
              <Palette className="w-6 h-6" />
            </div>
            <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
              <Code className="w-6 h-6" />
            </div>
          </div>
        </div>
        
        <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
          <span className="text-sm font-medium">Remote • Contract/Full-time</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Mobile UX/UI Designer
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl">
          For Automotive Restyling CRM System
        </p>
        
        <p className="text-lg text-blue-50 mb-8 max-w-3xl">
          Transform our web-based CRM into a beautiful, intuitive mobile experience
          for iOS and Android platforms.
        </p>

        <div className="flex flex-wrap gap-4">
          <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <div className="text-sm text-blue-100">Industry</div>
            <div className="font-semibold">Automotive Restyling</div>
          </div>
          <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <div className="text-sm text-blue-100">Platforms</div>
            <div className="font-semibold">iOS + Android</div>
          </div>
          <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <div className="text-sm text-blue-100">Tools</div>
            <div className="font-semibold">Figma</div>
          </div>
        </div>
      </div>
    </div>
  );
}
