export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  size: string;
  color: string;
  description: string;
  image: string;
  category: string;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}
