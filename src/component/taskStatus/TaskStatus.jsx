import React from "react";
import InProgressTasks from "./inProgressTasks/InProgressTasks";
import ResolvedTasks from "./resolvedTasks/ResolvedTasks";

const TaskStatus = ({selectedTickets, handleResolvedTask, resolvedTasks}) => {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="font-semibold mb-1">Task Status</h1>
        <InProgressTasks selectedTickets={selectedTickets} handleResolvedTask={handleResolvedTask}></InProgressTasks>
      </div>
      <div>
        <h1 className="font-semibold mb-1">Resolved Task</h1>
        <ResolvedTasks resolvedTasks={resolvedTasks}></ResolvedTasks>
      </div>
    </div>
  );
};

export default TaskStatus;
