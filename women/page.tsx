'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useCart } from '@/app/context/CartContext';
import { useWishlist } from '@/app/context/WishlistContext';
import { Heart, HeartOff, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

const WomenPerfume = () => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const products = [
    {
      id: 1,
      name: 'Uroosa',
      price: 2500,
      originalPrice: 3000,
      tag: 'Premium',
      image: '/images/uroosa.jpeg',
    },
    {
      id: 2,
      name: 'Dior',
      price: 2499,
      originalPrice: 3000,
      tag: 'Exclusive',
      image: '/images/Miss Dior.jpeg',
    },
    {
      id: 3,
      name: 'Channel 5 in 1 set',
      price: 2499,
      originalPrice: 3000,
      image: '/images/channel set.jpg',
      tag: 'Exclusive',
    },
    {
      id: 4,
      name: 'Gucci Flora',
      price: 799,
      originalPrice: 999,
      image: '/images/Gucci Flora.webp',
    },
    {
      id: 5,
      name: 'She Pen Perfume set',
      price: 999,
      originalPrice: 1500,
      image: '/images/she pen.webp',
    },
    {
      id: 6,
      name: 'J. Pen Perfume Set',
      price: 999,
      originalPrice: 1500,
      image: '/images/PEN.jpeg',
    },
  ];

  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[500px] bg-[#f4ebe4]">
        <Image
          src="/images/M.Dior mini2.webp"
          alt="Women Perfume"
          fill
          className="object-cover object-center opacity-80 scale-90"
        />
        <div className="absolute inset-0 bg-[#f4ebe4]/60" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-[#b13368] text-xl font-cursive italic mb-2">Women Perfume</h2>
          <h1 className="text-5xl md:text-6xl font-semibold text-[#272343] tracking-wide">PREMIUM</h1>
          <p className="text-lg text-[#272343] uppercase tracking-widest mt-1">Collection</p>
          <Link
            href="#products"
            className="inline-block mt-6 bg-[#b13368] text-white px-6 py-3 rounded-full shadow hover:bg-[#9b2c5b] transition"
          >
            Order Now
          </Link>
        </div>
      </div>

      {/* Products Section */}
      <section id="products" className="py-16 px-6 bg-gradient-to-b from-[#fff0f5] to-white">
        <h2 className="text-center text-4xl font-serif text-[#b13368] mb-12">
          All Women Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {products.map((product) => {
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
                  className="absolute top-4 right-4 text-[#b13368] hover:text-[#9b2c5b] z-10"
                >
                  {isWishlisted ? <HeartOff size={22} /> : <Heart size={22} />}
                </button>

                {/* Product Image */}
                <Link href={`/women/${product.id}`}>
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

                {/* Product Details */}
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 font-serif">
                    {product.name}
                  </h3>
                  <div className="mt-2 text-lg font-medium text-[#b13368]">
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

export default WomenPerfume;
