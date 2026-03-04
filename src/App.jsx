import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./component/banner/Banner";
import CustomerTickets from "./component/customerTickets/CustomerTickets";
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import TaskStatus from "./component/taskStatus/TaskStatus";

const fetchData = async () => {
  const res = await fetch("tickets.json");
  return res.json();
};

const ticketPromise = fetchData();

function App() {
  const [selectedTickets, setSelectedTickets] = useState([]);

  const handleCardClick = (ticket) => {
    const newSelectedTickets = [...selectedTickets,ticket];
    setSelectedTickets(newSelectedTickets);
  };

  return (
    <>
      <Navbar></Navbar>
      <Banner selectedTickets={selectedTickets}></Banner>
      <div className="flex flex-col lg:flex-row w-11/12 mx-auto my-5 gap-5">
        <div className="w-full lg:w-3/4">
          <Suspense fallback={<h1>Loading...</h1>}>
            <CustomerTickets
              ticketPromise={ticketPromise}
              handleCardClick={handleCardClick}
            ></CustomerTickets>
          </Suspense>
        </div>

        <div className="w-full lg:w-1/4">
          <TaskStatus></TaskStatus>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
