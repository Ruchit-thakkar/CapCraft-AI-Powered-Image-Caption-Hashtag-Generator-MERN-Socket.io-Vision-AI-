import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../utils/api";
import toast from "react-hot-toast";
import { Users, Activity, MessageSquare, Trash2 } from "lucide-react";

const Admin = () => {
  const { user } = useAuth();
  const [dashboardData, setDashboardData] = useState({
    totalUsers: 0,
    totalCaptions: 0,
    activeUsers: 0,
    users: [],
  });
  const [loading, setLoading] = useState(true);

  const fetchDashboardData = async () => {
    try {
      const { data } = await api.get("/api/admin/dashboard");
      if (data.success) {
        setDashboardData(data.data);
      }
    } catch (error) {
      toast.error("Failed to load admin data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const handleDeleteUser = async (userId, userName) => {
    if (!window.confirm(`Are you sure you want to delete ${userName}?`)) return;

    try {
      const { data } = await api.delete(`/api/admin/users/${userId}`);
      if (data.success) {
        toast.success(data.message);
        setDashboardData((prev) => ({
          ...prev,
          users: prev.users.filter((u) => u._id !== userId),
          totalUsers: prev.totalUsers - 1,
        }));
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete user");
    }
  };

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#6366F1]"></div>
      </div>
    );
  }

  // Cards Configuration for Dark Theme
  const stats = [
    {
      title: "Total Users",
      value: dashboardData.totalUsers,
      icon: Users,
      color: "text-[#3B82F6]",
      bg: "bg-[#3B82F6]/10",
      border: "border-[#3B82F6]/20",
    },
    {
      title: "Active (48h)",
      value: dashboardData.activeUsers,
      icon: Activity,
      color: "text-[#22C55E]",
      bg: "bg-[#22C55E]/10",
      border: "border-[#22C55E]/20",
    },
    {
      title: "Total Captions",
      value: dashboardData.totalCaptions,
      icon: MessageSquare,
      color: "text-[#8B5CF6]",
      bg: "bg-[#8B5CF6]/10",
      border: "border-[#8B5CF6]/20",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-6 md:mt-10 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#F9FAFB] tracking-tight">
          Admin Portal ⚙️
        </h1>
        <p className="text-[#9CA3AF] font-light mt-2">
          System overview and user management.
        </p>
      </div>

      {/* 🟢 Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className={`bg-[#111827] p-6 rounded-3xl border ${stat.border} flex items-center gap-5 transition-transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]`}
            >
              <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color}`}>
                <Icon size={28} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-[#9CA3AF] text-sm font-bold uppercase tracking-wider mb-1">
                  {stat.title}
                </h3>
                <div className="text-3xl md:text-4xl font-extrabold text-[#F9FAFB]">
                  {stat.value}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 🟢 User List Table */}
      <div className="bg-[#111827] rounded-3xl border border-[#1F2937] overflow-hidden shadow-xl">
        <div className="px-6 py-5 border-b border-[#1F2937] bg-[#0B0F19]/50">
          <h2 className="text-xl font-extrabold text-[#F9FAFB]">
            User Management
          </h2>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-[#0B0F19] text-[#9CA3AF] font-bold uppercase tracking-wider text-xs border-b border-[#1F2937]">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4 text-center">Captions</th>
                <th className="px-6 py-4">Last Login</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1F2937]">
              {dashboardData.users.map((u) => (
                <tr
                  key={u._id}
                  className="hover:bg-[#1F2937]/30 transition-colors text-[#F9FAFB]"
                >
                  <td className="px-6 py-4 font-bold">
                    {u.fullName?.firstName} {u.fullName?.lastName}
                  </td>
                  <td className="px-6 py-4 text-[#9CA3AF]">{u.email}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg border ${
                        u.role === "admin"
                          ? "bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/30"
                          : "bg-[#6366F1]/10 text-[#6366F1] border-[#6366F1]/30"
                      }`}
                    >
                      {u.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-bold text-center text-[#6366F1]">
                    {u.captionCount || 0}
                  </td>
                  <td className="px-6 py-4 text-xs text-[#9CA3AF] font-medium">
                    {new Date(u.lastLogin).toLocaleDateString()} <br />
                    {new Date(u.lastLogin).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() =>
                        handleDeleteUser(u._id, u.fullName?.firstName)
                      }
                      disabled={user._id === u._id}
                      className={`p-2 rounded-xl transition-all ${
                        user._id === u._id
                          ? "text-[#4B5563] cursor-not-allowed"
                          : "text-[#EF4444] hover:bg-[#EF4444]/10 border border-transparent hover:border-[#EF4444]/30"
                      }`}
                      title={
                        user._id === u._id
                          ? "Cannot delete yourself"
                          : "Delete User"
                      }
                    >
                      <Trash2 size={18} strokeWidth={2.5} />
                    </button>
                  </td>
                </tr>
              ))}
              {dashboardData.users.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-12 text-center text-[#9CA3AF] font-medium"
                  >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
