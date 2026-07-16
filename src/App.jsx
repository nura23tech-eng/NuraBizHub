import Header from "./components/Header";
import FeatureCard from "./components/FeatureCard";

function App() {
  const features = [
    {
      title: "Record Sale",
      description: "Quickly record every sale your business makes."
    },
    {
      title: "Record Expense",
      description: "Track daily business expenses with ease."
    },
    {
      title: "Inventory",
      description: "Monitor products and stock levels."
    },
    {
      title: "Customers",
      description: "Manage customer records and relationships."
    },
    {
      title: "Ask AI",
      description: "Get instant AI-powered business advice."
    },
    {
      title: "Business Report",
      description: "View simple reports about your business."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Welcome to NuraBizHub
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
