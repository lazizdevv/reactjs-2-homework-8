import React from "react";
import { useGetProduct } from "../create-page/service/query/useGetProduct";
import { Card } from "../../components/card";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/loading";

export const Home = () => {
  const { isLoading, data } = useGetProduct();
  const navigate = useNavigate();

  return (
    <>
      <div className="container border-2">
        <div className="flex justify-center fixed bg-white w-full z-20 py-3 top-0 border-b-2 border-b-blue-500 shadow-lg">
          <button
            onClick={() => navigate("/create-product")}
            className="py-3 px-20 bg-blue-500 hover:bg-blue-700 rounded-lg font-bold text-white"
          >
            Add Product
          </button>
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid gap-5 lg:grid-cols-2 mt-20">
            {data?.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
