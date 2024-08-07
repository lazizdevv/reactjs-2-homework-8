import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useCreateProduct = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (data) => request.post("/todos", data).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries(["get-data"]);
    },
  });
};