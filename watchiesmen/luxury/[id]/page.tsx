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
    name: 'Rich Royale Gold',
    price: 3599,
    images: ['/images/5 bracelet.jpeg'],
    description:
      'Radiating luxury, this watch features a deep golden dial & chain, refined profile.',
  },
  {
    id: 2,
    name: 'Royal Black Dial',
    price: 2599,
    images: ['/images/w4.jpeg'],
    description:
      'A dazzling timepiece combination of grey & copper chain, pure elegance on your wrist.',
  },
  {
    id: 3,
    name: 'Man in Black Aura',
    price: 1999,
    images: ['/images/6 aura.jpeg', '/images/63.jpeg', '/images/6b.jpeg'],
    description:
      'A limited-edition Black Arabic watch with a minimalist yet high-class presence.',
  },
  {
    id: 4,
    name: 'Platinum Elegance',
    price: 3299,
    images: ['/images/w3.jpeg'],
    description:
      'With its bold silver body, this prestige piece is designed for those who love attention.',
  },
  {
    id: 5,
    name: 'Elegant Brown',
    price: 3599,
    images: ['/images/4 bracelet.jpeg'],
    description:
      'Featuring emerald stones and a slim band — grace meets green brilliance.',
  },
  {
    id: 6,
    name: 'Platinum Black',
    price: 2499,
    images: ['/images/w1.jpeg'],
    description:
      'Decent black modern design, this bestseller brings timeless royalty to life.',
  },
];

const LuxuryProductDetail = () => {
  const { id } = useParams();
  const product = luxuryProducts.find((p) => p.id.toString() === id);
  const { addToCart } = useCart();
  const [imageIndex, setImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="text-center py-20 text-xl text-gray-600">
        Product not found
      </div>
    );
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

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Image Viewer */}
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

          {/* Info Section */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-[#b38b00] font-serif">
              {product.name}
            </h1>
            <div className="text-xl font-medium text-gray-900">
              PKR {product.price.toLocaleString()}
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              {product.description}
            </p>

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
