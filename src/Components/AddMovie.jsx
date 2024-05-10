import React, { useContext } from "react";
import Wave from "../Assets/Images/Png/Wave.png";
import { Link } from "react-router-dom";
import { MyContext } from "./ContextUse";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddMovie() {
  const { Done } = useContext(MyContext);
  if (Done === true) {
    toast("login");
  }
  return (
    <>
      <div className="px-4">
        <div className="flex flex-col justify-center items-center min-h-screen">
          <h2 className="text-white font-semibold text-4xl sm:text-5xl text-center">
            Your movie list is empty
          </h2>
          <Link to="/CreateMovie">
            <button className=" py-4 px-7 bg-[#2BD17E] mt-6 w-full sm:w-auto sm:mt-10 rounded-lg ff_Montserrat font-bold text-[16px] text-white">
              Add a new movie
            </button>
          </Link>
        </div>
        <img
          className=" absolute bottom-0 start-0 w-full"
          src={Wave}
          alt="Wave"
        />
      </div>
      <ToastContainer />
    </>
  );
}

export default AddMovie;
