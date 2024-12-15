import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import CartProduct from "./components/CartProduct";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProduct] = useState([]);
  const [addToCart, setAddToCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handlerAddToCart = (product) => {
    if (!product.stock) return;
    setAddToCart((currProduct) => {
      const existing = currProduct.find((item) => item.id === product.id);

      return existing
        ? currProduct.map((item) =>
            item.id === product.id && item.quantity < product.stock
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [
            ...currProduct,
            {
              id: product.id,
              title: product.title,
              price: product.price,
              thumbnail: product.thumbnail,
              category: product.category,
              images: product.images,
              quantity: 1,
            },
          ];
    });
  };

  const handlerRemoveFromCart = (product) => {
    setAddToCart((currProduct) =>
      currProduct
        .map((item) =>
          item.quantity !== 0 && item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handlerOrder = () => {
    setProduct((currProduct) =>
      currProduct.map((product) => {
        const orderedItem = addToCart.find((item) => item.id === product.id);

        return orderedItem
          ? { ...orderedItem, stock: product.stock - orderedItem.quantity }
          : product;
      })
    );
    setAddToCart([]);
    setShowModal(false);
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProduct(data.products);
      } catch (err) {
        console.log(err);
      }
    }

    fetchProducts();
  }, []);

  return (
    <>
      <div className="flex w-4/5 mx-auto gap-10 my-10">
        <ProductList
          onAddToCart={handlerAddToCart}
          addToCart={addToCart}
          onRemove={handlerRemoveFromCart}
          products={products}
        />
        <CartProduct
          addToCart={addToCart}
          setShowModal={() => setShowModal((curr) => !curr)}
        />
      </div>
      {showModal && (
        <Modal
          addToCart={addToCart}
          setShowModal={() => setShowModal((curr) => !curr)}
          onOrder={handlerOrder}
        />
      )}
    </>
  );
}

export default App;
