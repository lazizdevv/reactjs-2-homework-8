import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetProduct = () => {
  return useQuery({
    queryKey: ["get-data"],
    queryFn: () => request.get("/todos").then((res) => res.data),
  });
};
