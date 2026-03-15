import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Menu,
  X,
  LogOut,
  LayoutDashboard,
  User,
  ChevronRight,
  ShieldCheck,
} from "lucide-react"; // Camera icon हटा दिया गया है

import LogoutConfirmModal from "./LogoutConfirmModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "About", path: "/about" },
  ];

  const executeLogout = async () => {
    setIsLogoutModalOpen(false);
    await logout();
    setIsOpen(false);
    navigate("/login");
  };

  const dashboardLink =
    user?.role === "admin" ? "/admin-dashboard" : "/user-dashboard";
  const dashboardText = user?.role === "admin" ? "Admin Portal" : "Dashboard";
  const DashboardIcon = user?.role === "admin" ? ShieldCheck : LayoutDashboard;

  // 🟢 AI Theme Specific Colors for Badges and Buttons
  const badgeColor =
    user?.role === "admin"
      ? "bg-[#8B5CF6]/20 text-[#8B5CF6]" // Purple for Admin
      : "bg-[#6366F1]/20 text-[#6366F1]"; // Indigo for User

  const btnColor =
    user?.role === "admin"
      ? "text-[#8B5CF6] bg-[#8B5CF6]/10 hover:bg-[#8B5CF6]/20 border border-[#8B5CF6]/30"
      : "text-[#6366F1] bg-[#6366F1]/10 hover:bg-[#6366F1]/20 border border-[#6366F1]/30";

  return (
    <>
      <LogoutConfirmModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={executeLogout}
      />

      <div className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
        <nav
          className={`pointer-events-auto w-full max-w-7xl transition-all duration-500 ease-out rounded-full border backdrop-blur-xl ${
            scrolled
              ? "bg-[#0B0F19]/80 border-[#1F2937] shadow-[0_8px_30px_rgba(0,0,0,0.5)] py-3"
              : "bg-[#0B0F19]/40 border-transparent py-4"
          }`}
        >
          <div className="px-6 md:px-8 flex justify-between items-center">
            {/* 🟢 Brand Logo (Updated with custom image) */}
            <Link
              to="/"
              className="text-2xl font-extrabold flex items-center gap-2.5 tracking-tight group"
            >
              <img
                src="/logo.png"
                alt="CapCraft Logo"
                className="h-12 w-12 object-contain transition-transform group-hover:scale-110 duration-300 drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
              />
              <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                CapCraft
              </span>
            </Link>

            {/* 🟢 Desktop Links */}
            <div className="hidden md:flex items-center gap-8 font-medium">
              <div className="flex items-center gap-8 mr-4">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="relative group py-1 text-[#9CA3AF] transition-colors hover:text-[#F9FAFB]"
                    >
                      <span
                        className={isActive ? "text-[#F9FAFB] font-bold" : ""}
                      >
                        {link.name}
                      </span>
                      <span
                        className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] transition-all duration-300 ease-out rounded-full ${
                          isActive
                            ? "w-full shadow-[0_0_10px_rgba(99,102,241,0.8)]"
                            : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </Link>
                  );
                })}
              </div>

              {/* Separator */}
              <div className="h-6 w-[2px] bg-gradient-to-b from-transparent via-[#1F2937] to-transparent"></div>

              {/* 🟢 Desktop Auth Section */}
              {user ? (
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2 bg-[#111827] px-3 py-1.5 rounded-full border border-[#1F2937]">
                    <div className={`${badgeColor} p-1.5 rounded-full`}>
                      <User size={16} strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-semibold text-[#F9FAFB] pr-2">
                      {user.fullName?.firstName || "User"}
                    </span>
                  </div>

                  <Link
                    to={dashboardLink}
                    className={`group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold transition-all hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] ${btnColor}`}
                  >
                    <DashboardIcon size={18} /> {dashboardText}
                  </Link>

                  <button
                    onClick={() => setIsLogoutModalOpen(true)}
                    className="p-2.5 text-[#9CA3AF] hover:text-[#EF4444] hover:bg-[#EF4444]/10 rounded-full transition-all"
                    title="Logout"
                  >
                    <LogOut size={20} />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <Link
                    to="/login"
                    className="text-[#9CA3AF] font-semibold hover:text-[#F9FAFB] transition-colors"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/register"
                    className="group flex items-center gap-1 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-6 py-2.5 rounded-full font-bold hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Get Started
                    <ChevronRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              )}
            </div>

            {/* 🟢 Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 p-2 text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-[#111827] rounded-full transition-colors focus:outline-none"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>

        {/* ================= MOBILE MENU DROPDOWN ================= */}
        <div
          className={`absolute top-full mt-4 w-[calc(100%-2rem)] max-w-md mx-auto pointer-events-auto transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-4 invisible"
          }`}
        >
          <div className="bg-[#111827]/95 backdrop-blur-xl border border-[#1F2937] shadow-2xl rounded-3xl p-6 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`p-3 rounded-2xl font-semibold transition-colors ${
                    location.pathname === link.path
                      ? "bg-[#6366F1]/10 text-[#6366F1]"
                      : "text-[#9CA3AF] hover:bg-[#1F2937] hover:text-[#F9FAFB]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#1F2937] to-transparent my-2"></div>

            {user ? (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 p-3 bg-[#0B0F19] rounded-2xl border border-[#1F2937]">
                  <div className={`${badgeColor} p-2 rounded-full`}>
                    <User size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#F9FAFB]">
                      {user.fullName?.firstName || "Welcome back"}
                    </span>
                    <span className="text-xs text-[#9CA3AF]">{user.email}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Link
                    to={dashboardLink}
                    className={`flex justify-center items-center gap-2 py-3 rounded-2xl font-bold transition-colors ${btnColor}`}
                  >
                    {dashboardText}
                  </Link>
                  <button
                    onClick={() => setIsLogoutModalOpen(true)}
                    className="flex justify-center items-center gap-2 text-[#EF4444] bg-[#EF4444]/10 py-3 rounded-2xl font-bold hover:bg-[#EF4444]/20 transition-colors"
                  >
                    <LogOut size={18} /> Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Link
                  to="/login"
                  className="w-full text-center p-3 rounded-2xl font-bold text-[#F9FAFB] bg-[#1F2937] hover:bg-[#374151] transition-colors border border-[#374151]"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="w-full text-center bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white p-3 rounded-2xl font-bold shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
