export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  contact: {
    phone: string;
    telegram: string;
  };
}