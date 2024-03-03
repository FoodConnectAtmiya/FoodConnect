import React from "react";

// Reusable components for Charity Organization Card
const CharityCard = ({ name, address, charityImageSrc, iconSrc, iconAlt }) => (
  <div className="flex flex-col grow p-2 mx-auto w-full rounded-lg border border-solid bg-zinc-100 border-black border-opacity-10 max-md:mt-8">
    <img loading="lazy" src={charityImageSrc} alt="Charity Organization" className="w-full aspect-[1.72]" />
    <h3 className="mt-2 text-base tracking-wide text-black whitespace-nowrap">{name}</h3>
    <p className="mt-1 text-xs tracking-wide text-black text-opacity-70">{address}</p>
    <div className="flex gap-5 justify-between mt-2 w-full">
      <div className="flex gap-2 my-auto">
        <div className="justify-center px-2 py-1 text-xs tracking-wide text-blue-500 whitespace-nowrap border border-solid aspect-[3.36] bg-blue-500 bg-opacity-10 border-blue-500 border-opacity-10 rounded-[88px]">
          Food need
        </div>
        <div className="flex justify-center items-center px-1.5 border border-solid aspect-square bg-blue-500 bg-opacity-10 border-blue-500 border-opacity-10 h-[22px] rounded-[88px] w-[22px]">
          <img loading="lazy" src={iconSrc} alt={iconAlt} className="w-full aspect-[0.83] fill-blue-500" />
        </div>
      </div>
      <button className="justify-center px-4 py-2 text-base tracking-wide text-green-600 whitespace-nowrap rounded border border-green-600 border-solid" tabIndex="0">
        Donate Here
      </button>
    </div>
  </div>
);

const OrganizationFinder = () => {
  const charityInfo = [
    {
      name: "Shri Ashirwad Charitable Trust",
      address: "10, Gondal Rd, Vaid Vadi, Sardar Nagar, Rajkot, Gujarat 360004",
      charityImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cac299d0f69fd1af8cb88ee5f8b35343153eb22b2c8d6b6da7cb1811dbeb061d?apiKey=3b17c65553124db1b8acbb61fa469d5e&",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/764e6be2d6a26113c78b0c87cc0c3dae3a84a9a4769e71573850f33e8549841f?apiKey=3b17c65553124db1b8acbb61fa469d5e&",
      iconAlt: "Food Donation Icon"
    },
    // Repeat for the rest of charityInfo data
  ];

  return (
    <main className="flex flex-col justify-center items-center px-20 py-12 bg-white max-md:px-5">
      <section className="flex flex-col justify-center px-8 py-4 mt-20 max-w-full rounded-lg border border-solid bg-zinc-100 border-black border-opacity-30 text-black text-opacity-30 w-[609px] max-md:px-5 max-md:mt-10">
        <header className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-between text-base font-medium tracking-wider">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8e467f68fa62d44ae28187756ec272501778017c0321edd0ed3b0f796c33521?apiKey=3b17c65553124db1b8acbb61fa469d5e&" alt="Search Icon" className="my-auto w-4 aspect-square" />
            <h2 className="flex-auto">Search your City</h2>
          </div>
          <div className="justify-center p-1 my-auto text-xs leading-4 text-center whitespace-nowrap aspect-square" tabIndex="0">
            
          </div>
        </header>
      </section>
      <p className="mt-8 text-base tracking-wide text-black text-opacity-70 max-md:max-w-full">16 Organizations found near you</p>
      <section className="mt-4 w-full max-w-[1048px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          {charityInfo.map((charity, index) => (
            <CharityCard key={index} {...charity} />
          ))}
        </div>
      </section>
      <button className="justify-center px-4 py-2 mt-8 text-base tracking-wide text-green-600 whitespace-nowrap rounded border border-green-600 border-solid" tabIndex="0">
        Show more
      </button>
    </main>
  );
};

export default OrganizationFinder;