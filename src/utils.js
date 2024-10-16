// const baseUrl = `https://react-cms.liara.run/`;
const baseUrl = `https://react-cms.liara.run/`;

const getAllUsers = async () => {
  const res = await fetch(`${baseUrl}users`);
  const datas = await res.json();

  return datas;
};
const createUser = async (username, email, phone, Gender, fullname, password, Adress, status) => {
  let newUserInfos = {
    username,
    fullname,
    email,
    phone,
    password,
    Adress,
    Gender,
    status,
    profile: "https://cdn-icons-png.flaticon.com/512/9385/9385289.png",
  };

  const res = await fetch(`${baseUrl}users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUserInfos),
  });
  return res;
};

const deleteUser = async (userId) => {
  const res = await fetch(`${baseUrl}users/${userId}`, {
    method: "DELETE",
  });
  return res;
};

const getAllProducts = async () => {
  let res = await fetch(`${baseUrl}products`);
  let datas = res.json();

  return datas;
};

const createProduct = async (productName, productPrice, productStatus) => {
  let newProductInfo = {
    name: productName,
    price: Number(productPrice).toLocaleString(),
    status: productStatus,
    profile: "https://cdn-icons-png.flaticon.com/512/9385/9385289.png",
  };
  const res = await fetch(`${baseUrl}products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProductInfo),
  });
  return res;
};

const deleteProduct = async (productId) => {
  const res = await fetch(`${baseUrl}products/${productId}`, {
    method: "DELETE",
  });
  return res;
};

const getProductById = async (productId) => {
  const res = await fetch(`${baseUrl}products/${productId}`);
  let data = await res.json();
  if (res.status === 404) {
    return false;
  } else {
    return data;
  }
};

const updateProduct = async (productId, productName, productStatus, productStock, productPrice, productProfile) => {
  const res = await fetch(`${baseUrl}products/${productId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: productId,
      name: productName,
      status: productStatus,
      inStock: productStock,
      price: productPrice,
      profile: productProfile,
    }),
  });
  return res
};

export { baseUrl, getAllUsers, createUser, deleteUser, getAllProducts, deleteProduct, getProductById, updateProduct, createProduct };
