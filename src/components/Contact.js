import React from "react";

const Contact = () => {
  return (
    <div
      className="h-fit  text-white pb-20 w-[1300px] max-lg:w-full "
      id="contact"
    >
      <div className="flex justify-center mt-20">
        <h1 className="text-4xl font-bold max-lg:text-3xl ">Get in Touch</h1>
      </div>
      <div className="flex justify-center mt-10">
        <form className="flex flex-col  w-6/12 max-lg:w-10/12">
          <label className="text-lg max-lg:text-sm text-neutral-300 ">
            Name
          </label>
          <input
            type="text"
            className="bg-transparent border-b border-neutral-500  p-3"
          />
          <label className="text-lg max-lg:text-sm text-neutral-300 mt-10">
            Email
          </label>
          <input
            type="text"
            className="bg-transparent border-b border-neutral-500 p-3"
          />
          <label className="text-lg max-lg:text-sm text-neutral-300 mt-10 ">
            Message
          </label>
          <textarea className="bg-transparent border-b border-neutral-500  p-3"></textarea>
          <button className="py-5 mt-10 max-lg:text-xs  bg-white text-black font-bold">
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
