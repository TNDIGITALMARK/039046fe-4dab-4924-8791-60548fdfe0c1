import { Product } from "@/lib/types/product";

export const products: Product[] = [
  {
    id: "palace-pertex-balaclava-puffer",
    name: "Palace Pertex Opaque Balaclava Puffer Jacket",
    brand: "Palace",
    price: 1100,
    size: "S",
    color: "Black",
    description: "Premium puffer jacket featuring technical Pertex fabric with integrated balaclava design. This iconic Palace piece combines cutting-edge technical materials with street-ready styling for the ultimate urban protection.",
    image: "/images/palace-puffer.jpg",
    category: "Outerwear",
    inStock: true,
  },
  {
    id: "broken-planet-puffer",
    name: "Broken Planet Puffer Jacket",
    brand: "Broken Planet",
    price: 400,
    size: "S",
    color: "Black",
    description: "Oversized urban puffer jacket with premium construction and street-ready styling. Features the signature Broken Planet aesthetic with bold proportions and exceptional quality.",
    image: "/images/broken-planet-puffer.jpg",
    category: "Outerwear",
    inStock: true,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};
