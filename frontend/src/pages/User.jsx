import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import {
  UploadCloud,
  X,
  Wand2,
  Copy,
  Check,
  Image as ImageIcon,
} from "lucide-react";
import { io } from "socket.io-client";
import api from "../utils/api";
import toast from "react-hot-toast";

const User = () => {
  const { user } = useAuth();

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [caption, setCaption] = useState("");
  const [copied, setCopied] = useState(false);

  const socketRef = useRef(null);

  useEffect(() => {
    const backendUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
    socketRef.current = io(backendUrl);

    socketRef.current.on("connect", () => {
      console.log("🔌 Connected to Socket:", socketRef.current.id);
    });

    socketRef.current.on("captionChunk", (chunk) => {
      setCaption((prev) => prev + chunk);
    });

    socketRef.current.on("captionComplete", () => {
      setIsGenerating(false);
      toast.success("Magic complete! ✨");
    });

    socketRef.current.on("captionError", (data) => {
      setIsGenerating(false);
      toast.error(data.message || "Failed to generate caption.");
    });

    return () => {
      if (socketRef.current) socketRef.current.disconnect();
    };
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    handleFileSelect(droppedFile);
  };

  const handleFileInput = (e) => {
    const selectedFile = e.target.files[0];
    handleFileSelect(selectedFile);
  };

  const handleFileSelect = (selectedFile) => {
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        return toast.error("Image size should be less than 5MB");
      }
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setCaption("");
    } else {
      toast.error("Please upload a valid image file (JPG, PNG, WEBP).");
    }
  };

  const removeImage = () => {
    setFile(null);
    setPreview(null);
    setCaption("");
  };

  const generateCaption = async () => {
    if (!file) return toast.error("Please upload an image first!");

    setIsGenerating(true);
    setCaption("");
    setCopied(false);

    const formData = new FormData();
    formData.append("image", file);
    formData.append("socketId", socketRef.current.id);

    try {
      await api.post("/api/caption/generate", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      setIsGenerating(false);
      toast.error("Failed to connect to AI server.");
      console.error(error);
    }
  };

  const handleCopy = () => {
    if (!caption) return;
    navigator.clipboard.writeText(caption);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto mt-6 md:mt-10 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700 relative z-10">
      <div className="bg-[#111827] p-6 md:p-10 rounded-3xl shadow-2xl border border-[#1F2937]">
        {/* Header */}
        <div className="mb-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#F9FAFB] mb-2 tracking-tight">
            Create Magic, {user?.fullName?.firstName || "Creator"}! ✨
          </h1>
          <p className="text-[#9CA3AF] font-light">
            Drop your image below and let AI craft the perfect caption.
          </p>
        </div>

        {/* 🟢 Drag & Drop Area */}
        {!preview ? (
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById("file-upload").click()}
            className={`relative border-2 border-dashed rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center transition-all cursor-pointer min-h-[250px] md:min-h-[300px] ${
              isDragging
                ? "border-[#6366F1] bg-[#6366F1]/10 shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                : "border-[#374151] bg-[#0B0F19] hover:bg-[#1F2937]/50 hover:border-[#6366F1]/50"
            }`}
          >
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileInput}
            />
            <div className="bg-[#111827] p-5 rounded-full shadow-sm mb-5 border border-[#1F2937] transition-transform transform group-hover:scale-110">
              <UploadCloud size={36} className="text-[#6366F1]" />
            </div>
            <p className="text-[#F9FAFB] font-extrabold text-lg md:text-xl mb-2 text-center">
              Drag & Drop your image here
            </p>
            <p className="text-sm text-[#6B7280] font-medium text-center">
              or click to browse from your device
            </p>
            <div className="mt-6 flex gap-3 text-xs text-[#9CA3AF] font-semibold bg-[#111827] px-4 py-2 rounded-full border border-[#1F2937]">
              <span>JPG</span> • <span>PNG</span> • <span>WEBP</span>
            </div>
          </div>
        ) : (
          /* 🟢 Image Preview Area */
          <div className="relative rounded-3xl overflow-hidden bg-[#0B0F19] border border-[#1F2937] group">
            <button
              onClick={removeImage}
              className="absolute top-4 right-4 bg-[#111827]/80 backdrop-blur-md p-2.5 rounded-full shadow-lg text-[#9CA3AF] hover:text-[#EF4444] hover:bg-[#111827] transition-all z-10"
              title="Remove Image"
            >
              <X size={20} strokeWidth={2.5} />
            </button>
            <img
              src={preview}
              alt="Preview"
              className="w-full h-auto max-h-[300px] md:max-h-[450px] object-contain bg-black/20"
            />
          </div>
        )}

        {/* Generate Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={generateCaption}
            disabled={!preview || isGenerating}
            className={`flex items-center justify-center gap-2 w-full md:w-auto px-10 py-4 rounded-xl font-bold text-white shadow-lg transition-all transform ${
              !preview
                ? "bg-[#1F2937] text-[#9CA3AF] cursor-not-allowed border border-[#374151]"
                : isGenerating
                  ? "bg-[#6366F1]/80 cursor-wait shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                  : "bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:scale-[1.02] active:scale-[0.98]"
            }`}
          >
            {isGenerating ? (
              <>
                <div className="h-5 w-5 border-2 border-[#F9FAFB]/30 border-t-[#F9FAFB] rounded-full animate-spin" />
                Analyzing Image...
              </>
            ) : (
              <>
                <Wand2 size={22} />
                Generate Caption
              </>
            )}
          </button>
        </div>

        {/* 🟢 Output Box (Streaming Animation) */}
        {(caption || isGenerating) && (
          <div className="mt-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-4 px-2">
              <h3 className="text-sm font-extrabold text-[#6366F1] uppercase tracking-widest flex items-center gap-2">
                <ImageIcon size={16} /> AI Result
              </h3>
              {caption && !isGenerating && (
                <button
                  onClick={handleCopy}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${
                    copied
                      ? "bg-[#22C55E]/20 text-[#22C55E] border border-[#22C55E]/30"
                      : "bg-[#1F2937] text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-[#374151] border border-[#374151]"
                  }`}
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? "Copied!" : "Copy Text"}
                </button>
              )}
            </div>

            <div className="bg-[#0B0F19] p-6 md:p-8 rounded-3xl border border-[#1F2937] min-h-[140px] shadow-inner relative group transition-all hover:border-[#6366F1]/30">
              <p className="text-[#F9FAFB] text-[1.05rem] md:text-[1.1rem] leading-relaxed whitespace-pre-wrap font-light">
                {caption}
                {isGenerating && (
                  <span className="inline-block w-2 h-5 md:w-2.5 md:h-5 ml-1 bg-[#6366F1] animate-pulse align-middle rounded-sm shadow-[0_0_10px_rgba(99,102,241,0.8)]"></span>
                )}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
