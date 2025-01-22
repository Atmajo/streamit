import React from "react";

const Page = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl font-extrabold">
        Connect to your
        <br />
        Stream App
      </h1>
      <div className="relative flex flex-row gap-7">
        <p className="py-4 text-normal">The best app</p>
        <img src="/Robot.png" alt="robot" className="absolute top-2" />
        <p className="py-4 text-normal">for streaming</p>
      </div>
    </section>
  );
};
 
export default Page;