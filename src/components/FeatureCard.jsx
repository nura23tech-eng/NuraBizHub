function FeatureCard({ title, description, icon, color }) {
  return (
    <div
      className={`bg-white rounded-3xl p-6 shadow-sm border border-slate-100 
      hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
    >

      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center 
        text-3xl mb-5 ${color}`}
      >
        {icon}
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-2">
        {title}
      </h3>

      <p className="text-slate-500 leading-relaxed min-h-[50px]">
        {description}
      </p>

      <button
        className="mt-6 w-full bg-blue-900 text-white py-3 rounded-xl 
        font-semibold hover:bg-blue-800 transition"
      >
        Open
      </button>

    </div>
  );
}

export default FeatureCard;
