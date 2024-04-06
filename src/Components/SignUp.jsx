import React, { useState } from "react";
import Wave from "../Assets/Images/Png/Wave.png";

function SignUp() {
  const [FomeValue, setFomeValue] = useState([
    { name: "", email: "", number: "", password: "" },
  ]);
  const inputValues = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFomeValue({ ...FomeValue, [name]: value });
  };
  const loginForm = (e) => {
    e.preventDefault();
    setFomeValue({
      name: "",
      email: "",
      number: "",
      password: "",
    });
    const SubmitValue = FomeValue;

    fetch("http://localhost:8000/movie/signUp", {
      method: "POST",
      Headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(SubmitValue),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <div className="flex justify-center items-center  h-screen">
        <div className="w_320">
          <h2 className="text-center text-[white] text-[64px] font-semibold ff_Montserrat">
            Sign Up
          </h2>
          <div className="pt-10">
            <form onSubmit={loginForm}>
              <input
                type="text"
                className="rounded-lg py-3 px-4 w-full bg-[#224957] outline-none border-0 Form_placeholder text-white"
                required
                name="name"
                value={FomeValue.name}
                onChange={inputValues}
                placeholder="Name"
              />
              <input
                type="text"
                className="rounded-lg py-3 px-4 w-full bg-[#224957] outline-none border-0 Form_placeholder text-white mt-6"
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
                name="number"
                value={FomeValue.number}
                onChange={inputValues}
                placeholder="Number"
              />
              <input
                type="text"
                className="rounded-lg py-3 px-4 w-full bg-[#224957] outline-none border-0 Form_placeholder text-white mt-6"
                required
                name="password"
                value={FomeValue.password}
                onChange={inputValues}
                placeholder="Password"
              />

              <button className=" py-4 bg-[#2BD17E] w-full mt-6 rounded-lg ff_Montserrat font-bold text-[16px] text-white">
                Submit
              </button>
            </form>
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

export default SignUp;
