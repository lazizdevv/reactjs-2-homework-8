import React from "react";
import { useForm } from "react-hook-form";
import { useCreateTodo } from "./service/mutation/useCreateTodo";
import { useNavigate } from "react-router-dom";
import { Form } from "../../components/form/form";

export const CreateTodo = () => {
  const { register, handleSubmit, reset } = useForm();
  const { mutate, isPending } = useCreateTodo();
  const navigate = useNavigate();

  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        console.log("done");
        navigate("/");
      },
    });
    reset();
  };
  return (
    <>
      <Form submit={submit} />
      {isPending ? (
        <>
          <p>loading</p>
        </>
      ) : (
        ""
      )}
    </>
  );
};
