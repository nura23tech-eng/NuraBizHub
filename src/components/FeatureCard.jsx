function FeatureCard({ title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 border">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">
        {title}
      </h3>

      <p className="text-slate-600 mb-6">
        {description}
      </p>

      <button className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800">
        Open
      </button>
    </div>
  );
}

export default FeatureCard;
