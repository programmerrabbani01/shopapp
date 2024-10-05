export const categoryAll = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  return res.json();
};

export const productAll = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

export const singleProduct = async (id: string) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
};

export const specificCategory = async (category: string) => {
  const resCart = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return resCart.json();
};
