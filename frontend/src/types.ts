export type RegisterT = {
  name: string;
  email: string;
  password: string;
};

export type LoginT = {
  email: string;
  password: string;
};

export type UserT = {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  token: string;
};

export type AddProductT = {
  name: string;
  description: string;
  category: string;
  image: string;
  price: string;
};

export type ProductT = {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  price: string;
};

export type UpdateProductT = {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string | null;
  price: string;
};
