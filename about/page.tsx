"use client";

import React from "react";
import Link from "next/link"; // ✅ For navigation
import Image from "next/image"; // ✅ Next.js Image for optimization
import Topbar from "@/components/Topbar"; // ✅ Topbar component
import Navbar from "@/components/Navbar"; // ✅ Navbar component

// InfoCard Component
const InfoCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow hover:shadow-lg transition duration-300 text-center">
    <div className="text-4xl text-rose-500 mb-4">{icon}</div>
    <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

// About Page Component
const About: React.FC = () => {
  return (
    <>
      {/* Topbar */}
      <Topbar />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto p-6">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center md:items-start py-12 gap-8">
          <div className="md:w-1/2 text-center md:text-left bg-gradient-to-r from-rose-400 to-pink-500 p-8 text-white rounded-2xl shadow-lg">
            <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
            <p className="text-lg mb-6 leading-relaxed">
              Welcome to{" "}
              <span className="font-bold">Be Attractive with Rumi</span> – your
              one-stop shop for{" "}
              <span className="italic">
                premium scents, stylish bags, and timeless watches
              </span>
              . We’re passionate about delivering quality products that define
              elegance and enhance your lifestyle.
            </p>

            {/* 🆕 Explore Collection Button */}
            <Link href="/allProducts">
              <button className="bg-white text-rose-500 font-semibold py-2 px-6 rounded-full shadow hover:bg-rose-50 hover:scale-105 transition duration-300">
                Explore Collection
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/rumi.logo.jpeg"
              alt="Be Attractive Logo"
              width={300}
              height={300}
              className="rounded-2xl shadow-lg"
              priority
            />
          </div>
        </section>

        {/* 🆕 Why Choose Us Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <InfoCard
              icon="🌸"
              title="Luxury Scents"
              description="Our fragrances are long-lasting and made from premium ingredients."
            />
            <InfoCard
              icon="👜"
              title="Stylish Bags"
              description="Chic designs with quality craftsmanship to suit every occasion."
            />
            <InfoCard
              icon="⌚"
              title="Elegant Watches"
              description="Timeless pieces that complement your style and personality."
            />
            <InfoCard
              icon="🚚"
              title="Fast & Reliable Delivery"
              description="We ensure your orders arrive safely and on time, every time."
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
