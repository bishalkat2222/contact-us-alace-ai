import React from 'react';

const CTASection = () => {
  return (
    <section className="flex flex-col items-center overflow-hidden relative min-h-[459px] w-full justify-center pr-[var(--Page-Padding-padding-global,] pl-[var(--Page-Padding-padding-global,] py-[112px)] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/eff8f4472715485285c95f42d2833a59/0577273542ee2fb8b98a8e32c4a311a61abd4528?placeholderIfAbsent=true"
        alt="Background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative max-w-screen-xl flex w-full flex-col max-md:max-w-full">
        <div className="max-w-screen-md items-stretch flex w-[768px] flex-col max-md:max-w-full">
          <div className="w-full text-white font-normal max-md:max-w-full">
            <h2 className="text-5xl leading-[58px] tracking-[-0.48px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
              Transform Your Advertising Experience
            </h2>
            <p className="text-lg mt-6 max-md:max-w-full">
              Discover how our AI can optimize your meta ads effortlessly and drive better results.
            </p>
          </div>
          <div className="flex gap-4 text-base font-medium mt-8">
            <button className="self-stretch border border-[color:var(--Color-White,#FFF)] bg-white gap-2 text-black whitespace-nowrap px-3 py-1.5 rounded-xl border-solid hover:bg-gray-100 transition-colors">
              Waitlist
            </button>
            <button className="self-stretch border border-[color:var(--Opacity-White-20,rgba(255,255,255,0.20))] gap-2 text-white px-3 py-1.5 rounded-xl border-solid hover:bg-white/10 transition-colors">
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
