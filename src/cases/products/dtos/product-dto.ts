import type { CategoryDTO } from "@/cases/categories/dtos/category.dto";

export interface ProductDto {
  id: string;
  name: string;
  description?: string | null;
  price: string | number;
  active: boolean;
  picture?: string | null;
  category: CategoryDTO | null; 

}