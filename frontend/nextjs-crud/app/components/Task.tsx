"use client";

import { IProduct } from "@/types/products";
import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteProduct, updateProduct } from "@/api";

interface TaskProps {
  product: IProduct;
}

const Task: React.FC<TaskProps> = ({ product }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(product.name);

  const handleUpdateProduct: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await updateProduct({
      id: product.id,
      name: taskToEdit,
      price: product.price
    });
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteProduct = async (id: string) => {
    await deleteProduct(id);
    setOpenModalDeleted(false);
    router.refresh();
  };

  return (
    <tr key={product.id}>
      <td className='w-full'>{product.name}</td>
      <td className="w-full">{product.price}</td>
      <td className='flex gap-5'>
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          cursor='pointer'
          className='text-blue-500'
          size={25}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleUpdateProduct}>
            <h3 className='font-bold text-lg'>Edit product</h3>
            <div className='modal-action'>
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type='text'
                placeholder='Type here'
                className='input input-bordered w-full'
              />
              <button type='submit' className='btn'>
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <FiTrash2
          onClick={() => setOpenModalDeleted(true)}
          cursor='pointer'
          className='text-red-500'
          size={25}
        />
        <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
          <h3 className='text-lg'>
            Are you sure, you want to delete this product?
          </h3>
          <div className='modal-action'>
            <button onClick={() => handleDeleteProduct(product.id)} className='btn'>
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
