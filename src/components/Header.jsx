import React from "react";

function Header({ businessName, healthScore }) {
  return (
    <header className="px-5 pt-6 pb-2 max-w-md mx-auto flex items-start justify-between">

      <div>
        <p className="text-xs uppercase tracking-widest text-nura-gray font-bold">
          Mission Control
        </p>

        <h1 className="text-2xl font-bold text-nura-white mt-1">
          {businessName}
        </h1>
      </div>

      <div className="bg-nura-green/20 border border-nura-green/30 rounded-full px-3 py-1">

        <span className="text-xs font-bold text-nura-green">
          {healthScore}% Healthy
        </span>

      </div>

    </header>
  );
}

export default Header;
