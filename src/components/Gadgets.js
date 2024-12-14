import React from "react";

const Gadgets = () => {
  const gadgets = [
    {
      name: "Laptop (HP)",
      plans: "$10/day",
      img: "https://images.unsplash.com/photo-1663354027456-ce6a7e07d212?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      action: "Rent Now",
    },
    {
      name: "DSLR Camera",
      plans: "$15/day",
      img: "https://images.unsplash.com/photo-1621958054700-7af166501105?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      action: "Rent Now",
    },
    {
      name: "Gaming Console",
      plans: "$12/day",
      img: "https://images.unsplash.com/photo-1655976796204-308e6f3deaa8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      action: "Rent Now",
    },
    {
      name: "Smartphone (Samsung)",
      plans: "$8/day",
      img: "https://images.unsplash.com/photo-1662369892303-a63aad6266eb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      action: "Rent Now",
    },
    {
      name: "Tablet (iPad)",
      plans: "$12/day",
      img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      action: "Rent Now",
    },
    {
      name: "Drone",
      plans: "$20/day",
      img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      action: "Rent Now",
    },
    {
      name: "Headphones (Sony)",
      plans: "$5/day",
      img: "https://images.unsplash.com/photo-1569696863868-45f498a50ef1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      action: "Rent Now",
    },
    {
      name: "Smartwatch (Apple)",
      plans: "$7/day",
      img: "https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      action: "Rent Now",
    },
  ];
  return (
    <div className="w-[1300px] h-fit pb-10 pt-20 max-lg:w-full " id="gadgets">
      <div className="flex justify-center ">
        <h1 className="text-4xl max-lg:text-3xl font-bold">
          Explore Our Rentals
        </h1>
      </div>
      <div className="grid grid-cols-3 max-lg:grid-cols-1 max-lg:gap-5 gap-10 pt-16 pb-10">
        {gadgets.map((gadget) => {
          return (
            <div
              key={gadget.name}
              className="h-fit hover:shadow-xl p-10  cursor-pointer"
            >
              <div className="h-[300px] max-lg:h-[200px]">
                <img
                  src={gadget.img}
                  className="h-full w-full object-cover hover:scale-95 duration-200"
                  alt={gadget.name}
                />
              </div>
              <div className="mt-4 pt-2 flex justify-between px-2 ">
                <h1 className="font-semibold text-lg">{gadget.name}</h1>
                <p className="">{gadget.plans}</p>
              </div>
              <button className="px-3 py-2 bg-black text-white font-semibold text-sm mt-4 ml-1">
                {gadget.action}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gadgets;
