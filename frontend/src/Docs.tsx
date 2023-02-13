import { useState } from "react";
import authServices from "./services/authServices";
import { AddProductT, LoginT, RegisterT, UpdateProductT } from "./types";
import productServices from "./services/productServices";

const Docs = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
  });
  const [productImg, setProductImg] = useState<any | null>(null);
  const [updatedProduct, setUpdatedProduct] = useState({
    id: "",
    name: "",
    description: "",
    category: "",
    price: "",
  });
  const [updateProductImg, setUpdatedProductImg] = useState<any | null>(null);

  const register = async () => {
    const payload: RegisterT = {
      name: "user3",
      email: "user3@gmail.com",
      password: "user3pass",
    };

    const user = await authServices.register(payload);
    console.log({ user });
  };

  const login = async () => {
    const payload: LoginT = {
      email: "user3@gmail.com",
      password: "user3pass",
    };

    const user = await authServices.login(payload);
    console.log({ user });
  };

  const logout = () => {
    authServices.logout();
  };

  const addProduct = async (e: any) => {
    e.preventDefault();

    const payload: AddProductT = {
      name: product.name,
      description: product.description,
      category: product.category,
      image: productImg,
      price: product.price,
    };

    const newProduct = await productServices.addProduct(payload);

    console.log({ newProduct });
  };

  const getProducts = async () => {
    const products = await productServices.getProducts();

    console.log({ products });
  };

  const updateProduct = async (e: any) => {
    e.preventDefault();

    const payload: UpdateProductT = {
      id: updatedProduct.id,
      name: updatedProduct.name,
      description: updatedProduct.description,
      category: updatedProduct.category,
      image: updateProductImg,
      price: updatedProduct.price,
    };

    const update = await productServices.updateProduct(payload);

    console.log({ update });
  };

  const deleteProduct = async (id: string) => {
    const payload = id;
    const deleted = await productServices.deleteProduct(payload);

    console.log({ deleted });
  };
  return (
    <div className="app">
      <div className="auth">
        <div className="title">
          <h3>Auth functions</h3>
        </div>
        <div className="body">
          <button onClick={register}>Register</button>
          <button onClick={login}>Login</button>
          <button onClick={logout}>Logout</button>
        </div>
      </div>

      <div className="product">
        <div className="title">
          <h3>Product functions</h3>
        </div>

        <div className="body">
          <button onClick={getProducts}>Get Products</button>
          <button onClick={() => deleteProduct("63ea85e58d4695962d734e63")}>
            Delete Product
          </button>
        </div>

        <div className="body">
          <form onSubmit={addProduct}>
            <h4>Add Product</h4>
            <input
              type="text"
              placeholder="Product name"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Description"
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Category"
              value={product.category}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Price"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />
            <input
              type="file"
              onChange={(e) => setProductImg(e.target.files?.[0])}
            />
            <button>Add Product</button>
          </form>
        </div>

        <div className="body">
          <form onSubmit={updateProduct}>
            <h4>Update Product</h4>
            <input
              type="text"
              placeholder="Product ID"
              value={updatedProduct.id}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, id: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Product name"
              value={updatedProduct.name}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Description"
              value={updatedProduct.description}
              onChange={(e) =>
                setUpdatedProduct({
                  ...updatedProduct,
                  description: e.target.value,
                })
              }
            />
            <input
              type="text"
              placeholder="Category"
              value={updatedProduct.category}
              onChange={(e) =>
                setUpdatedProduct({
                  ...updatedProduct,
                  category: e.target.value,
                })
              }
            />
            <input
              type="number"
              placeholder="Price"
              value={updatedProduct.price}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, price: e.target.value })
              }
            />
            <input
              type="file"
              onChange={(e) => setUpdatedProductImg(e.target.files?.[0])}
            />
            <button>Update Product</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Docs;
