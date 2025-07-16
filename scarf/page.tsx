'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useCart } from '@/app/context/CartContext';
import { useWishlist } from '@/app/context/WishlistContext';
import { Heart, HeartOff, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

const scarfProducts = [
  {
    id: 1,
    name: 'Chiffon Plain Scarfs',
    price: 699,
    originalPrice: 999,
    tag: 'Pastels',
    image: '/images/3 stols.jpeg',
  },
  {
    id: 2,
    name: 'Georgitt Plain Scarfs',
    price: 2800,
      originalPrice: 3999,
    tag: '6 Pieces Deal',
    image: '/images/bundle.jpeg',
  },
  {
    id: 3,
    name: 'Silk Stuff Scarf',
    price: 750,
    originalPrice: 1299,
    image: '/images/silk1.webp',
  },
  {
    id: 4,
    name: 'Cotton Stuff Scarfs',
    price: 799,
    originalPrice: 999,
    image: '/images/cotton hijab.webp',
  },
];

const ScarfPage = () => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* ✅ Hero Section (as you had before) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-rose-200">
                  <span className="text-rose-600 font-medium">🧕 Elegant Scarves</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Modest Fashion
                  <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent block">
                    Wrapped in Grace
                  </span>
                  for Every Occasion
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Discover our graceful collection of scarves made to match your elegance & comfort.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#products" className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-rose-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                  View Collection
                </Link>
                {/* <button className="border-2 border-rose-300 text-rose-700 px-8 py-4 rounded-xl font-semibold hover:border-rose-500 hover:bg-rose-50 transition-all duration-300">
                  Styling Tips
                </button> */}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400/20 to-pink-400/20 rounded-3xl rotate-6"></div>
              <img
                src="/images/hijabs.jpeg"
                alt="Scarf Collection"
                className="relative z-20 w-full h-96 lg:h-[500px] object-cover object-top rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Product Section */}
      <section id="products" className="py-16 px-6 bg-gradient-to-b from-[#fff0f5] to-white">
        <h2 className="text-center text-4xl font-serif text-[#b13368] mb-12">
          All Scarf Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {scarfProducts.map((product) => {
            const isWishlisted = isInWishlist(product.id.toString());

            return (
              <div
                key={product.id}
                className="relative rounded-xl overflow-hidden bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300"
              >
                {/* Tag */}
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-[#b13368] text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide uppercase">
                    {product.tag}
                  </span>
                )}

                {/* Wishlist */}
                <button
                  onClick={() => {
                    toggleWishlist({
                      _id: product.id.toString(),
                      title: product.name,
                      price: product.price,
                      imgUrl: product.image,
                    });
                    toast.success(isWishlisted ? 'Removed from Wishlist' : 'Added to Wishlist');
                  }}
                  className="absolute top-4 right-4 text-[#b13368] hover:text-[#9b2c5b] z-10"
                >
                  {isWishlisted ? <HeartOff size={22} /> : <Heart size={22} />}
                </button>

                {/* Image */}
                <Link href={`/scarf/${product.id}`}>
                  <div className="h-64 w-full overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>

                {/* Content */}
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 font-serif">{product.name}</h3>
                  <div className="mt-2 text-lg font-medium text-[#b13368]">
                    Rs. {product.price}{' '}
                    {product.originalPrice && (
                      <span className="line-through text-gray-400 text-sm ml-2">
                        Rs. {product.originalPrice}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      addToCart({
                        _id: product.id.toString(),
                        title: product.name,
                        price: product.price,
                        imgUrl: product.image,
                        quantity: 1,
                      });
                      toast.success('Added to cart 🛍️');
                    }}
                    className="mt-4 inline-flex items-center justify-center gap-2 bg-[#b13368] text-white text-sm px-5 py-2 rounded-full hover:bg-[#9b2c5b] transition"
                  >
                    <ShoppingBag size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ScarfPage;
