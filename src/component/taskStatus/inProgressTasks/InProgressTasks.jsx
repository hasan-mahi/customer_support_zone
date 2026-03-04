import React from "react";

const InProgressTasks = () => {
  return (
    <div className="space-y-2">
      {/* <p className="text-sm text-gray-400">
        Select a ticket to add to Task Status
      </p> */}

      <div className="bg-base-100 shadow-sm p-3 rounded">
        <h2 className="font-semibold mb-2">Payment Failed - Card Declined</h2>
        <button className="btn btn-success w-full">Complete</button>
      </div>

      <div className="bg-base-100 shadow-sm p-3 rounded">
        <h2 className="font-semibold mb-2">Payment Failed - Card Declined</h2>
        <button className="btn btn-success w-full">Complete</button>
      </div>
    </div>
  );
};

export default InProgressTasks;
