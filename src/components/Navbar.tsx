import React from 'react';

const Navbar = () => {
  return (
    <header className="justify-center items-stretch flex min-h-[72px] w-full flex-col pr-[var(--Page-Padding-padding-global,] pl-[var(--Page-Padding-padding-global,] bg-white pt-0 pb-[64px)] max-md:max-w-full max-md:px-5">
      <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
        <div className="self-stretch flex min-h-10 items-center justify-center w-20 my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/eff8f4472715485285c95f42d2833a59/de9b1bb50a8e68643da1b9e595fe0ee08fc2fb03?placeholderIfAbsent=true"
            alt="Alace.ai Logo"
            className="aspect-[2.33] object-contain w-[84px] self-stretch my-auto"
          />
        </div>
        <div className="self-stretch flex min-w-60 items-center gap-8 text-base justify-center my-auto">
          <nav className="self-stretch flex items-center gap-8 text-black font-normal my-auto">
            <a href="#features" className="text-black text-base self-stretch gap-1 whitespace-nowrap my-auto hover:opacity-80 transition-opacity">
              Features
            </a>
            <a href="#about" className="text-black text-base self-stretch gap-1 my-auto hover:opacity-80 transition-opacity">
              About Us
            </a>
          </nav>
          <div className="self-stretch flex items-center gap-4 font-medium justify-center my-auto">
            <button className="text-black text-base self-stretch border border-[color:var(--Opacity-Neutral-Darkest-15,rgba(0,0,0,0.15))] gap-2 my-auto px-2.5 py-1 rounded-xl border-solid hover:bg-gray-50 transition-colors">
              Login/Sign Up
            </button>
            <button className="text-white text-base self-stretch border border-[color:var(--Color-Blue,#3103E8)] gap-2 bg-[#3103E8] my-auto px-2.5 py-1 rounded-xl border-solid hover:bg-[#2502d1] transition-colors">
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
