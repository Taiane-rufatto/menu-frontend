import { api } from "@/lib/axios"
import type { ProductDto } from "../dtos/product-dto"


const ENDPOINT = "/products"

export const ProductService = {
    async listAll(): Promise<ProductDto[]> {
        const result = await api.get<ProductDto[]>(ENDPOINT)
        return result.data
    },
    async findOne(id: string): Promise<ProductDto> {
        const result = await api.get<ProductDto>(`${ENDPOINT}/${id}`)
        return result.data
    },

    async update(id: string, product: ProductDto): Promise<ProductDto> {
        const result = await api.patch<ProductDto>(`${ENDPOINT}/${id}`, product)
        return result.data
    },
    async delete(id: string): Promise<void> {
        await api.delete(`${ENDPOINT}/${id}`)
    },
    async filtrarPorCategoria(categoryId: string): Promise<ProductDto[]> {
        const result = await api.get<ProductDto[]>(`${ENDPOINT}?categoryId=${categoryId}`)
        return result.data
    }
}