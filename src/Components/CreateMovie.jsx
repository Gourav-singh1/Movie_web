import React, { useState } from "react";
import AddImage from "../Assets/Images/Svg/AddImage.svg";
import Wave from "../Assets/Images/Png/Wave.png";

function CreateMovie() {
  const [Images, setImages] = useState(false);
  const [createData, setCreateData] = useState({
    title: "",
    year: "",
  });
  const sendData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCreateData({ ...createData, [name]: value });
  };

  const SumbitMovie = (e) => {
    e.preventDefault();
    setCreateData({
      title: "",
      year: "",
    });
    setImages(false);

    // const movieName = createData;
    const movieName = { ...createData, file: Images };
    fetch("http://localhost:8000/movies/profile", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(movieName),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <section className=" relative">
        <div className="my_container mx-auto px-3 min-h-screen flex  flex-col  justify-center z-10 relative">
          <h2 className=" text-white ff_Montserrat text-3xl sm:text-5xl font-semibold">
            Create a new movie
          </h2>
          <form onSubmit={SumbitMovie}>
            <div className="mt-6 md:mt-20 sm:flex justify-between">
              <div>
                {Images && (
                  <img
                    className=" sm:w-[210px]  md:w-[300px] lg:w-[375px] h-[230px]  md:h-[325px] lg:h-[400px]"
                    src={URL.createObjectURL(Images)}
                    alt="movie image"
                  />
                )}
                {Images === false ? (
                  <div className="">
                    <label
                      htmlFor="AddImage"
                      className="text-white ff_Montserrat text-sm bg-[#224957] border-dashed border-white border-2 sm:w-[210px]  md:w-[300px] lg:w-[375px] h-[230px]  md:h-[325px] lg:h-[400px] flex justify-center items-center rounded-md flex-col cursor-pointer"
                    >
                      <img src={AddImage} alt="AddImage" />
                      Drop an image here
                    </label>
                    <input
                      type="file"
                      id="AddImage"
                      accept="image/*"
                      onChange={(e) => setImages(e.target.files[0])}
                      className="hidden"
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className=" sm:w-96 mt-4 sm:mt-0">
                <input
                  required
                  type="text"
                  name="title"
                  value={createData.title}
                  onChange={sendData}
                  className="rounded-lg py-3 px-4 w-full bg-[#224957] outline-none border-0 Form_placeholder text-white"
                  placeholder="Title"
                />
                <input
                  required
                  type="text"
                  name="year"
                  value={createData.year}
                  onChange={sendData}
                  className="rounded-lg py-3 px-4 w-full sm:w-auto bg-[#224957] outline-none border-0 Form_placeholder text-white mt-6"
                  placeholder="Publishing year"
                />
                <div className=" flex">
                  <button className=" py-4 px-14 bg-transparent border-2 mt-6 w-full sm:w-auto sm:mt-10 rounded-lg ff_Montserrat font-bold text-[16px] text-white">
                    Cancel
                  </button>
                  <button className=" py-4 px-14 border-2 border-[#2BD17E] ms-2 sm:ms-4 bg-[#2BD17E] mt-6 w-full sm:w-auto sm:mt-10 rounded-lg ff_Montserrat font-bold text-[16px] text-white">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <img
          className=" absolute bottom-0 start-0 w-full"
          src={Wave}
          alt="Wave"
        />
      </section>
    </>
  );
}

export default CreateMovie;
