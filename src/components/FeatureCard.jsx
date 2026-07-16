export default function FeatureCard({ title, icon }) {

  return (
    <div className="bg-white shadow-md rounded-xl p-5">

      <div className="text-3xl">
        {icon}
      </div>

      <h3 className="font-bold mt-3">
        {title}
      </h3>

    </div>
  );
}
