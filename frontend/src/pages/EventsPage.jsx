import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          {
            allEvents.length > 0 ? (
              <EventCard active={true} data={allEvents && allEvents[0]} />
            )
            : (
              <div className="text-center flex justify-center items-center h-[50vh]">
              <p >No events available</p>
              </div>
            )
          }
        </div>
      )}
    </>
  );
};

export default EventsPage;
