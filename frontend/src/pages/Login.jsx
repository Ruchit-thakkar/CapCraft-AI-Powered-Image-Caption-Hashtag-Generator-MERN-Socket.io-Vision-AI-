import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LogIn } from "lucide-react"; // Added for UI enhancement

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/user-dashboard";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(formData);
    if (res.success) navigate(from, { replace: true });
  };

  return (
    <div className="max-w-md mx-auto relative mt-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-3xl blur-[80px] opacity-20 pointer-events-none"></div>

      <div className="relative bg-[#111827] p-8 md:p-10 rounded-3xl shadow-2xl border border-[#1F2937]">
        <h2 className="text-3xl font-extrabold text-center mb-2 text-[#F9FAFB]">
          Welcome Back 👋
        </h2>
        <p className="text-center text-[#9CA3AF] mb-8 font-light">
          Log in to your CapCraft account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[#9CA3AF] mb-2 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-5 py-3 bg-[#0B0F19] border border-[#1F2937] rounded-xl text-[#F9FAFB] placeholder-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 focus:border-[#6366F1] transition-all"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block text-[#9CA3AF] mb-2 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              className="w-full px-5 py-3 bg-[#0B0F19] border border-[#1F2937] rounded-xl text-[#F9FAFB] placeholder-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 focus:border-[#6366F1] transition-all"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>

          <button className="w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white py-3.5 rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-2 flex items-center justify-center gap-2">
            <LogIn size={20} /> Login to Account
          </button>
        </form>

        <p className="text-center mt-8 text-[#9CA3AF]">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-[#6366F1] hover:text-[#8B5CF6] font-semibold transition-colors"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
