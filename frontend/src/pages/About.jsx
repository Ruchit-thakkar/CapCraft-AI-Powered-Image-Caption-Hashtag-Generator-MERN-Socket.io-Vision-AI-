import React from "react";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-20 pb-24 px-6">
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">
                CapCraft
              </span>
            </h1>
            <p className="text-xl text-[#9CA3AF] font-light leading-relaxed">
              Simplifying content creation using advanced AI technology.
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-[#111827] p-8 md:p-12 rounded-[40px] border border-[#1F2937]">
              <p className="text-lg text-[#F9FAFB] leading-relaxed mb-6">
                CapCraft is an AI-powered tool designed to help creators
                generate engaging captions and hashtags from images instantly.
              </p>
              <p className="text-lg text-[#9CA3AF] leading-relaxed font-light mb-6">
                The idea behind CapCraft is simple — remove the difficulty of
                writing captions and let artificial intelligence do the creative
                work. By analyzing the visual content of an image, CapCraft
                generates captions that match the context, mood, and style of
                the image.
              </p>
              <p className="text-lg text-[#9CA3AF] leading-relaxed font-light">
                Our goal is to make content creation faster and easier for
                creators, marketers, and social media users.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 md:p-10 rounded-[32px] bg-[#0B0F19] border border-[#1F2937] hover:border-[#6366F1]/40 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-[#F9FAFB]">
                  Our Mission
                </h3>
                <p className="text-[#9CA3AF] font-light leading-relaxed">
                  Our mission is to simplify content creation using AI. We
                  believe that creativity should not be limited by time or
                  effort. CapCraft helps users turn visual content into
                  meaningful text in seconds.
                </p>
              </div>
              <div className="p-8 md:p-10 rounded-[32px] bg-[#0B0F19] border border-[#1F2937] hover:border-[#6366F1]/40 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-[#F9FAFB]">
                  Technology
                </h3>
                <p className="text-[#9CA3AF] font-light leading-relaxed">
                  Built using modern web technologies including MERN stack
                  architecture, real-time communication systems, and AI-based
                  image analysis models. Focusing on speed and performance.
                </p>
              </div>
            </div>

            <div className="text-center px-4 pt-8">
              <p className="text-[#6B7280] italic text-lg">
                "CapCraft is continuously evolving with new features and
                improvements to make AI-powered caption generation smarter and
                more useful for everyone."
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
