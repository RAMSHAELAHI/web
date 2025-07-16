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
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const menProducts = [
  {
    id: 1,
    name: 'Zarar',
    price: 2499,
    tag: 'sale',
    originalPrice: 4400,
    images: ['/images/zarar.jpeg', '/images/zaara..jpeg'],
    description: 'Bold and regal oud fragrance for a lasting impression.',
  },
  {
    id: 2,
    name: 'Janan',
    price: 1900,
    tag: 'sale',
    originalPrice: 2400,
    images: ['/images/janan.jpeg', '/images/golsz..jpeg'],
    description: 'Dark leather tones with a luxurious finish.',
  },
  {
    id: 3,
    name: 'Exclusive',
    price: 2599,
    tag: 'sale',
    originalPrice: 4300,
    images: ['/images/exclusive.jpeg', '/images/Exclusiv.webp'],
    description: 'Amber-rich fragrance with smooth velvety aroma.',
  },
  {
    id: 4,
    name: 'All Rounder by Shoaib Malik',
    price: 4999,
    tag: 'sale',
    originalPrice: 7500,
    images: ['/images/shoib.webp', '/images/all rounder j..jpeg'],
    description: 'Crisp musk scent with a hint of mystery and elegance.',
  },
  {
    id: 5,
    name: 'Spark',
    price: 2900,
    tag: 'sale',
    originalPrice: 5000,
    images: ['/images/spark.jpeg', '/images/spark2.jpeg'],
    description: 'Fresh fruity scent and notes of citrus, spice & wood.',
  },
];

const MenPerfumeDetailPage = () => {
  const { id } = useParams();
  const product = menProducts.find((p) => p.id.toString() === id);
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
          <Link href="/men" className="hover:underline">
            Men
          </Link>
          <ChevronRight size={16} className="mx-2" />
          <span>{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Image Gallery */}
          <div className="relative">
            <Image
              src={product.images[imageIndex]}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-[400px] object-cover rounded-lg border"
            />

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
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-gray-900 font-serif">{product.name}</h1>
              {product.tag === 'sale' && (
                <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full uppercase font-semibold">
                  Sale
                </span>
              )}
            </div>

            <div className="text-xl font-medium text-[#b13368]">
              PKR {product.price.toLocaleString()}{' '}
              {product.originalPrice && (
                <span className="line-through text-gray-400 text-base ml-2">
                  PKR {product.originalPrice.toLocaleString()}
                </span>
              )}
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
                  toast.success('Added to cart 🛍️');
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#b13368] text-white px-6 py-3 rounded-full hover:bg-[#9b2c5b] transition text-sm"
              >
                <ShoppingBag size={18} /> Add to Cart
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

export default MenPerfumeDetailPage;
