import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="items-center flex w-full flex-col overflow-hidden justify-center pr-[var(--Page-Padding-padding-global,] pl-[var(--Page-Padding-padding-global,] bg-[#F2F2F2;}] py-[80px)] max-md:max-w-full max-md:px-5">
      <div className="max-w-screen-xl w-full max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="flex w-full gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
            <div className="max-w-[560px] flex min-w-60 flex-col text-sm text-black font-semibold flex-1 shrink basis-[0%] max-md:max-w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/eff8f4472715485285c95f42d2833a59/16ea8c4eb156fe8ffb130594a4fbe0325309238c?placeholderIfAbsent=true"
                alt="Alace.ai Logo"
                className="aspect-[2.33] object-contain w-[84px]"
              />
              <nav className="flex gap-8 justify-center mt-6 max-md:max-w-full">
                <a href="#home" className="text-black text-sm hover:opacity-80 transition-opacity">Home Page</a>
                <a href="#about" className="text-black text-sm hover:opacity-80 transition-opacity">About Us</a>
                <a href="#contact" className="text-black text-sm hover:opacity-80 transition-opacity">Contact Us</a>
                <a href="#blog" className="text-black text-sm hover:opacity-80 transition-opacity">Blog Posts</a>
                <a href="#support" className="text-black text-sm hover:opacity-80 transition-opacity">Support Center</a>
              </nav>
            </div>
            <div className="min-w-60 w-[400px]">
              <h3 className="text-black text-base font-semibold">
                Sign up for latest media buying tips
              </h3>
              <div className="w-full mt-4">
                <form onSubmit={handleEmailSubmit} className="flex min-h-12 w-full gap-4 text-base">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="text-base self-stretch flex-1 shrink basis-6 border-b-[color:var(--Opacity-Neutral-Darkest-15,rgba(0,0,0,0.15))] min-w-60 gap-2 text-black font-normal bg-transparent py-2 border-b border-solid outline-none focus:border-[#3103E8] transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="text-black text-base self-stretch border border-[color:var(--Opacity-Neutral-Darkest-15,rgba(0,0,0,0.15))] gap-2 font-medium px-3 py-1.5 rounded-xl border-solid hover:bg-gray-100 transition-colors"
                  >
                    Join Now
                  </button>
                </form>
                <div className="flex min-h-[18px] w-full gap-1 text-xs text-black font-normal mt-3">
                  <span className="text-black text-xs">By subscribing you agree to our</span>
                  <a href="#privacy" className="text-black underline decoration-solid decoration-auto underline-offset-auto hover:opacity-80 transition-opacity">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full text-sm text-black font-normal mt-12 max-md:max-w-full max-md:mt-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/eff8f4472715485285c95f42d2833a59/d9f6c833e691a8feffc0aa6193d26275af3d238c?placeholderIfAbsent=true"
              alt="Decorative divider"
              className="aspect-[7.35] object-contain w-full max-md:max-w-full"
            />
            <div className="w-full mt-12 max-md:max-w-full max-md:mt-10">
              <div className="border min-h-px w-full bg-[rgba(0,0,0,0.15)] border-[rgba(0,0,0,0.15)] border-solid max-md:max-w-full" />
              <div className="flex min-h-[21px] w-full gap-[40px_100px] justify-between flex-wrap mt-8 max-md:max-w-full">
                <nav className="flex min-w-60 gap-6 underline">
                  <a href="#privacy" className="text-black text-sm underline decoration-solid decoration-auto underline-offset-auto hover:opacity-80 transition-opacity">
                    Privacy Policy
                  </a>
                  <a href="#terms" className="text-black text-sm underline decoration-solid decoration-auto underline-offset-auto hover:opacity-80 transition-opacity">
                    Terms of Service
                  </a>
                  <a href="#cookies" className="text-black text-sm underline decoration-solid decoration-auto underline-offset-auto hover:opacity-80 transition-opacity">
                    Cookie Settings
                  </a>
                </nav>
                <div className="text-black text-sm">
                  © 2025 Alace.AI. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
