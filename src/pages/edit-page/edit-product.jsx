import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEditProduct } from "./service/mutation/useEditProduct";
import { userSingleData } from "../../service/useSingleData";
import { Form } from "../../components/form";
import { Loading } from "../../components/loading";
import { toast } from "react-toastify";

export const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = userSingleData(id);
  const { mutate } = useEditProduct(id);

  const submit = (value) => {
    mutate(value, {
      onSuccess: () => {
        navigate("/");
        toast.success('Mahsulot muvaffaqiyatli edit qilindi');
      },
    });
  };
  return (
    <>{isLoading ? <Loading/> : <Form submit={submit} {...data} />}</>
  );
};
