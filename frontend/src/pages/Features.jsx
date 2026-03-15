import React from "react";
import {
  Wand2,
  Hash,
  MousePointerClick,
  Code,
  Copy,
  ShieldCheck,
} from "lucide-react";
import Footer from "../components/Footer";

const Features = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-20 pb-24 px-6">
        <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="text-center mb-20">
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              Powerful Features <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">
                Designed for Creators
              </span>
            </h1>
            <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto font-light">
              Everything you need to transform your photos into highly engaging
              social media posts with the power of modern Artificial
              Intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI Caption Generator",
                desc: "CapCraft analyzes your image and generates meaningful captions that match the content and mood of your photo.",
                icon: Wand2,
              },
              {
                title: "Automatic Hashtags",
                desc: "Get relevant and optimized hashtags instantly. All hashtags are generated in lowercase and ready to copy.",
                icon: Hash,
              },
              {
                title: "Drag & Drop Upload",
                desc: "Simply drag and drop your image into the upload area. CapCraft instantly begins processing your image.",
                icon: MousePointerClick,
              },
              {
                title: "Real-Time Animation",
                desc: "Watch your caption appear in real time with smooth typing animations powered by modern web technologies.",
                icon: Code,
              },
              {
                title: "One Click Copy",
                desc: "Copy your generated caption and hashtags instantly with a single click.",
                icon: Copy,
              },
              {
                title: "Secure & Private",
                desc: "Your images are processed instantly and are not permanently stored. CapCraft focuses on privacy.",
                icon: ShieldCheck,
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-[#111827] border border-[#1F2937] hover:bg-[#111827]/80 hover:border-[#6366F1]/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0B0F19] border border-[#1F2937] flex items-center justify-center mb-6">
                  <feature.icon size={28} className="text-[#6366F1]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-[#9CA3AF] font-light leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
