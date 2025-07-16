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

// ✅ Product List
const bagProducts = [
  {
    id: 1,
    name: 'Full Moon Tote Bag',
    price: 2200,
    tag: 'New',
    images: ['/images/full moon.jpeg', '/images/moon.jpeg'],
    description: 'A versatile and stylish tote bag perfect for both casual outings and formal gatherings. Made with premium materials.',
  },
  {
    id: 2,
    name: 'Fancy Clutch',
    price: 1699,
    tag: 'Sale',
    images: ['/images/black bride.jpeg'],
    description: 'This clutch adds elegance to your outfit while keeping functionality in check.',
  },
  {
    id: 3,
    name: 'Hijab Tote Bag',
    price: 1800,
    tag: 'New',
    images: ['/images/hijab tote.jpeg'],
    description: 'Elegant and practical, this tote fits all your essentials effortlessly.',
  },
  {
    id: 4,
    name: 'LV Leather Bag',
    price: 2199,
    tag: 'Sale',
    images: ['/images/lv blac 2.jpeg'],
    description: 'Luxurious leather design with modern fashion sense.',
  },
  {
    id: 5,
    name: 'Canva Design Tote',
    price: 1800,
    tag: 'New',
    images: ['/images/CANVA.jpeg'],
    description: 'Chic and minimalist design with canvas material.',
  },
  {
    id: 6,
    name: 'Fancy Gold Clutch',
    price: 1599,
    tag: 'Sale',
    images: ['/images/ride gold.jpeg'],
    description: 'Shiny, standout clutch perfect for events and evenings.',
  },
  {
    id: 7,
    name: 'Luna Carry',
    price: 2999,
    tag: 'Sale',
    images: ['/images/LUNA CARRY BROWN.jpeg'],
    description: 'Stylish daily companion with a trendy vibe.',
  },
  {
    id: 8,
    name: 'LV Leather Bag',
    price: 2199,
    tag: 'Sale',
    images: ['/images/lv black off white.jpeg'],
    description: 'Classic branded style with dual-tone color scheme.',
  },
];

const BagDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [imageIndex, setImageIndex] = useState(0);

  if (!id || Array.isArray(id)) {
    return <div className="text-center py-20 text-xl text-gray-500">Loading...</div>;
  }

  const product = bagProducts.find((p) => p.id.toString() === id);

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
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Link href="/bagswomen" className="hover:underline">
            Women’s Bags
          </Link>
          <ChevronRight size={16} className="mx-2" />
          <span>{product.name}</span>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Image Carousel */}
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
            <h1 className="text-3xl font-bold text-[#B13368] font-serif">{product.name}</h1>
            <div className="text-xl font-semibold text-gray-800">
              PKR {product.price.toLocaleString()}
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
                  toast.success('Added to cart 👜');
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#B13368] text-white px-6 py-3 rounded-full hover:bg-[#9b2c5b] transition text-sm"
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

export default BagDetailPage;
