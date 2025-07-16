"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useCart } from "@/app/context/CartContext";

const productData = {
  _id: "honey-100-pure",
  title: "Perfume",
  imageUrls: [
    "/images/pexels-didsss-1830450.jpg",
    "/images/line 2.jpeg",
    "/images/13.jpg",
  ],
  originalPrice: 1999,
  price: 1499,
  discountPercentage: 25,
  description:
    "Experience the delicate sweetness of Sufaida (Eucalyptus) Honey. Eucalyptus honey is best known for supporting immunity and providing energy.",
};

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleAddToCart = () => {

    addToCart({ ...productData, quantity, imgUrl: productData.imageUrls[0] }); // ✅ Pass productData with quantity and imgUrl
    alert(`${productData.title} (x${quantity}) added to cart!`);
  };


  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? productData.imageUrls.length - 1 : prev - 1
    );
  };

  // Navigate to next image
  const goToNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === productData.imageUrls.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Product Image with Arrows */}
        <div className="w-full md:w-1/2 relative">
          <button
            onClick={goToPreviousImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-800 p-1 rounded-full hover:bg-gray-300 z-10"
          >

            {'<'}
          </button>
          <Image
            src={productData.imageUrls[currentImageIndex]}
            alt={`${productData.title} - Image ${currentImageIndex + 1}`}
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
          <button
            onClick={goToNextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-800 p-1 rounded-full hover:bg-gray-300 z-10"
          >

            {'>'}
          </button>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <p className="text-sm text-gray-500 uppercase mb-2">WELLNESS WAVE</p>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">{productData.title}</h1>

          <div className="flex items-center gap-4 mb-2">
            <p className="text-xl text-gray-500 line-through">
              Rs.{productData.originalPrice.toLocaleString()} PKR
            </p>
            <p className="text-2xl font-semibold text-black">
              Rs.{productData.price.toLocaleString()} PKR
            </p>
          </div>

          <span className="inline-block bg-red-600 text-white px-3 py-1 text-sm font-semibold rounded mb-4">
            -{productData.discountPercentage}% OFF
          </span>

          {/* Quantity */}
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-600">Quantity</label>
            <div className="flex items-center border rounded w-max px-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 text-lg"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 text-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600"
          >
            Add to Cart
          </button>

          <p className="text-gray-700 mt-6 leading-relaxed">{productData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;