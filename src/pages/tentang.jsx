/* eslint-disable react-hooks/rules-of-hooks */
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { useState } from "react"
import axios from "axios";

const Tentang = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true);
    axios.get('https://api.api-ninjas.com/v1/dadjokes?limit=1',{
      headers: { 'X-Api-Key': 'loZiraunTsZCJZ+LSuRlCQ==TD6rLCH5PPs5nXmr'}
    })
      .then((response) => {
        setData(response.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  };
  return (
    <div>
      <div className="m-auto fixed w-full">
        <Header />
      </div>
      {/* main content */}
      <div className="bg-[#FFE5E5] py-[100px] mx-auto container">
        <div className="wrap flex justify-center items-center">
          <div className="left w-[60%] flex items-center justify-center">
            <img src="Images/Tentang.png" className="w-[500px]" alt="" />
          </div>
          <div className="right w-[40%]">
            <div className="head text-[40px] font-extrabold italic text-center">Tentang <br /> Flower <span className="text-[#D0BFFF]">Garden</span></div>
            <div className="text mt-2 text-center text-[#F8BDEB]">
            Slum Dunk is a basketball store that provides high-quality gear and equipment for basketball enthusiasts. With knowledgeable staff committed to delivering top-notch service, we are the go-to destination for basketball players, from beginners to professionals. We offer products from leading basketball brands and strive to support and promote the sport within the local community. Slum Dunk is your best choice for all your basketball needs.
            </div>
          </div>
        </div>
      </div>
      {/* main content */}
      {/* dad joke api */}
      <div className="bg-[#D0BFFF]">
        <div className="wrap container mx-auto py-[100px] flex justify-center items-center">
          <div className="card bg-[#FFE5E5] w-[800px] h-[350px] p-10">
            <div className="head text-[40px] font-bold text-center text-srBlack2">Ayo Coba Di pencet</div>
            <div className="joke text-center text-[#DA0C81]">Ini tempat bercerita</div>
            <button className="bg-srWhite text-srBlack px-4 py-2  mt-2 mb-3 block mx-auto" onClick={fetchData} disabled={loading} >Tekan!!</button>
            <div className="text mt-2 text-center text-srBlack text-[20px]">{data.joke}</div>
          </div>
        </div>
      </div>
      {/* dad joke api */}
      <div className="bg-srBlack2 ">
        <Footer />
      </div>
    </div>
  )
}

export default Tentang