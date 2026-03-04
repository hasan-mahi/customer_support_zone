import { Suspense, use, useState } from "react";
import "./App.css";
import Banner from "./component/banner/Banner";
import CustomerTickets from "./component/customerTickets/CustomerTickets";
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import TaskStatus from "./component/taskStatus/TaskStatus";
import { toast, ToastContainer } from "react-toastify";

const fetchData = async () => {
  const res = await fetch("tickets.json");
  return res.json();
};

const ticketPromise = fetchData();

function App() {
  const [tickets, setTickets] = useState(use(ticketPromise));
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  const handleCardClick = (ticket) => {
    const alreadyAdded = selectedTickets.find((item) => item.id === ticket.id);

    if (alreadyAdded) {
      toast.error(`${ticket.title} is already added to Task Status!`);
      return;
    }

    const newSelectedTickets = [...selectedTickets, ticket];
    setSelectedTickets(newSelectedTickets);
    toast.success(`${ticket.title} added to Task Status`);
  };

  const handleResolvedTask = (ticket) => {
    const newResolvedTasks = [...resolvedTasks, ticket];
    setResolvedTasks(newResolvedTasks);
    const updateSelectedTickets = selectedTickets.filter(
      (t) => t.id !== ticket.id,
    );
    setSelectedTickets(updateSelectedTickets);
    // update the tickets state
    const updateTickets = tickets.filter((t) => t.id !== ticket.id);
    setTickets(updateTickets);
    toast.success(`${ticket.title} marked as resolved!`);
  };

  return (
    <>
      <Navbar></Navbar>
      <Banner
        selectedTickets={selectedTickets}
        resolvedTasks={resolvedTasks}
      ></Banner>
      <div className="flex flex-col lg:flex-row w-11/12 mx-auto my-5 gap-5">
        <div className="w-full lg:w-3/4">
          <Suspense fallback={<h1>Loading...</h1>}>
            <CustomerTickets
              handleCardClick={handleCardClick}
              tickets={tickets}
            ></CustomerTickets>
          </Suspense>
        </div>

        <div className="w-full lg:w-1/4">
          <TaskStatus
            selectedTickets={selectedTickets}
            handleResolvedTask={handleResolvedTask}
            resolvedTasks={resolvedTasks}
          ></TaskStatus>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
