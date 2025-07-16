'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';
import { toast } from 'sonner';
import Link from 'next/link';

const WatchiesWomen = () => {
  const { addToCart } = useCart();

  const womenWatches = [
    {
      id: 1,
      name: 'Rich Gold Elegant Watch',
      price: 1999,
      image: '/images/fancy 3.jpeg',
      tag: '1 Piece',
    },
    {
      id: 2,
      name: 'Black Aura',
      price: 1999,
      image: '/images/6 aura.jpeg',
      tag: 'Limited',
    },
    {
      id: 3,
      name: 'Classic Silver Dial',
      price: 1999,
      image: '/images/wt.jpeg',
      tag: '1 Piece',
    },
    {
      id: 4,
      name: 'Fancy Neavy Blue Watch',
      price: 1999,
      image: '/images/fancy 2.jpeg',
      tag: '1 Piece',
    },
    {
      id: 5,
      name: 'Fancy Rose Copper',
      price: 1999,
      image: '/images/w5.jpeg',
    },
    {
      id: 6,
      name: 'Classic Women',
      price: 1499,
      image: '/images/w6.jpeg',
    },
  ];

  return (
    <div>
      <Navbar />

      {/* ✅ Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-100 to-rose-50 py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Image
            src="/images/women watches.webp"
            alt="Women Watches Hero"
            width={600}
            height={500}
            className="rounded-2xl shadow-xl object-cover w-full"
          />
          <div className="text-center md:text-left">
            <h2 className="text-5xl font-bold text-[#b13368] mb-4 leading-tight">
              Timeless <br />
              <span className="text-[#272343]">Elegance</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Discover our graceful collection of watches designed for modern women.
            </p>
            <Link
              href="#shop"
              className="bg-[#b13368] text-white px-4 py-2 rounded-full font-medium flex items-center justify-center w-1/2 mx-auto md:mx-0 hover:bg-[#9b2c5b]"
            >
              Shop Women’s Watches <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Product Cards */}
      <section id="shop" className="py-16 bg-white">
        <h2 className="text-3xl font-semibold text-center text-[#b13368] mb-10">
          Women's Watches
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
          {womenWatches.map((watch) => (
            <div
              key={watch.id}
              className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition"
            >
              <Link href={`/watchieswomen/${watch.id}`}>
                <div className="relative cursor-pointer">
                  <Image
                    src={watch.image}
                    alt={watch.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  {watch.tag && (
                    <span className="absolute top-3 left-3 bg-[#b13368] text-white text-xs px-3 py-1 rounded-full uppercase">
                      {watch.tag}
                    </span>
                  )}
                </div>
              </Link>

              <div className="p-4 text-center">
                <Link href={`/watchieswomen/${watch.id}`}>
                  <h3 className="text-lg font-semibold text-gray-800 hover:underline">
                    {watch.name}
                  </h3>
                </Link>
                <p className="text-[#b13368] font-bold text-lg mt-1">
                  PKR {watch.price.toLocaleString()}
                </p>
                <button
                  onClick={() => {
                    addToCart({
                      _id: watch.id.toString(),
                      title: watch.name,
                      price: watch.price,
                      imgUrl: watch.image,
                      quantity: 1,
                    });
                    toast.success('Added to cart!');
                  }}
                  className="mt-3 inline-flex items-center bg-[#b13368] text-white px-4 py-2 rounded-full hover:bg-[#9b2c5b]"
                >
                  <ShoppingBag className="h-4 w-4 mr-1" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WatchiesWomen;
