import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    topic: '',
    role: '',
    message: '',
    acceptTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleRoleChange = (role: string) => {
    setFormData(prev => ({ ...prev, role }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="items-center flex w-full flex-col overflow-hidden justify-center pr-[var(--Page-Padding-padding-global,] pl-[var(--Page-Padding-padding-global,] bg-[#FCFCE6;}] py-[112px)] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="max-w-screen-xl w-full max-md:max-w-full">
        <div className="flex w-full gap-[40px_80px] flex-wrap max-md:max-w-full">
          <div className="flex min-w-60 flex-col items-stretch text-black flex-1 shrink basis-[0%] max-md:max-w-full">
            <div className="flex w-full flex-col items-stretch max-md:max-w-full">
              <div className="text-black text-base font-semibold whitespace-nowrap">
                Contact
              </div>
              <div className="w-full font-normal mt-4 max-md:max-w-full">
                <h2 className="text-black text-5xl leading-[1.2] tracking-[-0.48px] max-md:max-w-full max-md:text-[40px]">
                  Get in Touch
                </h2>
                <p className="text-black text-lg mt-6 max-md:max-w-full">
                  Reach out to us for any inquiries or support.
                </p>
              </div>
            </div>
            <div className="flex flex-col text-base font-normal mt-8 py-2">
              <div className="flex gap-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/eff8f4472715485285c95f42d2833a59/00d665faad17d29fc8a55db298eb8d6d4f5d9e3f?placeholderIfAbsent=true"
                  alt="Email icon"
                  className="aspect-[1] object-contain w-6 shrink-0"
                />
                <div className="text-black text-base">
                  <a href="mailto:werunads@alace.ai" className="underline">
                    werunads@alace.ai
                  </a>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/eff8f4472715485285c95f42d2833a59/f2a0eab06cb2bd289731f057fce9c0e6b29989bc?placeholderIfAbsent=true"
                  alt="Phone icon"
                  className="aspect-[1] object-contain w-6 shrink-0"
                />
                <div className="text-black text-base">
                  <a href="tel:+19804300927" className="underline">
                    +1 980 430 0927
                  </a>
                </div>
              </div>
              <div className="self-stretch flex gap-4 mt-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/eff8f4472715485285c95f42d2833a59/12e65ec500e0531ec6e02ad5cfcf9ff5dfc1665a?placeholderIfAbsent=true"
                  alt="Location icon"
                  className="aspect-[1] object-contain w-6 shrink-0"
                />
                <div className="text-black text-base">
                  123 Sample St, Boston, MA 02118, USA
                </div>
              </div>
            </div>
          </div>
          <div className="flex min-w-60 flex-col items-stretch text-base font-normal flex-1 shrink basis-[0%] max-md:max-w-full">
            <form onSubmit={handleSubmit}>
              <div className="flex w-full gap-6 text-black flex-wrap max-md:max-w-full">
                <div className="min-w-60 flex-1 shrink basis-[0%]">
                  <label htmlFor="firstName" className="text-black text-base">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="border-b-[color:var(--Opacity-Neutral-Darkest-15,rgba(0,0,0,0.15))] flex min-h-12 w-full gap-2 bg-transparent mt-2 py-2 border-b border-solid outline-none focus:border-[#3103E8] transition-colors"
                  />
                </div>
                <div className="min-w-60 flex-1 shrink basis-[0%]">
                  <label htmlFor="lastName" className="text-black text-base">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="border-b-[color:var(--Opacity-Neutral-Darkest-15,rgba(0,0,0,0.15))] flex min-h-12 w-full gap-2 bg-transparent mt-2 py-2 border-b border-solid outline-none focus:border-[#3103E8] transition-colors"
                  />
                </div>
              </div>
              <div className="flex w-full gap-6 text-black flex-wrap mt-6 max-md:max-w-full">
                <div className="min-w-60 whitespace-nowrap flex-1 shrink basis-[0%]">
                  <label htmlFor="email" className="text-black text-base">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-b-[color:var(--Opacity-Neutral-Darkest-15,rgba(0,0,0,0.15))] flex min-h-12 w-full gap-2 bg-transparent mt-2 py-2 border-b border-solid outline-none focus:border-[#3103E8] transition-colors"
                  />
                </div>
                <div className="min-w-60 flex-1 shrink basis-[0%]">
                  <label htmlFor="phoneNumber" className="text-black text-base">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="border-b-[color:var(--Opacity-Neutral-Darkest-15,rgba(0,0,0,0.15))] flex min-h-12 w-full gap-2 bg-transparent mt-2 py-2 border-b border-solid outline-none focus:border-[#3103E8] transition-colors"
                  />
                </div>
              </div>
              <div className="w-full mt-6 max-md:max-w-full">
                <label htmlFor="topic" className="text-black text-base max-md:max-w-full">Choose a Topic</label>
                <div className="items-center border-b-[color:var(--Opacity-Neutral-Darkest-15,rgba(0,0,0,0.15))] flex w-full gap-4 text-black flex-wrap bg-transparent mt-2 py-2 border-b border-solid max-md:max-w-full">
                  <select
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleInputChange}
                    className="text-black text-base self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full bg-transparent outline-none"
                  >
                    <option value="">Select One...</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="demo">Demo Request</option>
                    <option value="partnership">Partnership</option>
                  </select>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/eff8f4472715485285c95f42d2833a59/0f4a5a4080e2d00cd7a1fda92cd7570272ed1910?placeholderIfAbsent=true"
                    alt="Dropdown arrow"
                    className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto pointer-events-none"
                  />
                </div>
              </div>
              <div className="w-full mt-6 py-4 max-md:max-w-full">
                <fieldset>
                  <legend className="text-black text-base">Which best describes you?</legend>
                  <div className="w-full text-black mt-4 max-md:max-w-full">
                    <div className="flex min-h-6 w-full gap-6 flex-wrap max-md:max-w-full">
                      <label className="flex min-w-60 items-center gap-3 flex-1 shrink basis-[0%] cursor-pointer">
                        <input
                          type="radio"
                          name="role"
                          value="media-buyer"
                          checked={formData.role === 'media-buyer'}
                          onChange={() => handleRoleChange('media-buyer')}
                          className="border border-[color:var(--Opacity-Neutral-Darkest-15,rgba(0,0,0,0.15))] self-stretch flex w-[18px] shrink-0 h-[18px] bg-transparent my-auto rounded-[100px] border-solid"
                        />
                        <span className="text-black text-base self-stretch my-auto">Media Buyer</span>
                      </label>
                      <label className="flex min-w-60 items-center gap-3 flex-1 shrink basis-[0%] cursor-pointer">
                        <input
                          type="radio"
                          name="role"
                          value="business-owner"
                          checked={formData.role === 'business-owner'}
                          onChange={() => handleRoleChange('business-owner')}
                          className="border border-[color:var(--Opacity-Neutral-Darkest-15,rgba(0,0,0,0.15))] self-stretch flex w-[18px] shrink-0 h-[18px] bg-transparent my-auto rounded-[100px] border-solid"
                        />
                        <span className="text-black text-base self-stretch my-auto">Business Owner</span>
                      </label>
                    </div>
                    <div className="flex min-h-6 w-full gap-6 flex-wrap mt-3.5 max-md:max-w-full">
                      <label className="flex min-w-60 items-center gap-3 whitespace-nowrap flex-1 shrink basis-[0%] cursor-pointer">
                        <input
                          type="radio"
                          name="role"
                          value="agency"
                          checked={formData.role === 'agency'}
                          onChange={() => handleRoleChange('agency')}
                          className="border border-[color:var(--Opacity-Neutral-Darkest-15,rgba(0,0,0,0.15))] self-stretch flex w-[18px] shrink-0 h-[18px] bg-transparent my-auto rounded-[100px] border-solid"
                        />
                        <span className="text-black text-base self-stretch my-auto">Agency</span>
                      </label>
                      <label className="flex min-w-60 items-center gap-3 flex-1 shrink basis-[0%] cursor-pointer">
                        <input
                          type="radio"
                          name="role"
                          value="marketing-director"
                          checked={formData.role === 'marketing-director'}
                          onChange={() => handleRoleChange('marketing-director')}
                          className="border border-[color:var(--Opacity-Neutral-Darkest-15,rgba(0,0,0,0.15))] self-stretch flex w-[18px] shrink-0 h-[18px] bg-transparent my-auto rounded-[100px] border-solid"
                        />
                        <span className="text-black text-base self-stretch my-auto">Marketing Director</span>
                      </label>
                    </div>
                    <div className="flex min-h-6 w-full gap-6 flex-wrap mt-3.5 max-md:max-w-full">
                      <label className="flex min-w-60 items-center gap-3 flex-1 shrink basis-[0%] cursor-pointer">
                        <input
                          type="radio"
                          name="role"
                          value="general-question"
                          checked={formData.role === 'general-question'}
                          onChange={() => handleRoleChange('general-question')}
                          className="border border-[color:var(--Opacity-Neutral-Darkest-15,rgba(0,0,0,0.15))] self-stretch flex w-[18px] shrink-0 h-[18px] bg-transparent my-auto rounded-[100px] border-solid"
                        />
                        <span className="text-black text-base self-stretch my-auto">General Question</span>
                      </label>
                      <label className="flex min-w-60 items-center gap-3 whitespace-nowrap flex-1 shrink basis-[0%] cursor-pointer">
                        <input
                          type="radio"
                          name="role"
                          value="other"
                          checked={formData.role === 'other'}
                          onChange={() => handleRoleChange('other')}
                          className="border border-[color:var(--Opacity-Neutral-Darkest-15,rgba(0,0,0,0.15))] self-stretch flex w-[18px] shrink-0 h-[18px] bg-transparent my-auto rounded-[100px] border-solid"
                        />
                        <span className="text-black text-base self-stretch my-auto">Other</span>
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div className="w-full mt-6 max-md:max-w-full">
                <label htmlFor="message" className="text-black text-base max-md:max-w-full">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Type your message..."
                  className="text-base flex-1 shrink basis-[0%] border-b-[color:var(--Opacity-Neutral-Darkest-15,rgba(0,0,0,0.15))] min-h-[180px] w-full text-black bg-transparent mt-2 pr-3 pt-3 pb-36 border-b border-solid max-md:max-w-full max-md:pb-[100px] outline-none focus:border-[#3103E8] transition-colors resize-none"
                />
              </div>
              <label className="flex items-center gap-2 text-sm text-black mt-6 pb-4 cursor-pointer">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleInputChange}
                  className="rounded border border-[color:var(--Opacity-Neutral-Darkest-15,rgba(0,0,0,0.15))] self-stretch flex w-[18px] shrink-0 h-[18px] bg-transparent my-auto border-solid"
                />
                <span className="text-black text-sm self-stretch my-auto">I accept the Terms</span>
              </label>
              <button
                type="submit"
                className="text-white text-base border border-[color:var(--Color-Blue,#3103E8)] gap-2 font-medium whitespace-nowrap bg-[#3103E8] mt-6 px-3 py-1.5 rounded-xl border-solid hover:bg-[#2502d1] transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
