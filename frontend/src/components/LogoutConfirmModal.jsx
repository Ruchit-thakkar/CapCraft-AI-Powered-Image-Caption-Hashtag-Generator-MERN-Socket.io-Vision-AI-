import React from "react";
import { LogOut, X } from "lucide-react";

const LogoutConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  // अगर modal open नहीं है, तो कुछ भी render मत करो
  if (!isOpen) return null;

  return (
    // Backdrop: Background को हल्का काला और blur करने के लिए
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/40 backdrop-blur-sm p-4">
      {/* Modal Box */}
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">
        <div className="p-6">
          {/* Header & Close Icon */}
          <div className="flex justify-between items-start mb-4">
            <div className="bg-red-50 p-3 rounded-2xl text-red-600 border border-red-100">
              <LogOut size={24} strokeWidth={2.5} />
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Texts */}
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Ready to leave?
          </h3>
          <p className="text-gray-600 text-sm mb-8 leading-relaxed">
            Are you sure you want to log out of your CapCraft account? You will
            need to log in again to generate new captions.
          </p>

          {/* Action Buttons */}
          <div className="flex gap-3 w-full">
            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold rounded-2xl border border-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl shadow-md shadow-red-200 transition-all hover:-translate-y-0.5"
            >
              Yes, Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirmModal;
