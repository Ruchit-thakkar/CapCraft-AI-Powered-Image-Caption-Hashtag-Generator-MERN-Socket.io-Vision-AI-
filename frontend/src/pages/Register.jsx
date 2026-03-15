import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { UserPlus } from "lucide-react"; // Added for UI enhancement

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const userData = {
      fullName: {
        firstName: formData.firstName,
        lastName: formData.lastName,
      },
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    };

    const success = await register(userData);
    setIsSubmitting(false);

    if (success) {
      navigate("/login");
    }
  };

  return (
    <div className="max-w-lg mx-auto relative mt-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-3xl blur-[80px] opacity-20 pointer-events-none"></div>

      <div className="relative bg-[#111827] p-8 md:p-10 rounded-3xl shadow-2xl border border-[#1F2937]">
        <h2 className="text-3xl font-extrabold text-center mb-2 text-[#F9FAFB]">
          Create an Account ✨
        </h2>
        <p className="text-center text-[#9CA3AF] mb-8 font-light">
          Join CapCraft and start generating AI captions.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Fields */}
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="flex-1">
              <label className="block text-[#9CA3AF] mb-2 text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                className="w-full px-5 py-3 bg-[#0B0F19] border border-[#1F2937] rounded-xl text-[#F9FAFB] placeholder-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 focus:border-[#6366F1] transition-all"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-[#9CA3AF] mb-2 text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                className="w-full px-5 py-3 bg-[#0B0F19] border border-[#1F2937] rounded-xl text-[#F9FAFB] placeholder-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 focus:border-[#6366F1] transition-all"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-[#9CA3AF] mb-2 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-5 py-3 bg-[#0B0F19] border border-[#1F2937] rounded-xl text-[#F9FAFB] placeholder-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 focus:border-[#6366F1] transition-all"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-[#9CA3AF] mb-2 text-sm font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full px-5 py-3 bg-[#0B0F19] border border-[#1F2937] rounded-xl text-[#F9FAFB] placeholder-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 focus:border-[#6366F1] transition-all"
              placeholder="+1234567890"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-[#9CA3AF] mb-2 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-5 py-3 bg-[#0B0F19] border border-[#1F2937] rounded-xl text-[#F9FAFB] placeholder-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 focus:border-[#6366F1] transition-all"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3.5 rounded-xl font-bold text-lg text-white transition-all duration-300 mt-4 flex justify-center items-center gap-2 ${
              isSubmitting
                ? "bg-[#1F2937] text-[#9CA3AF] cursor-not-allowed border border-[#374151]"
                : "bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:scale-[1.02] active:scale-[0.98]"
            }`}
          >
            {isSubmitting ? (
              <div className="h-5 w-5 border-2 border-[#9CA3AF]/30 border-t-[#9CA3AF] rounded-full animate-spin" />
            ) : (
              <>
                <UserPlus size={20} /> Sign Up
              </>
            )}
          </button>
        </form>

        {/* Redirect to Login */}
        <p className="text-center mt-8 text-[#9CA3AF]">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#6366F1] hover:text-[#8B5CF6] font-semibold transition-colors"
          >
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
