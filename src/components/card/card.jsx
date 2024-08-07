import React from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteData } from "../../pages/home/service/mutation/useDeleteData";

export const Card = ({ title, description, id, img, name, price }) => {
  const navigate = useNavigate();

  const {mutate} = useDeleteData(id)

  const handleDelete = (id) => {
    mutate(id)
  } 
  return (
    <>
      <div className="border-2 flex justify-between items-center py-5 px-2">
        <img src={img} alt="img" />
        <h1>{name}</h1>
        <h2>{price}</h2>
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="flex gap-5">
          <button
            className="py-3 px-5 bg-yellow-500 font-bold text-white"
            onClick={() => navigate(`/edit-todo/${id}`)}
          >
            edit
          </button>
          <button onClick={handleDelete} className="py-3 px-5 bg-red-500 font-bold text-white">
            delete
          </button>
        </div>
      </div>
    </>
  );
};
