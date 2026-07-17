import React from "react";
import {
  Home,
  BarChart3,
  Plus,
  MessageCircle,
  Settings,
} from "lucide-react";

function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-nura-card border-t border-white/10 px-6 py-3 flex justify-between items-center z-50">

      <button className="flex flex-col items-center text-nura-sky">
        <Home size={22} />
        <span className="text-[10px] mt-1">
          Home
        </span>
      </button>

      <button className="flex flex-col items-center text-nura-gray">
        <BarChart3 size={22} />
        <span className="text-[10px] mt-1">
          Reports
        </span>
      </button>

      <button className="w-16 h-16 rounded-full bg-nura-sky text-white flex items-center justify-center -mt-10 border-4 border-nura-navy shadow-xl">

        <Plus size={28} />

      </button>

      <button className="flex flex-col items-center text-nura-gray">
        <MessageCircle size={22} />
        <span className="text-[10px] mt-1">
          Ask Nura
        </span>
      </button>

      <button className="flex flex-col items-center text-nura-gray">
        <Settings size={22} />
        <span className="text-[10px] mt-1">
          Settings
        </span>
      </button>

    </nav>
  );
}

export default BottomNav;
