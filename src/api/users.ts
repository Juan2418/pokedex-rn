export type User = {
  id: string;
} & UserParams;

export interface UserParams {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
}

export const createUser = async (user: UserParams): Promise<User> => {
  console.log(`[API] Registering new User: ${JSON.stringify(user)}`);

  const response = await new Promise((resolve) =>
    setTimeout(() => {
      resolve(user);
    }, 1000),
  );

  return response as User;
};
