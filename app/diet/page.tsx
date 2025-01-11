import React from "react";

const page: React.FC = () => {
  const recommendations = [
    {
      title: "Diabetes Type 2",
      lastUpdated: "1/15/2024",
      doctor: "Dr. Smith",
      hospital: "Central Hospital",
      recommendations: [
        "Low carbohydrate diet",
        "High fiber foods",
        "Lean proteins",
      ],
    },
    {
      title: "Hypertension",
      lastUpdated: "1/12/2024",
      doctor: "Dr. Johnson",
      hospital: "Central Hospital",
      recommendations: [
        "Low sodium diet",
        "DASH diet principles",
        "Potassium-rich foods",
      ],
    },
    {
      title: "Celiac Disease",
      lastUpdated: "1/10/2024",
      doctor: "Dr. Smith",
      hospital: "Central Hospital",
      recommendations: [
        "Gluten-free diet",
        "Rich in whole grains",
        "Balanced nutrients",
      ],
    },
  ];

  return (
    <div className="min-h-screen  text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Diet Recommendations</h1>
        <div className="flex items-center space-x-4">
          <button className="bg-sky-700 text-white px-4 py-2 rounded-lg flex items-center">
            <span className="material-icons mr-2">Filter</span>
          </button>
          <button className="bg-sky-700 text-white px-4 py-2 rounded-lg">+ New Recommendation</button>
        </div>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search diet recommendations..."
          className="w-full p-3 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500"
        />
      </div>

      <div className="space-y-6">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-bold text-blue-400">{item.title}</h2>
              <p className="text-gray-400 text-sm">
                Last updated: {item.lastUpdated}
              </p>
              <p className="text-gray-400 text-sm">Doctor: {item.doctor}</p>
              <p className="text-gray-400 text-sm">Hospital: {item.hospital}</p>
              <p className="mt-4 font-semibold">Recommendations:</p>
              <ul className="list-disc list-inside text-gray-300">
                {item.recommendations.map((rec, idx) => (
                  <li key={idx}>{rec}</li>
                ))}
              </ul>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
