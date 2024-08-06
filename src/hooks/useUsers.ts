import { useMutation } from "@tanstack/react-query";

import { createUser } from "~/api/users";

export const useUsers = () => {
  const useCreateUser = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      console.log(data);
    },
  });

  return {
    useCreateUser,
  };
};
