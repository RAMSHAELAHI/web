'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { useCart } from '@/app/context/CartContext';
import { toast } from 'sonner';
import { ChevronRight, ShoppingBag, ChevronLeft, ChevronRight as RightArrow } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const scarfProducts = [
  {
    id: 1,
    name: 'Chiffon Plain Stoles',
    price: 1200,
    originalPrice: 1500,
    images: ['/images/8 stole.jpeg' ,'/images/4 stol.jpeg',  '/images/6 stole.jpeg',  '/images/light mint.jpeg', ],
    description: 'Elegant and lightweight, perfect for any outfit or event.',
  },
  {
    id: 2,
    name: 'Geprgitt Stuff Scarfs',
    price: 1800,
    images: ['/images/bndl3.webp','/images/bundle stole.jpeg', '/images/bundle.jpeg', ],
    description: 'Luxurious silk with fine embroidery work.',
  },
  {
    id: 3,
    name: 'Silk Stuff Scarf',
    price: 950,
    images: ['/images/silk1.webp', '/images/silk2.webp', '/images/silk3.jpg'],
    description: 'Soft and breathable scarf for everyday comfort.',
  },
  {
    id: 4,
    name: 'Pastel Luxe Scarf',
    price: 1350,
    originalPrice: 1600,
    images: [ '/images/cotton2.jpg', '/images/cotton hijab.webp'],
    description: 'Modern pastel tones for a graceful look.',
  },
];

const ScarfDetailPage = () => {
  const { id } = useParams();
  const product = scarfProducts.find((p) => p.id.toString() === id);
  const { addToCart } = useCart();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return <div className="text-center py-20 text-xl text-gray-600">Product not found</div>;
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Link href="/scarf" className="hover:underline">Scarf</Link>
          <ChevronRight size={16} className="mx-2" />
          <span>{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Image Gallery with Arrows */}
          <div className="relative">
            <Image
              src={product.images[currentImageIndex]}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-[350px] object-cover rounded-lg border"
            />
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <RightArrow size={20} />
            </button>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 font-serif">{product.name}</h1>
            <div className="text-xl font-medium text-[#b13368]">
              Rs. {product.price}{' '}
              {product.originalPrice && (
                <span className="line-through text-gray-400 text-base ml-2">
                  Rs. {product.originalPrice}
                </span>
              )}
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

export default ScarfDetailPage;