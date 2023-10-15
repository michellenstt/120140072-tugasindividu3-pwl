

function Header() {
  return (
    <div className="header container m-auto  flex justify-between h-[60px] items-center bg-[#FFF8C9]">
        <div className="left text-[#D0BFFF] font-bold text-[18px]">Flower <br /> <span className="text-[#F8BDEB] font-bold">Garden</span> </div>
        <div className="right text-[17px] flex gap-7">
        <a href="/" className={`text-lg ${location.pathname === '/' ? 'font-semibold' : ''} text-[#D0BFFF]`}>Beranda</a>
                <a href="/tentang" className={`text-lg ${location.pathname === '/tentang' ? 'font-semibold' : ''} text-[#D0BFFF]`}>Tentang</a>
                <a href="/kontak" className={`text-lg ${location.pathname === '/kontak' ? 'font-semibold' : ''} text-[#D0BFFF]`}>Kontak</a>
        </div>
    </div>
  );
}

export default Header;
