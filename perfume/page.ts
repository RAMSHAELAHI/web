export interface Perfume {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  category: string;
  size: string;
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  rating: number;
  reviews: number;
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
}

export const perfumes: Perfume[] = [
  {
    id: "1",
    name: "Midnight Elegance",
    brand: "Luxe Parfum",
    price: 129.99,
    originalPrice: 159.99,
    image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "A captivating blend of mysterious notes that evokes the allure of midnight glamour. Perfect for evening wear.",
    category: "Oriental",
    size: "50ml",
    notes: {
      top: ["Bergamot", "Black Pepper", "Pink Pepper"],
      middle: ["Rose", "Jasmine", "Violet"],
      base: ["Oud", "Sandalwood", "Vanilla"]
    },
    rating: 4.8,
    reviews: 127,
    inStock: true,
    isNew: true
  },
  {
    id: "2",
    name: "Ocean Breeze",
    brand: "Aqua Essence",
    price: 89.99,
    image: "https://images.pexels.com/photos/1377034/pexels-photo-1377034.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Fresh and invigorating, this fragrance captures the essence of a Mediterranean morning by the sea.",
    category: "Fresh",
    size: "100ml",
    notes: {
      top: ["Sea Salt", "Lemon", "Mint"],
      middle: ["Lavender", "Rosemary", "Eucalyptus"],
      base: ["Driftwood", "Ambergris", "Musk"]
    },
    rating: 4.6,
    reviews: 89,
    inStock: true,
    isBestseller: true
  },
  {
    id: "3",
    name: "Golden Amber",
    brand: "Precious Scents",
    price: 199.99,
    image: "https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "A luxurious and warm fragrance with rich amber notes, perfect for special occasions.",
    category: "Amber",
    size: "75ml",
    notes: {
      top: ["Saffron", "Cardamom", "Cinnamon"],
      middle: ["Amber", "Labdanum", "Benzoin"],
      base: ["Agarwood", "Patchouli", "Tonka Bean"]
    },
    rating: 4.9,
    reviews: 203,
    inStock: true,
    isBestseller: true
  },
  {
    id: "4",
    name: "Rose Garden",
    brand: "Floral Dreams",
    price: 119.99,
    image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "A romantic and feminine fragrance featuring the finest Bulgarian rose petals.",
    category: "Floral",
    size: "50ml",
    notes: {
      top: ["Rose Petals", "Peony", "Litchi"],
      middle: ["Bulgarian Rose", "Peony", "Magnolia"],
      base: ["White Musk", "Cedarwood", "Amber"]
    },
    rating: 4.7,
    reviews: 156,
    inStock: true
  },
  {
    id: "5",
    name: "Smoky Leather",
    brand: "Urban Edge",
    price: 149.99,
    image: "https://images.pexels.com/photos/3373732/pexels-photo-3373732.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Bold and masculine with smoky leather accord, perfect for the modern gentleman.",
    category: "Leather",
    size: "100ml",
    notes: {
      top: ["Tobacco", "Rum", "Clove"],
      middle: ["Leather", "Iris", "Geranium"],
      base: ["Vetiver", "Patchouli", "Oakmoss"]
    },
    rating: 4.5,
    reviews: 98,
    inStock: true
  },
  {
    id: "6",
    name: "Citrus Burst",
    brand: "Fresh Start",
    price: 79.99,
    image: "https://images.pexels.com/photos/1377034/pexels-photo-1377034.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "An energizing citrus fragrance that awakens your senses and brightens your day.",
    category: "Citrus",
    size: "50ml",
    notes: {
      top: ["Grapefruit", "Lemon", "Orange"],
      middle: ["Neroli", "Petitgrain", "Ginger"],
      base: ["Cedar", "Vetiver", "White Musk"]
    },
    rating: 4.4,
    reviews: 72,
    inStock: false,
    isNew: true
  }
];