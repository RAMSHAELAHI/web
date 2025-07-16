import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

// Initialize stylish font
const playfair = Playfair_Display({
  weight: ["800", "700"],
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-[#F0F2F3] to-white">
      <div className="w-full max-w-screen-xl flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10 lg:px-16 py-10 sm:py-16 rounded-2xl shadow-lg bg-white">
        {/* Text Section */}
        <div className="w-full sm:w-[520px] mb-8 sm:mb-0">
          <h1
            className={`text-3xl sm:text-8xl lg:text-5xl font-bold text-[#272343] leading-tight mb-8 ${playfair.className}`}
          >
            Attractions by Rumi
          </h1>
          <p className="text-base sm:text-lg lg:text-xl emerald-700 mb-6">
            Glow your aura with decent and charming accessories!
          </p>

          {/* Shop Now Button */}
          <div className="flex justify-center sm:justify-start">
            <Link
              href="/allProducts"
              className="inline-flex items-center gap-2 bg-[#029FAE] text-white font-medium py-3 px-6 rounded-full shadow-md hover:bg-[#027f8d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#029FAE] transition-all duration-300"
            >
              Shop Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12h18m-6-6l6 6-6 6"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full sm:w-[480px] flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/abr.png"
              alt="Hero Product"
              width={434}
              height={584}
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
