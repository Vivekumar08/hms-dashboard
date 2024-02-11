import React from "react";
import SideBar from "../containers/SideBar";
import MenuSearch from "../containers/MenuSearch";
import Navbar from "../components/Navbar";
import SelectionAppointment from "../containers/SelectionAppointment";
import CardComponent from "../components/CardComponent";
import Button from "../components/Button";
import DoubleBooking from "../containers/DoubleBooking";

const Home = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className=" flex w-full p-10 h-[90vh]">
      <div className="w-[35%]">
        <MenuSearch />
        <SideBar />
      </div>
      <div className="w-full justify-around">
        <div className="flex w-full justify-around">
          <Navbar />
          <span className="w-[20%]">
            <Button
              title={"AI Assistant"}
              className={"rounded-3xl"}
              onClick={() => {}}
            />
          </span>
        </div>
        <div className="flex w-full mx-6">
          <div className="w-[45%]">
            <SelectionAppointment />

            <CardComponent
              name={"Rohan Babbar"}
              snapshotInfo={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, facilis deleniti. Sed praesentium tempora consequuntur cum itaque consectetur, provident quis animi doloribus est culpa sunt pariatur harum! Labore, ullam reprehenderit!"
              }
            />
            <hr className="h-[3px] bg-black" />
            <h2 className="text-lg my-2 text-violet-600 font-bold">
              Schedule{" "}
              {`${new Date().getUTCDate()}/${
                months[new Date().getUTCMonth()]
              }/ ${new Date().getUTCFullYear()}`}
            </h2>
            <CardComponent
              className={"border border-black rounded-lg  px-3"}
              details={{
                name: "Rohan Babbar",
                time: "11:30-12:00",
                purpose: "Follow up",
                tag: "10% No Show",
              }}
              tagPosition={"right-0"}
            />
            <CardComponent
              className={"border border-black rounded-lg  px-3"}
              details={{
                name: "Rohan Babbar",
                time: "12:30-1:00",
                purpose: "Onset Pain",
                tag: "10% No Show",
              }}
              tagPosition={"right-0"}
            />
          </div>
          <div className="w-[50%] mx-6">
            <DoubleBooking />

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
