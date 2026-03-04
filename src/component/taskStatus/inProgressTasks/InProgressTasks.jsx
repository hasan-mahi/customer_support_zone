import React from "react";

const InProgressTasks = ({ selectedTickets, handleResolvedTask }) => {
  return (
    <div className="space-y-2">
      {selectedTickets.length === 0 ? (
        <p className="text-sm text-gray-400">
          Select a ticket to add to Task Status
        </p>
      ) : (
        selectedTickets.map((ticket) => (
          <div key={ticket.id} className="bg-base-100 shadow-sm p-3 rounded">
            <h2 className="font-semibold mb-2">{ticket.title}</h2>

            <button
              onClick={() => handleResolvedTask(ticket)}
              className="btn btn-success w-full"
            >
              Complete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default InProgressTasks;
