import React from "react";
import { FileText, Users, Activity, Bell, TrendingUp } from "lucide-react"; 

const Page: React.FC = () => {
  return (
    <div className="min-h-screen  text-white">
      <div className="p-6">
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-poppins text-2xl font-semibold">Dashboard Overview</h1>
          <button title="btn" type="button" className="bg-gray-800 p-2 rounded-full">
            <Bell className="text-white w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 p-4 rounded-lg flex items-center">
            <div className="mr-4">
              <FileText className="text-blue-400 w-10 h-10" />
            </div>
            <div>
              <p className="font-poppins text-lg">Total Records</p>
              <h2 className="text-2xl font-bold">124</h2>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg flex items-center">
            <div className="mr-4">
              <Users className="text-green-400 w-10 h-10" />
            </div>
            <div>
              <p className="font-poppins text-lg">Active Doctors</p>
              <h2 className="text-2xl font-bold">48</h2>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg flex items-center">
            <div className="mr-4">
              <Activity className="text-yellow-400 w-10 h-10" />
            </div>
            <div>
              <p className="font-poppins text-lg">Recent Updates</p>
              <h2 className="text-2xl font-bold">12</h2>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="font-poppins text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-gray-700 p-4 rounded-lg flex justify-between items-center"
              >
                <div className="flex items-center">
                  <TrendingUp className="text-blue-400 w-6 h-6 mr-4" />
                  <div>
                    <p className="font-poppins text-sm font-semibold">Record Updated</p>
                    <p className="font-poppins text-sm text-gray-400">Patient #1234 - Dr. Smith</p>
                  </div>
                </div>
                <p className="font-poppins text-gray-400 text-sm">2 hours ago</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

