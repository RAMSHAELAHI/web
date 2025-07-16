import React from "react";
import { Poppins } from "next/font/google";
import { BsTrophy, BsShieldCheck } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";
import { GiDiamondTrophy } from "react-icons/gi";
import { FaLeaf, FaTags } from "react-icons/fa"; // ✅ Added FaTags for price icon

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"] });

const qualities = [
  {
    icon: <BsTrophy className="w-10 h-10 text-[#029FAE]" />,
    title: "Premium Quality",
    description: "Crafted from premium materials for timeless elegance.",
  },
  {
    icon: <GoVerified className="w-10 h-10 text-[#029FAE]" />,
    title: "Authenticity Guaranteed",
    description: "Every piece is certified and verified for your trust.",
  },
  {
    icon: <GiDiamondTrophy className="w-10 h-10 text-[#029FAE]" />,
    title: "Exclusive Designs",
    description: "Limited collections designed to make you stand out.",
  },
  {
    icon: <MdSupportAgent className="w-10 h-10 text-[#029FAE]" />,
    title: "Personalized Support",
    description: "Dedicated agents ready to assist you possible available time.",
  },
  {
    icon: <FaLeaf className="w-10 h-10 text-[#029FAE]" />,
    title: "Sustainable Craftsmanship",
    description: "Made with care for people & the planet.",
  },
  {
    icon: <BsShieldCheck className="w-10 h-10 text-[#029FAE]" />,
    title: "Safe & Secure Shipping",
    description: "Every order is packed with care and shipped safely.",
  },
  {
    icon: <FaTags className="w-10 h-10 text-[#029FAE]" />, // ✅ New icon
    title: "Unbeatable Prices", // ✅ New feature
    description: "Premium quality at prices that fit your lifestyle.",
  },
];

const ContactSection = () => {
  return (
    <div className="w-full bg-[#F4F4F4] py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* ✅ New Heading */}
        <h2
          className={`${poppins.className} text-3xl sm:text-4xl font-bold text-center mb-10 text-[#272343]`}
        >
          What Makes Our Brand Different
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualities.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-all duration-300"
            >
              {item.icon}
              <div>
                <h3
                  className={`${poppins.className} text-lg sm:text-xl font-semibold text-[#272343]`}
                >
                  {item.title}
                </h3>
                <p
                  className={`${poppins.className} text-sm sm:text-base text-[#6B7280]`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
