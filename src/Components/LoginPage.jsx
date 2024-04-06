import React, { useState } from "react";
import Wave from "../Assets/Images/Png/Wave.png";
import { Link } from "react-router-dom";

function LoginPage() {
  const [FomeValue, setFomeValue] = useState([{ email: "", password: "" }]);
  const inputValues = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFomeValue([...FomeValue]);
  };

  const loginForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="flex justify-center items-center  h-screen">
        <div className="w_320">
          <h2 className="text-center text-[white] text-[64px] font-semibold ff_Montserrat">
            Sign in
          </h2>
          <div className="pt-10">
            <form onSubmit={loginForm}>
              <input
                type="text"
                className="rounded-lg py-3 px-4 w-full bg-[#224957] outline-none border-0 Form_placeholder text-white"
                required
                name="email"
                value={FomeValue.email}
                onChange={inputValues}
                placeholder="Email"
              />
              <input
                type="text"
                className="rounded-lg py-3 px-4 w-full bg-[#224957] outline-none border-0 Form_placeholder text-white mt-6"
                required
                name="Password"
                value={FomeValue.password}
                onChange={inputValues}
                placeholder="Password"
              />
              <div className="flex justify-center items-center mt-6">
                <input
                  type="checkbox"
                  name=""
                  id="Remember"
                  className="h-4 w-4"
                />
                <label
                  htmlFor="Remember"
                  className="ff_Montserrat font-normal text-ellipsis[14px] text-white ms-2 cursor-pointer"
                >
                  Remember me
                </label>
              </div>

              <button className=" py-4 bg-[#2BD17E] w-full mt-6 rounded-lg ff_Montserrat font-bold text-[16px] text-white">
                Lonin
              </button>
            </form>

            <Link
              to="/SignUp"
              className="text-center text-[white] text-[16px] font-normal ff_Montserrat mt-4"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <img
        className=" absolute bottom-0 start-0 w-full"
        src={Wave}
        alt="Wave"
      />
    </>
  );
}

export default LoginPage;
