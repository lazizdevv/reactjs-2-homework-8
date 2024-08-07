import React from "react";
import { useGetTodos } from "../create-page/service/query/useGetTodo";
import { Card } from "../../components/card/card";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { isLoading, data } = useGetTodos();
  const navigate = useNavigate()
  
  return (
    <>
      <div className="container border-2">
        <button onClick={() => navigate("/create-todo")} className="py-3 px-5 bg-blue-500">Adding</button>
        
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {data?.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
