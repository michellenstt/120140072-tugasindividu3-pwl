import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Beranda = () => {
  const gradientStyle = {
    background: "linear-gradient(116deg, #D0BFFF 59.54%, #F1F3F2 0%)",
  };
  return (
    <div className="">
      <div className="m-auto fixed w-full">
        <Header />
      </div>

      {/* landing page */}
      <div className="landing flex w-full h-screen bg-[#F5F5F5]">
        <div className="left w-[60%] pl-[105px]">
          <div className="wrap  h-full flex flex-col justify-center">
            <div className="head text-[105px] font-extrabold leading-[100px] text-[#D0BFFF]">
              Flower <br />
              <span className="text-[#F8BDEB]">Garden</span>
            </div>
            <div className="subhead text-[18px] mt-8 w-[90%] text-[#D0BFFF]">
              Flower garden, atau taman bunga, adalah area yang dirancang dan
              diatur khusus untuk pertumbuhan dan tampilan berbagai jenis bunga.
              Taman bunga adalah salah satu bentuk seni pertamanan yang paling
              populer di seluruh dunia, dan mereka dapat ditemukan dalam
              berbagai skala, mulai dari kebun pribadi hingga taman-taman besar
              yang dijaga dengan cermat di taman-taman umum atau wisata.
            </div>
            <div className="btn mt-6">
              <a
                className="bg-[#DA0C81] p-2 px-5 rounded border-red-500 inline-block hover:bg-[#E95793] hover:text-[white]"
                href="/tentang"
              >
                Selengkapnya
              </a>
            </div>
          </div>
        </div>
        <div className="right w-[50%] flex h-[100%] items-center">
          <img src="Images/home.png" alt="" />
        </div>
      </div>
      {/* landing page */}

      {/* build */}
      <div className="build bg-[#FFE5E5]">
        <div className="wrap container m-auto flex pt-[140px] pb-[140px] ">
          <div className="left w-[50%] text-[#05040a]">
            <div className="head text-[87px]">
              Beautiful Garden <br /> With Some Flower
            </div>
            <div className="subhead text-[19px] mt-5 ">
              Taman bunga biasanya dikenal karena keindahan dan keragaman bunga
              yang tumbuh di dalamnya. Bunga-bunga ini dapat berasal dari
              berbagai jenis dan warna, dan sering kali dipilih berdasarkan
              estetika, musim tumbuh, dan keselarasan tampilan.
            </div>
          </div>
          <div className="right w-[50%] bg-[#D0BFFF] flex flex-wrap justify-center p-5 gap-5">
            <Card title="Flower">
              <img src="Images/bunga1.png" alt="" />
            </Card>
            <Card title="Flower">
              <img src="Images/bunga1.png" alt="" />
            </Card>
            <Card title="Flower">
              <img src="Images/bunga1.png" alt="" />
            </Card>
            <Card title="Flower">
              <img src="Images/bunga1.png" alt="" />
            </Card>
          </div>
        </div>
      </div>
      {/* build */}

      {/* special */}
      <div className="special py-28 bg-[#e0c6c6]">
        <div
          className="wrap bg-[#D0BFFF] p-16 px-24 w-[980px] rounded-tl-[30px] rounded-br-[30px] mx-auto relative flex"
          style={gradientStyle}
        >
          <div className="left">
            <div className="head text-[35px] font-bold bg-srBlack2 p-2 px-4 rounded italic inline-block">
              Michelle Ayu <br /> Nastiti
            </div>
            <div className="dis font-bold text-[55px] text-srBlack">
              120140072
            </div>
            <div className="Subhead text-[20px] text-srBlack">
              Teknik Informatika
            </div>
          </div>
          <div className="right  absolute right-0 bottom-0">
            <img className="" src="Images/diskon.png" alt="" />
          </div>
        </div>
      </div>
      {/* special */}

      {/* Footer */}
      <div className="bg-srBlack2 ">
        <Footer />
      </div>
      {/* Footer */}
    </div>
  );
};

export default Beranda;
