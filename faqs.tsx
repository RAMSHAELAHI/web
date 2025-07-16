"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"] });

const faqs = [
  {
    question: "What types of products does Rumi offer?",
    answer:
      "Rumi brings you premium scents, elegant watches, timeless bags, and beautifully crafted stoles & scarves to elevate your style.",
  },
  {
    question: "Do your products come with a warranty?",
    answer:
      "Yes, all our watches and bags come with a 1-year warranty. Stoles & scarves are checked for quality to ensure perfection before shipping.",
  },
  {
    question: "How can I order Rumi products online?",
    answer:
      "Simply browse our collection of scents, watches, bags, stoles & scarves, add your favorites to the cart, and checkout securely.",
  },
  {
    question: "Do you offer worldwide shipping?",
    answer:
      "Yes, Rumi offers fast and secure shipping worldwide with tracking details provided after dispatch.",
  },
  {
    question: "What makes Rumi’s products unique?",
    answer:
      "Every product, from our signature scents , watches, bags, to stoles and scarves, is designed with a blend of luxury and minimalism for timeless appeal.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-screen-md mx-auto mt-16 px-4 text-center">
      <h1
        className={`${poppins.className} text-[40px] sm:text-[48px] text-[#272343] font-bold mb-6`}
      >
        Frequently Asked Questions
      </h1>

      <p className="text-[16px] text-[#6B7280] mb-10 sm:text-[18px]">
        Learn more about Rumi’s premium scents, watches, bags, stoles & scarves and why our customers love them worldwide.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#F9F9F9] rounded-xl p-6 text-left shadow hover:shadow-lg transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between w-full text-[18px] font-semibold text-[#272343] focus:outline-none"
            >
              {faq.question}
              {openIndex === index ? (
                <FaChevronUp className="text-[#029FAE]" />
              ) : (
                <FaChevronDown className="text-[#029FAE]" />
              )}
            </button>

            {openIndex === index && (
              <p
                className="mt-4 text-[16px] text-[#4F4F4F] leading-relaxed transition-all duration-500"
              >
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
