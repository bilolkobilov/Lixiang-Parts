import { Product } from "../../types/Product";

const CONTACTS = {
  contact: {
    phone: "+998998682005",
    telegram: "https://t.me/v007sc",
  },
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Advanced Transmission Gear Set",
    description:
      "High-precision transmission gears for heavy-duty vehicles. Engineered for optimal performance and durability.",
    price: 1299.99,
    images: [
      "/images/car1 (1).jpg",
      "/images/car1 (2).jpg",
      "/images/car1 (3).jpg",
    ],
    contact: CONTACTS.contact,
  },
  {
    id: 2,
    name: "Precision Engine Bearing Kit",
    description:
      "Premium engine bearings with advanced metal alloy composition. Reduces friction and enhances engine longevity.",
    price: 879.5,
    images: [
      "/images/car1 (4).jpg",
      "/images/car1 (5).jpg",
      "/images/car1 (6).jpg",
    ],
    contact: CONTACTS.contact,
  },
  {
    id: 3,
    name: "High-Performance Brake Disc System",
    description:
      "Advanced ceramic brake discs with superior heat dissipation. Designed for maximum stopping power and safety.",
    price: 1599.75,
    images: [
      "/images/car1 (7).jpg",
      "/images/car1 (8).jpg",
      "/images/car1 (9).jpg",
    ],
    contact: CONTACTS.contact,
  },
  {
    id: 4,
    name: "High-Performance Brake Disc System",
    description:
      "Advanced ceramic brake discs with superior heat dissipation. Designed for maximum stopping power and safety.",
    price: 1599.75,
    images: [
      "/images/car1 (10).jpg",
      "/images/car1 (11).jpg",
      "/images/car1 (12).jpg",
    ],
    contact: CONTACTS.contact,
  },
];
