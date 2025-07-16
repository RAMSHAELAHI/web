'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';
import { toast } from 'sonner';

const collections = {
  leather: {
    title: "Leather Watches",
    description: "Elegant leather straps crafted for timeless comfort and style.",
    gradient: "from-amber-100 to-rose-50",
    products: [
      { id: 1, name: "Vintage Brown Leather", price: 199, image: "/images/leather1.jpg" },
      { id: 2, name: "Classic Black Leather", price: 179, image: "/images/leather2.jpg" },
      { id: 3, name: "Elegant Tan Leather", price: 189, image: "/images/leather3.jpg" },
      { id: 4, name: "Premium Dark Leather", price: 229, image: "/images/leather4.jpg" },
    ],
  },
  smart: {
    title: "Smart Watches",
    description: "Advanced technology blended with timeless style.",
    gradient: "from-blue-100 to-purple-50",
    products: [
      { id: 5, name: "FitPro Smartwatch", price: 299, image: "/images/smart1.jpeg" },
      { id: 6, name: "Pulse Max Smartwatch", price: 349, image: "/images/smart2.jpeg" },
    ],
  },
  luxury: {
    title: "Luxury Collection",
    description: "Exquisite timepieces for the discerning collector.",
    gradient: "from-yellow-50 to-white",
    products: [
      { id: 7, name: "Golden Prestige", price: 1199, image: "/images/luxury1.jpeg" },
      { id: 8, name: "Sapphire Royale", price: 1599, image: "/images/luxury2.jpeg" },
    ],
  },
  couple: {
    title: "Couple Watches",
    description: "Perfectly paired designs for you and your loved one.",
    gradient: "from-pink-100 to-red-50",
    products: [
      { id: 9, name: "Classic Black Couple Set", price: 299, image: "/images/couple1.jpg" },
      { id: 10, name: "Rose Gold His & Hers", price: 349, image: "/images/couple2.jpg" },
    ],
  },
};

const CollectionPage = () => {
  const { category } = useParams() as { category: keyof typeof collections };
  const { addToCart } = useCart();

  const collection = collections[category];

  if (!collection) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-500 text-2xl">
        Collection not found.
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className={`py-16 bg-gradient-to-br ${collection.gradient}`}>
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">{collection.title}</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {collection.description}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {collection.products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-pink-600 font-bold text-lg mt-1">
                    ₨ {product.price.toLocaleString('ur-PK')}
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
                      toast.success(`${product.name} added to cart 🛒`);
                    }}
                    className="mt-3 bg-pink-600 inline-flex items-center text-white px-4 py-2 rounded-full hover:bg-pink-700 transition"
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

export default CollectionPage;
