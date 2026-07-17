import Header from "./components/Header";
import FeatureCard from "./components/FeatureCard";

function App() {
  const features = [
    {
      title: "Record Sale",
      description: "Quickly record every sale your business makes.",
      action: "Open",
    },
    {
      title: "Record Expense",
      description: "Track daily business expenses with ease.",
      action: "Open",
    },
    {
      title: "Inventory",
      description: "Monitor your goods and stock levels.",
      action: "Open",
    },
    {
      title: "Customers",
      description: "Keep track of your customers.",
      action: "Open",
    },
    {
      title: "Ask AI",
      description: "Get intelligent business advice instantly.",
      action: "Open",
    },
    {
      title: "Business Report",
      description: "Understand your business performance.",
      action: "Open",
    },
  ];

  const stats = [
    {
      title: "Today's Sales",
      value: "₦0",
      color: "bg-blue-100",
    },
    {
      title: "Expenses",
      value: "₦0",
      color: "bg-red-100",
    },
    {
      title: "Profit",
      value: "₦0",
      color: "bg-green-100",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="p-4">
        <section className="mb-6">
          <h1 className="text-3xl font-bold text-primary">
            Welcome to NuraBizHub
          </h1>

          <p className="mt-2 text-gray-600">
            Your AI-powered business companion.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl ${stat.color}`}
            >
              <h3 className="text-gray-600">
                {stat.title}
              </h3>

              <p className="text-2xl font-bold">
                {stat.value}
              </p>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              action={feature.action}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
