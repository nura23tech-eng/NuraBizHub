import Header from "./components/Header";
import FeatureCard from "./components/FeatureCard";


function App() {

  const features = [
    {
      title: "Record Sale",
      icon: "💰"
    },
    {
      title: "Record Expense",
      icon: "🧾"
    },
    {
      title: "Goods & Inventory",
      icon: "📦"
    },
    {
      title: "Customers",
      icon: "👥"
    },
    {
      title: "Ask AI",
      icon: "🤖"
    },
    {
      title: "Business Report",
      icon: "📊"
    }
  ];


  return (

    <div className="min-h-screen bg-gray-50">

      <Header />

      <main className="p-5 grid gap-4">

        {
          features.map((item, index) => (

            <FeatureCard
              key={index}
              title={item.title}
              icon={item.icon}
            />

          ))
        }

      </main>

    </div>

  );
}


export default App;
