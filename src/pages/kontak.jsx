/* eslint-disable react-hooks/rules-of-hooks */
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useState } from "react";

const Kontak = () => {
  const [name, setName] = useState("");
  const [saran, setSaran] = useState("");
  const [count, setCount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + 1);
    console.log("Nama:", name);
    console.log("Saran:", saran);

    // Membersihkan input form
    setName("");
    setSaran("");
  };

  return (
    <div>
      <div className="m-auto fixed w-full">
        <Header />
      </div>
      {/* main content */}
      <div className="bg-[#F8BDEB] py-[100px] mx-auto container">
        <div className="wrap flex justify-center items-center">
          <div className="right w-[40%] bg-red\">
            <div className=" p-5 rounded-lg min-h-[20rem]">
              <p className="text-xl font-bold mb-4 text-black">Contact Us : </p>
              <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="Nama" className="text-black">Name</label>
                <input
                  id="Nama"
                  className="border-2 border-black p-3 text-srBlack"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                />
                <label htmlFor="Saran" className="mt-3 text-black">
                  Message
                </label>
                <textarea
                  className="border-2 border-black p-3 text-srBlack"
                  name=""
                  id="Saran"
                  cols="30"
                  rows="5"
                  value={saran}
                  onChange={(e) => setSaran(e.target.value)}
                  placeholder="Your Message"
                ></textarea>
                <button
                  className="bg-[#DA0C81] hover:bg-[#E95793] text-white px-4 py-2  mt-5 mb-2"
                  type="submit"
                >
                  Submit
                </button>
              </form>
              <p className="text-xl font-light mb-4 text-center text-black">
              Incoming Messages : {count}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* main content */}
      <div className="bg-srBlack2 ">
        <Footer />
      </div>
    </div>
  );
};

export default Kontak;
