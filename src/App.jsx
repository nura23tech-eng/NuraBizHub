import React from "react";

function App() {

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Header */}
      <header className="bg-blue-900 text-white p-5">
        <h1 className="text-2xl font-bold">
          NuraBizHub AI
        </h1>

        <p className="text-sm mt-1">
          Your Intelligent Business Companion
        </p>
      </header>


      {/* Welcome Section */}
      <main className="p-5">

        <h2 className="text-xl font-semibold mb-4">
          Welcome 👋
        </h2>

        <p className="mb-6 text-gray-600">
          Manage your business, track sales, expenses and get AI-powered advice.
        </p>


        {/* Main Features */}
        <div className="grid gap-4">

          <button className="bg-blue-700 text-white rounded-xl p-5 text-left">
            📌 Record Sale
          </button>


          <button className="bg-sky-500 text-white rounded-xl p-5 text-left">
            💰 Record Expense
          </button>


          <button className="bg-green-600 text-white rounded-xl p-5 text-left">
            📦 Goods & Inventory
          </button>


          <button className="bg-purple-600 text-white rounded-xl p-5 text-left">
            👥 Customers
          </button>


          <button className="bg-yellow-500 text-black rounded-xl p-5 text-left">
            🤖 Ask AI
          </button>


          <button className="bg-red-500 text-white rounded-xl p-5 text-left">
            📊 Business Report
          </button>

        </div>

      </main>

    </div>
  );
}

export default App;
