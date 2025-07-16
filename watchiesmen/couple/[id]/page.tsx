'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { useCart } from '@/app/context/CartContext';
import { toast } from 'sonner';
import {
  ChevronRight,
  ChevronLeftCircle,
  ChevronRightCircle,
  ShoppingBag,
  ArrowRight,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const luxuryProducts = [
  {
    id: 1,
    name: 'Diamond Royale Watch',
    price: 999,
    images: ['/images/luxury1.jpeg', '/images/luxury2.jpeg'],
    description:
      'Couple watch , A dazzling timepiece adorned with fine diamonds and crafted with precision. Pure elegance on your wrist.',
  },
  {
    id: 2,
    name: 'Elite Sapphire',
    price: 1299,
    images: ['/images/luxury2.jpeg', '/images/luxury1.jpeg'],
    description:
      'Couple Watch ,Radiating luxury, this watch features a deep sapphire dial and a sleek, refined profile.',
  },
  {
    id: 3,
    name: 'Golden Prestige',
    price: 1499,
    images: ['/images/luxury3.jpeg', '/images/luxury5.jpeg'],
    description:
      'Couple Watch ,With its bold golden body, this prestige piece is designed for those who love attention.',
  },
  {
    id: 4,
    name: 'Platinum Luxe',
    price: 1999,
    images: ['/images/luxury4.jpeg', '/images/luxury6.jpeg'],
    description:
      'Couple Watch , A limited-edition platinum watch with a minimalist yet high-class presence.',
  },
  {
    id: 5,
    name: 'Emerald Elegance',
    price: 1399,
    images: ['/images/luxury5.jpeg', '/images/luxury3.jpeg'],
    description:
      'Couple Watch, Featuring emerald stones and a slim band — grace meets green brilliance.',
  },
  {
    id: 6,
    name: 'Royal Pearl',
    price: 1899,
    images: ['/images/luxury6.jpeg', '/images/luxury2.jpeg'],
    description:
      'Couple Watch ,Combining pearls with modern design, this bestseller brings timeless royalty to life.',
  },
];

const LuxuryProductDetail = () => {
  const { id } = useParams();
  const product = luxuryProducts.find((p) => p.id.toString() === id);
  const { addToCart } = useCart();
  const [imageIndex, setImageIndex] = useState(0);

  if (!product) {
    return <div className="text-center py-20 text-xl text-gray-600">Product not found</div>;
  }

  const handleNext = () => {
    setImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const handlePrev = () => {
    setImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Link href="/watchiesmen/luxury" className="hover:underline">
            Luxury
          </Link>
          <ChevronRight size={16} className="mx-2" />
          <span>{product.name}</span>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Image Section */}
          <div className="relative">
            <Image
              src={product.images[imageIndex]}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-[400px] object-cover rounded-lg border"
            />
            {product.images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
                >
                  <ChevronLeftCircle size={28} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
                >
                  <ChevronRightCircle size={28} />
                </button>
              </>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-[#b38b00] font-serif">{product.name}</h1>
            <div className="text-xl font-medium text-gray-900">
              ${product.price.toFixed(2)}
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  addToCart({
                    _id: product.id.toString(),
                    title: product.name,
                    price: product.price,
                    imgUrl: product.images[0],
                    quantity: 1,
                  });
                  toast.success('Added to cart ✨');
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#b38b00] text-white px-6 py-3 rounded-full hover:bg-yellow-800 transition text-sm"
              >
                <ShoppingBag size={18} />
                Add to Cart
                <ArrowRight size={16} />
              </button>

              <Link
                href="https://wa.me/923000000000"
                className="inline-flex items-center justify-center gap-2 border border-green-600 text-green-700 px-6 py-3 rounded-full hover:bg-green-50 transition text-sm"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryProductDetail;
