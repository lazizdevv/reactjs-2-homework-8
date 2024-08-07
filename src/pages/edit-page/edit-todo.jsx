import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEditTodo } from "./service/mutation/useEditTodo";
import { userSingleData } from "../../service/useSingleData";
import { Form } from "../../components/form/form";

export const EditTodo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {data, isLoading} = userSingleData(id)
  const { mutate } = useEditTodo(id);

  const submit = (value) => {
    mutate(value, {
      onSuccess: () => {
        navigate("/");
      },
    });
  };
  return <>
  {isLoading ? <h1>loading..!!</h1> : <Form submit={submit} {...data} />}
  </>;
};
