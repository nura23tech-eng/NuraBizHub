function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-sky-500 text-white rounded-b-3xl shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-6">

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              NuraBizHub
            </h1>

            <p className="text-sm text-blue-100 mt-1">
              Your AI Business Companion
            </p>
          </div>

          <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
            🤖 Nura AI
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;
