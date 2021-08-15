export const getProducts = async (setLoading, setProducts, token) => {
  setLoading(true);

  const request = await fetch("https://desafio-m03.herokuapp.com/produtos/", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  setLoading(false);

  const response = await request.json();
  return setProducts(response);
};
