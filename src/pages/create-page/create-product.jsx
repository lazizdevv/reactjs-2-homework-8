import React from "react";
import { useForm } from "react-hook-form";
import { useCreateProduct } from "./service/mutation/useCreateProduct";
import { useNavigate } from "react-router-dom";
import { Form } from "../../components/form";
import { Loading } from "../../components/loading";
import { toast } from "react-toastify";

export const CreateProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const { mutate, isPending, isSuccess } = useCreateProduct();
  const navigate = useNavigate();

  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/");
        toast.success("Mahsulot muvaffaqiyatli qo'shildi!");
      },
    });
    reset();
  };
  return (
    <>
      {isPending || isSuccess ? (
        <>
          <Loading />
        </>
      ) : (
        <Form submit={submit} />
      )}
    </>
  );
};
