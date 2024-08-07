import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteData } from "../../pages/home/service/mutation/useDeleteData";
import { Loading } from "../loading";
import { toast } from "react-toastify";

export const Card = ({ title, description, id, img, name, price }) => {
  const navigate = useNavigate();

  const { mutate, isSuccess } = useDeleteData(id);

  const handleDelete = (id) => {
    mutate(id, {
      onSuccess: () => {
        toast.success("Mahsulot muvaffaqiyatli o'chirildi!");
      },
      onError: () => {
        toast.error("error");
      },
    });
  };
  return (
    <>
      {isSuccess ? <Loading /> : null}
      <div className="border flex justify-between flex-wrap gap-5 py-7 pb-20 px-5 rounded-lg relative shadow-lg">
        <img
          className="border-2 border-dashed rounded-lg max-w-[300px] w-full cursor-pointer"
          src={img}
          alt="product-img"
        />
        <div className="h-fit max-w-[300px] w-full flex flex-col gap-3">
          <div className="">
            <h1 className="text-4xl font-bold">{name}</h1>
            <h1 className="text-2xl font-medium">{title}</h1>
          </div>
          <h2 className="text-3xl font-mono font-extrabold">{"$" + price}</h2>
          <p className="text-base font-medium text-gray-500 h-20 mt-4 overflow-y-auto">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-5 absolute bottom-5 right-5">
          <button
            className="py-1 px-4 bg-yellow-500 hover:bg-yellow-700 rounded-lg font-bold text-white"
            onClick={() => navigate(`/edit-product/${id}`)}
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="py-1 px-4 bg-red-500 hover:bg-red-700 rounded-lg font-bold text-white"
          >
            Delete
          </button>
        </div>

        <div className="absolute left-5 bottom-5">
          <Link to={`/single-product/${id}`}>
            <button className="text-gray-500 rounded-lg bg-gray-200 hover:bg-gray-100 font-bold py-1 px-4 hover:underline">
              View Single
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
