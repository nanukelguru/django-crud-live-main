import { IProduct } from "@/types/products";
import React from "react";
import Task from "./Task";

interface TodoListProps {
  products: IProduct[];
}

const ProductList: React.FC<TodoListProps> = ({ products }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table w-full'>
        {/* head */}
        <thead>
          <tr>
            <th>Products</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Task key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
