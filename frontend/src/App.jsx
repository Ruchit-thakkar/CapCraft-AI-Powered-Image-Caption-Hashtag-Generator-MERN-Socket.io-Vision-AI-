import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import User from "./pages/User";
import Admin from "./pages/Admin";
import Features from "./pages/Features";
import About from "./pages/About";
function App() {
  return (
    // 🟢 Updated Background and Text colors for the Premium Dark Theme
    <div className="min-h-screen bg-[#0B0F19] text-[#F9FAFB] font-sans selection:bg-[#6366F1]/30 selection:text-[#F9FAFB]">
      {/* Navbar हर page पर दिखेगा */}
      <Navbar />

      {/* 🟢 Added pt-28 (padding-top) so the content doesn't hide behind the fixed floating Navbar */}
      <main className="container mx-auto px-4 pt-28 pb-12">
        <Routes>
          {/* 🟢 Public Routes (कोई भी access कर सकता है) */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />

          {/* 🔵 Protected Route: सिर्फ 'user' role वालों के लिए */}
          <Route
            path="/user-dashboard"
            element={
              <ProtectedRoute allowedRoles={["user"]}>
                <User />
              </ProtectedRoute>
            }
          />

          {/* 🔴 Protected Route: सिर्फ 'admin' role वालों के लिए */}
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Admin />
              </ProtectedRoute>
            }
          />

          {/* ⚠️ Catch-All Route (अगर कोई गलत URL डाले तो Home पर भेज दो) */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
