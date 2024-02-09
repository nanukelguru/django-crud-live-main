import { getProducts } from "@/api";
import AddTask from "./components/AddTask";
import ProductList from "./components/ProductList";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className='max-w-4xl mx-auto mt-4'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Product List</h1>
        <AddTask />
      </div>
      <ProductList products={products} />
    </main>
  );
}
