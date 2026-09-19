export type Product = {
  id: string;
  slug: string;
  name: string;
  reference?: string;
  categoryId: string;
  brand?: string;
  vehicleBrands?: string[];
  price?: number;
  stock?: number;
  description?: string;
  image?: string;
  isActive: boolean;
};
