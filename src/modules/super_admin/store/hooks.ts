import {useQuery} from "@tanstack/react-query";
import { SchoolListApi } from "./api";

export const useListSchool = () => {
  return useQuery({
    queryKey: ["school"],
    queryFn: () =>
      SchoolListApi(),
  });
};

