/* eslint-disable react/prop-types */
import { Typography } from '@material-tailwind/react';

const Banner = ({ handleSearch, handleInput, value }) => {
  return (
    <div className="h-[450px] relative max-w-7xl container  mx-auto  flex flex-col justify-center items-center ">
      <div className="absolute  inset-0 bg-[url(images/bg.png)] bg-contain bg-no-repeat bg-center opacity-10"></div>
      <Typography variant="h1">I Grow By Helping People In Need</Typography>
      <div className="relative mt-5  ">
        <input
          value={value}
          onChange={e => handleInput(e.target.value)}
          className="w-96 px-5 py-[10px] rounded-xl border-gray-500 border-2"
          type="text"
          placeholder="Search here...."
        />
        <button
          onClick={() => handleSearch()}
          className="btn top-0 right-0  bg-[#FF444A] absolute"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
