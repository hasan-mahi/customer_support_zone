import React, { use } from "react";
import Ticket from "./ticket/Ticket";

const CustomerTickets = ({ ticketPromise, handleCardClick }) => {
  const tickets = use(ticketPromise);
  return (
    <div>
      <h1 className="font-semibold mb-1">Customer Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} handleCardClick={handleCardClick}></Ticket>
        ))}
      </div>
    </div>
  );
};

export default CustomerTickets;
