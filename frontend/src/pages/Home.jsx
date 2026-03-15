import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  UploadCloud,
  Cpu,
  Hash,
  ArrowRight,
  Image as ImageIcon,
} from "lucide-react";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* --- Ambient Background Glow --- */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#6366F1] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111827] border border-[#1F2937] text-[#9CA3AF] text-sm font-medium mb-6 backdrop-blur-md">
              <Sparkles size={16} className="text-[#6366F1]" />
              <span>CapCraft AI 2.0 is now live</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Turn Your Images Into <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] animate-pulse">
                Perfect Captions
              </span>{" "}
              with AI
            </h1>
            <p className="text-lg lg:text-xl text-[#9CA3AF] mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              CapCraft uses advanced AI to generate engaging captions and viral
              hashtags from your images in seconds. Upload your photo and let AI
              craft the perfect words for social media.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                to="/user-dashboard"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-bold hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Generate Caption <ArrowRight size={20} />
              </Link>
              <Link
                to="/features"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#111827] border border-[#1F2937] text-[#F9FAFB] font-bold hover:border-[#6366F1] hover:bg-[#111827]/80 transition-all duration-300 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* 3D Visual Placeholder */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none z-10 group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
            <div className="relative aspect-square rounded-[40px] bg-[#111827]/80 border border-[#1F2937] backdrop-blur-xl p-8 flex flex-col items-center justify-center shadow-2xl overflow-hidden hover:border-[#6366F1]/50 transition-colors duration-500">
              <div className="w-full h-48 bg-[#0B0F19] rounded-2xl border border-[#1F2937] border-dashed flex items-center justify-center mb-6">
                <ImageIcon
                  size={48}
                  className="text-[#6366F1] animate-bounce"
                />
              </div>
              <div className="w-full space-y-3">
                <div className="h-3 w-3/4 bg-[#1F2937] rounded-full animate-pulse"></div>
                <div className="h-3 w-1/2 bg-[#1F2937] rounded-full animate-pulse delay-75"></div>
                <div className="flex gap-2 mt-4">
                  <div className="px-3 py-1 bg-[#6366F1]/20 rounded-md border border-[#6366F1]/30 text-[#6366F1] text-[10px] font-bold">
                    #ai
                  </div>
                  <div className="px-3 py-1 bg-[#6366F1]/20 rounded-md border border-[#6366F1]/30 text-[#6366F1] text-[10px] font-bold">
                    #viral
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 px-6 relative z-10 border-t border-[#1F2937]/50 bg-[#0B0F19]/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-extrabold mb-4">
                How CapCraft Works
              </h2>
              <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
                Turn any image into a viral post in three simple steps.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "Step 1",
                  title: "Upload Your Image",
                  desc: "Drag and drop your image or choose a file from your device.",
                  icon: UploadCloud,
                },
                {
                  step: "Step 2",
                  title: "AI Analyzes Content",
                  desc: "Our AI analyzes the content, mood, and elements of your image.",
                  icon: Cpu,
                },
                {
                  step: "Step 3",
                  title: "Get Captions & Tags",
                  desc: "Instantly generate creative captions and relevant hashtags ready to copy.",
                  icon: Hash,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#111827] border border-[#1F2937] rounded-3xl p-8 hover:border-[#6366F1] hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300 group hover:-translate-y-2"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#0B0F19] border border-[#1F2937] flex items-center justify-center mb-6 group-hover:border-[#6366F1]/50 transition-colors">
                    <item.icon
                      size={28}
                      className="text-[#9CA3AF] group-hover:text-[#6366F1]"
                    />
                  </div>
                  <div className="text-[#6366F1] text-sm font-bold uppercase tracking-wider mb-2">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-[#9CA3AF] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 relative z-10">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#111827] to-[#0B0F19] border border-[#1F2937] rounded-[40px] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 relative z-10">
              Ready to create better captions?
            </h2>
            <p className="text-[#9CA3AF] text-lg mb-10 max-w-xl mx-auto relative z-10">
              Upload your image and let CapCraft generate captions instantly. No
              credit card required.
            </p>
            <Link
              to="/register"
              className="inline-flex px-10 py-5 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-bold text-lg hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] hover:scale-105 transition-all duration-300 relative z-10"
            >
              Start Generating Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
