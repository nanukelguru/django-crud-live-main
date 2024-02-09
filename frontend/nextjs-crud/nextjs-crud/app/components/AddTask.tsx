"use client";

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addProduct } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const AddProduct = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newProductName, setNewProductName] = useState<string>("");
  const [newPriceValue, setNewPriceValue] = useState<string>("");

  const handleAddProduct: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addProduct({
      id: uuidv4(),
      name: newProductName,
      price: newPriceValue
    });
    setNewProductName("");
    setNewPriceValue("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className='btn btn-primary w-full'
      >
        Add new product <AiOutlinePlus className='ml-2' size={18} />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleAddProduct}>
          <h3 className='font-bold text-lg'>Add new product</h3>
          <div className='modal-action'>
            <input
              value={newProductName}
              onChange={(e) => setNewProductName(e.target.value)}
              type='text'
              placeholder='Product'
              className='input input-bordered w-full'
            />
            <input
              value={newPriceValue}
              onChange={(e) => setNewPriceValue(e.target.value)}
              type='text'
              placeholder='Price'
              className='input input-bordered w-full'
            />
            <button type='submit' className='btn'>
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddProduct;
