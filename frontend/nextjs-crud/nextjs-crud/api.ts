import { IProduct } from "./types/products";

const baseUrl = 'http://localhost:8000/products';

export const getProducts = async (): Promise<IProduct[]> => {
  const res = await fetch(`${baseUrl}`, { cache: 'no-store' });
  const data = await res.json();
  console.log(data);
  return data;
}

export const addProduct = async (data: IProduct): Promise<IProduct> => {
  const res = await fetch(`${baseUrl}/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const newProduct = await res.json();
  return newProduct;
}

export const updateProduct = async (product: IProduct): Promise<IProduct> => {
  const res = await fetch(`${baseUrl}/update/${product.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  })
  const updatedTodo = await res.json();
  return updatedTodo;
}

export const deleteProduct = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/delete/${id}`, {
    method: 'DELETE',
  })
}