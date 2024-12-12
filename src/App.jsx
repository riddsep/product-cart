import { useState } from "react";
import Modal from "./components/Modal";
import CartProduct from "./components/CartProduct";
import ProductList from "./components/ProductList";

const initialProducts = [
  {
    id: 1,
    name: "Pistachio Baklava",
    images: {
      desktop: "image-baklava-desktop.jpg",
      thumbnail: "image-baklava-thumbnail.jpg",
    },
    category: "Middle Eastern Pastry",
    price: 1599,
    stock: 3,
  },
  {
    id: 2,
    name: "Salted Caramel Brownie",
    images: {
      desktop: "image-brownie-desktop.jpg",
      thumbnail: "image-brownie-thumbnail.jpg",
    },
    category: "Chocolate Dessert",
    price: 399,
    stock: 5,
  },
  {
    id: 3,
    name: "Red Velvet Cake",
    images: {
      desktop: "image-cake-desktop.jpg",
      thumbnail: "image-cake-thumbnail.jpg",
    },
    category: "Layered Cake",
    price: 2000,
    stock: 2,
  },
  {
    id: 4,
    name: "Vanilla Bean Crème Brûlée",
    images: {
      desktop: "image-creme-brulee-desktop.jpg",
      thumbnail: "image-creme-brulee-thumbnail.jpg",
    },
    category: "French Dessert",
    price: 850,
    stock: 4,
  },
  {
    id: 5,
    name: "Macaron Mix of Five",
    images: {
      desktop: "image-macaron-desktop.jpg",
      thumbnail: "image-macaron-thumbnail.jpg",
    },
    category: "French Pastry",
    price: 1299,
    stock: 6,
  },
  {
    id: 6,
    name: "Lemon Meringue Pie",
    images: {
      desktop: "image-meringue-desktop.jpg",
      thumbnail: "image-meringue-thumbnail.jpg",
    },
    category: "Italian Dessert",
    price: 650,
    stock: 1,
  },
  {
    id: 7,
    name: "Vanilla Panna Cotta",
    images: {
      desktop: "image-panna-cotta-desktop.jpg",
      thumbnail: "image-panna-cotta-thumbnail.jpg",
    },
    category: "Italian Dessert",
    price: 799,
    stock: 2,
  },
  {
    id: 8,
    name: "Classic Tiramisu",
    images: {
      desktop: "image-tiramisu-desktop.jpg",
      thumbnail: "image-tiramisu-thumbnail.jpg",
    },
    category: "Italian Dessert",
    price: 999,
    stock: 3,
  },
  {
    id: 9,
    name: "Waffle with Berries",
    images: {
      desktop: "image-waffle-desktop.jpg",
      thumbnail: "image-waffle-thumbnail.jpg",
    },
    category: "Belgian Dessert",
    price: 550,
    stock: 7,
  },
];

function App() {
  const [products, setProduct] = useState(initialProducts);
  const [addToCart, setAddToCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  console.log(addToCart);

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
              name: product.name,
              price: product.price,
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
    console.log("Order Success");
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
