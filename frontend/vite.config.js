import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["logo.png"], // आपका public फोल्डर वाला लोगो
      manifest: {
        name: "CapCraft AI",
        short_name: "CapCraft",
        description: "AI-powered caption generator for creators",
        theme_color: "#0B0F19", // Premium Dark Theme Color
        background_color: "#0B0F19",
        display: "standalone", // इससे यह ब्राउज़र की जगह असली ऐप की तरह खुलेगा
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
