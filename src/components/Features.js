import React from "react";
import { MdDevicesOther } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiSecurePaymentLine } from "react-icons/ri";
const Features = () => {
  const Feature = [
    {
      title: "Wide Variety of Gadgets",
      desc: "From high-performance laptops to professional-grade cameras, we have gadgets to fit every need.",
      icon: <MdDevicesOther />,
    },
    {
      title: "Affordable Pricing",
      desc: "Transparent, budget-friendly pricing for all your short-term gadget needs.",
      icon: <GiTakeMyMoney />,
    },
    {
      title: "Quick Delivery",
      desc: "Get your gadgets delivered straight to your doorstep in no time!",
      icon: <CiDeliveryTruck />,
    },
    {
      title: "Flexible Rental Plans",
      desc: "Daily, weekly, or monthly plans tailored to suit your requirements.",
      icon: <RiSecurePaymentLine />,
    },
  ];
  return (
    <div className="w-[1300px]  p-10 pt-20 max-lg:w-full  " id="features">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold text-center">
          Why Choose QuickRent?
        </h1>
      </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-1 gap-10 p-10  max-lg:p-0  max-lg:pt-10 pt-20">
        {Feature.map((item) => {
          return (
            <div
              key={item.title}
              className="px-10 py-10 bg-white hover:scale-95 cursor-pointer duration-200 shadow-lg h-[220px]"
            >
              <div className="flex gap-2 flex-col items-center">
                <p className="text-4xl">{item.icon}</p>
                <p className="text-lg font-semibold font-sans">{item.title}</p>
              </div>
              <div className="mt-3  text-neutral-800 text-center  leading-6 ">
                <p className="font-sans text-sm">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
