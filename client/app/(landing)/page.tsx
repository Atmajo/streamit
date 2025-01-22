import React from "react";

const Page = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl font-extrabold">
        Connect to your
        <br />
        Stream App
      </h1>
      <div className="relative">
        <p className="py-4 text-normal">The best app for streaming</p>
        <img src="/Robot.png" alt="robot" className="absolute top-0" />
      </div>
    </section>
  );
};

export default Page;
