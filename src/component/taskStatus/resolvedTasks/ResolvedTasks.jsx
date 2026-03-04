import React from "react";

const ResolvedTasks = ({ resolvedTasks }) => {
  return (
    <div className="space-y-2">
      {resolvedTasks.length === 0 ? (
        <p className="text-sm text-gray-400">No resolved tasks yet.</p>
      ) : (
        resolvedTasks.map((ticket) => (
          <div key={ticket.id} className="bg-[#E0E7FF] shadow-sm p-3 rounded">
            <h2 className="font-semibold">{ticket.title}</h2>
          </div>
        ))
      )}
    </div>
  );
};

export default ResolvedTasks;
