import React from "react";
import ellipseOpen from "../../../assets/EllipseOpen.png";
import ellipseIp from "../../../assets/EllipseIp.png";
import calenderImg from "../../../assets/calender.png";

const Ticket = ({ ticket, handleCardClick }) => {
  return (
    <div>
      <div
        onClick={() => handleCardClick(ticket)}
        className="card bg-base-100 shadow-md hover:shadow-lg transition w-full h-full cursor-pointer"
      >
        <div className="card-body flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <h2 className="card-title text-base sm:text-lg line-clamp-1">
                {ticket.title}
              </h2>

              {ticket.status === "open" ? (
                <div className="badge bg-[#B9F8CF] gap-2 px-3 py-2">
                  <img src={ellipseOpen} alt="" className="w-3 h-3" />
                  {ticket.status}
                </div>
              ) : (
                <div className="badge bg-[#F8F3B9] gap-2 px-3 py-2">
                  <img src={ellipseIp} alt="" className="w-3 h-3" />
                  {ticket.status}
                </div>
              )}
            </div>

            <p className="text-sm text-base-content/70 mt-2 line-clamp-2">
              {ticket.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between text-sm gap-2">
            <div className="flex gap-4">
              <p className="font-medium">#{ticket.id}</p>
              <p
                className={`font-semibold ${
                  ticket.priority === "high"
                    ? "text-error"
                    : ticket.priority === "medium"
                      ? "text-warning"
                      : "text-success"
                }`}
              >
                {ticket.priority.toUpperCase()} PRIORITY
              </p>
            </div>

            <div className="flex gap-4 sm:justify-end">
              <p>{ticket.customer}</p>
              <div className="flex items-center gap-2">
                <img src={calenderImg} alt="" className="w-4 h-4" />
                <p>{ticket.createdAt}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
