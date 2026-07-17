import React from "react";

function FeatureCard({
  title,
  description,
  icon: Icon,
  color,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="bg-nura-card border border-white/5 rounded-nura p-5 shadow-lg text-left transition active:scale-95"
    >

      <div
        className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center mb-4`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>

      <h3 className="text-nura-white font-bold text-base">
        {title}
      </h3>

      <p className="text-nura-gray text-sm mt-1">
        {description}
      </p>

    </button>
  );
}

export default FeatureCard;
