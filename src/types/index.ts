export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  featured: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: number;
  name: string;
  image: string;
}
