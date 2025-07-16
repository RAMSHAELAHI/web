'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useCart } from '@/app/context/CartContext';
import { useWishlist } from '@/app/context/WishlistContext';
import { Heart, HeartOff, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

const MenPerfume = () => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const products = [
    {
      id: 1,
      name: 'Zarar',
      price: 2499,
      originalPrice: 4400,
      tag: 'Sale',
      image: '/images/zaara..jpeg',
    },
    {
      id: 2,
      name: 'Janan',
      price: 1900,
      originalPrice: 2400,
      tag: 'Sale',
      image: '/images/golsz..jpeg',
    },
    {
      id: 3,
      name: 'Exclusive',
      price: 2599,
      originalPrice: 4300,
      tag: 'Sale',
      image: '/images/Exclusiv.webp',
    },
    {
      id: 4,
      name: 'All rounder by Shoaib Malik',
      price: 4999,
      originalPrice: 7500,
      tag: 'Sale',
      image: '/images/all rounder j..jpeg',
    },
    {
      id: 5,
      name: 'Spark',
      price: 2900,
      originalPrice: 5000,
      tag: 'Sale',
      image: '/images/Spark2.jpeg',
    },
  ];

  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[500px]">
        <Image
          src="/images/IMG_2925_1.webp"
          alt="Premium Perfume"
          fill
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Bold. Timeless. Masculine.
          </h1>
          <p className="text-white text-base md:text-lg max-w-xl mb-6">
            Discover our exclusive collection of men's perfumes crafted to elevate your presence.
          </p>
          <Link
            href="#products"
            className="bg-white text-black font-medium px-6 py-2 rounded-md hover:bg-gray-200 transition"
          >
            Explore Collection
          </Link>
        </div>
      </div>

      {/* Product Section */}
      <section id="products" className="py-16 px-6 bg-gradient-to-b from-[#f7f6f2] to-[#fff]">
        <h2 className="text-center text-4xl font-serif text-[#2f2f2e] mb-12">
          All Men Collection ✨
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {products.map((product) => {
            const isWishlisted = isInWishlist(product.id.toString());

            return (
              <div
                key={product.id}
                className="relative rounded-xl overflow-hidden bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300"
              >
                {/* Sale Tag */}
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase shadow">
                    {product.tag}
                  </span>
                )}

                {/* Wishlist Icon */}
                <button
                  onClick={() => {
                    toggleWishlist({
                      _id: product.id.toString(),
                      title: product.name,
                      price: product.price,
                      imgUrl: product.image,
                    });
                    toast.success(
                      isWishlisted ? 'Removed from Wishlist' : 'Added to Wishlist'
                    );
                  }}
                  className="absolute top-4 right-4 text-[#B13368] hover:text-[#8f2855] z-10"
                >
                  {isWishlisted ? <HeartOff size={22} /> : <Heart size={22} />}
                </button>

                {/* Product Image */}
                <Link href={`/men/${product.id}`}>
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

                {/* Product Info */}
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 font-serif">
                    {product.name}
                  </h3>
                  <div className="mt-2 text-lg font-medium text-[#B13368]">
                    PKR {product.price.toLocaleString()}
                    {product.originalPrice && (
                      <span className="line-through text-gray-400 text-sm ml-2">
                        PKR {product.originalPrice.toLocaleString()}
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
                      toast.success('Added to cart');
                    }}
                    className="mt-4 inline-flex items-center justify-center gap-2 bg-[#B13368] text-white text-sm px-5 py-2 rounded-full hover:bg-[#9b2c5b] transition"
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

export default MenPerfume;
