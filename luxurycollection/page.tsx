'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';
import { toast } from 'sonner';

const luxuryProducts = [
  {
    id: 1,
    name: 'Diamond Royale Watch',
    price: 999,
    image: '/images/luxury1.jpeg',
    tag: 'Exclusive',
  },
  {
    id: 2,
    name: 'Elite Sapphire',
    price: 1299,
    image: '/images/luxury2.jpeg',
    tag: 'New Arrival',
  },
  {
    id: 3,
    name: 'Golden Prestige',
    price: 1499,
    image: '/images/luxury3.jpeg',
  },
  {
    id: 4,
    name: 'Platinum Luxe',
    price: 1999,
    image: '/images/luxury4.jpeg',
    tag: 'Limited Edition',
  },
  {
    id: 5,
    name: 'Emerald Elegance',
    price: 1399,
    image: '/images/luxury5.jpeg',
  },
  {
    id: 6,
    name: 'Royal Pearl',
    price: 1899,
    image: '/images/luxury6.jpeg',
    tag: 'Best Seller',
  },
];

const LuxuryCollectionPage = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-100 to-white py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#b38b00] mb-4">
            Luxury Watch Collection
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Exquisite timepieces crafted with precision and premium materials for the discerning collector.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-[#b38b00] mb-10">
            Featured Luxury Watches
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {luxuryProducts.map((product) => (
              <div
                key={product.id}
                className="relative bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition"
              >
                <Link href={`/luxurycollection/${product.id}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover cursor-pointer"
                  />
                </Link>

                {product.tag && (
                  <span className="absolute top-3 left-3 bg-[#b38b00] text-white text-xs px-3 py-1 rounded-full uppercase">
                    {product.tag}
                  </span>
                )}

                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-[#b38b00] font-bold text-lg mt-1">
                    ${product.price}
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
                      toast.success('Added to cart ✨');
                    }}
                    className="mt-3 inline-flex items-center bg-[#b38b00] text-white px-4 py-2 rounded-full hover:bg-yellow-800 transition"
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

export default LuxuryCollectionPage;
