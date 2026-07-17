import React from "react";
import Header from "./components/Header";
import FeatureCard from "./components/FeatureCard";
import BottomNav from "./components/BottomNav";
import {
  ArrowUpRight,
  ArrowDownRight,
  Package,
  Users,
  TrendingUp,
  MessageSquare,
} from "lucide-react";

function App() {
  const handleAction = (feature) => {
    console.log(`${feature} clicked`);
    // Placeholder for future navigation
  };

  const features = [
    {
      id: "sale",
      title: "Record Sale",
      description: "Money coming in",
      icon: ArrowUpRight,
      color: "bg-nura-green",
      onClick: () => handleAction("Record Sale"),
    },
    {
      id: "expense",
      title: "Record Expense",
      description: "Money going out",
      icon: ArrowDownRight,
      color: "bg-red-500",
      onClick: () => handleAction("Record Expense"),
    },
    {
      id: "inventory",
      title: "Inventory",
      description: "Manage your stock",
      icon: Package,
      color: "bg-orange-500",
      onClick: () => handleAction("Inventory"),
    },
    {
      id: "customers",
      title: "Customers",
      description: "People who buy from you",
      icon: Users,
      color: "bg-purple-500",
      onClick: () => handleAction("Customers"),
    },
    {
      id: "reports",
      title: "Reports",
      description: "Business performance",
      icon: TrendingUp,
      color: "bg-nura-sky",
      onClick: () => handleAction("Reports"),
    },
    {
      id: "ask-nura",
      title: "Ask Nura",
      description: "AI business assistant",
      icon: MessageSquare,
      color: "bg-slate-600",
      onClick: () => handleAction("Ask Nura"),
    },
  ];

  return (
    <div className="min-h-screen bg-nura-navy text-nura-white pb-24">

      <Header
        businessName="Nura Shop"
        healthScore={98}
      />

      <main className="px-5 pt-4 max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">

        {/* AI Hero Card */}
        <section
          className="bg-gradient-to-br from-nura-sky to-blue-700 p-6 rounded-nura shadow-xl mb-6 relative overflow-hidden active:scale-[0.98] transition-transform cursor-pointer"
          onClick={() => handleAction("Nura AI")}
        >
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-2xl"
                role="img"
                aria-label="robot"
              >
                🤖
              </span>

              <h3 className="text-white font-bold text-lg">
                Nura AI
              </h3>
            </div>

            <p className="text-white/90 text-sm leading-relaxed">
              Welcome back! Your business is healthy today.
              Tap <strong>Record Sale</strong> to keep your
              records fresh.
            </p>
          </div>

          <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/10 blur-2xl"></div>
        </section>

        {/* Business Summary */}
        <div className="grid grid-cols-2 gap-4 mb-8">

          <div className="bg-nura-card rounded-nura border border-white/5 shadow-lg p-5">
            <p className="text-nura-gray text-[10px] uppercase tracking-widest font-bold mb-1">
              Today's Sales
            </p>

            <h2 className="text-xl font-bold">
              ₦0.00
            </h2>
          </div>

          <div className="bg-nura-card rounded-nura border border-white/5 shadow-lg p-5">
            <p className="text-nura-gray text-[10px] uppercase tracking-widest font-bold mb-1">
              Cash Balance
            </p>

            <h2 className="text-xl font-bold text-nura-green">
              ₦12,450
            </h2>
          </div>

        </div>

        {/* Quick Actions Header */}

        <div className="flex items-center justify-between mb-4 px-1">

          <h3 className="text-lg font-bold">
            Quick Actions
          </h3>

          <button
            className="text-xs font-bold uppercase tracking-wider text-nura-sky"
            onClick={() => handleAction("View All")}
          >
            View All
          </button>

        </div>

        {/* Quick Action Grid */}

        <div className="grid grid-cols-2 gap-4">

          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color}
              onClick={feature.onClick}
            />
          ))}

        </div>

      </main>

      <BottomNav />

    </div>
  );
}

export default App;
