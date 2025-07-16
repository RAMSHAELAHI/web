"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import { toast } from "sonner";
import Link from "next/link";

const leatherProducts = [
  {
    id: 1,
    name: "Brown Leather",
    price: 2499,
    image: "/images/leatherwatch.jpeg",
    tag: "New",
  },
];

const LeatherCollection = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <Navbar />

      {/* 🟤 Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-100 to-rose-50 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#6b4f3b] mb-4">
            Leather Watch Collection
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover elegance and craftsmanship in our premium leather watch
            straps. Perfect for timeless style and comfort.
          </p>
        </div>
      </section>

      {/* 🛍 Product Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-[#6b4f3b] mb-10">
            Featured Leather Watches
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leatherProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition relative"
              >
                <Link href={`/watchiesmen/leather/${product.id}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </Link>

                {/* 🔖 Tag */}
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-[#6b4f3b] text-white text-xs px-3 py-1 rounded-full uppercase">
                    {product.tag}
                  </span>
                )}

                {/* 📦 Info */}
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-[#6b4f3b] font-bold text-lg mt-1">
                    PKR {product.price.toLocaleString()}
                  </p>
                  <button
                    onClick={() => {
                      addToCart({
                        _id: product.id.toString(),
                        title: product.name,
                        price: product.price,
                        imgUrl: product.image,
                        quantity: 1,
                      });
                      toast.success("Added to cart 👜");
                    }}
                    className="mt-3 inline-flex items-center bg-[#6b4f3b] text-white px-4 py-2 rounded-full hover:bg-[#5a3e2e]"
                  >
                    <ShoppingBag className="h-4 w-4 mr-1" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeatherCollection;
