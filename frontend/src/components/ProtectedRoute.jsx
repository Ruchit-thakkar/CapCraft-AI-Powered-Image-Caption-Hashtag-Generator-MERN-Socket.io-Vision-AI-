import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, allowedRoles = ["user", "admin"] }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-teal-700"></div>
      </div>
    );
  }

  // 1. अगर user logged in नहीं है, तो Login page पर भेजें
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 2. अगर logged in है लेकिन Role match नहीं करता
  if (!allowedRoles.includes(user.role)) {
    // Regular user admin page access करने की कोशिश करे
    if (user.role === "user") {
      return <Navigate to="/user-dashboard" replace />;
    }
    // Admin user page access करे (optional fallback)
    return <Navigate to="/admin-dashboard" replace />;
  }

  // 3. सब कुछ सही है, तो component render करें
  return children;
};

export default ProtectedRoute;
