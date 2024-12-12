import { CircleMinus, CirclePlus, CircleX } from "lucide-react";
import { useState } from "react";

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
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
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

function ProductList({ onAddToCart, addToCart, onRemove, products }) {
  return (
    <div>
      <h1 className="text-4xl mb-10 font-bold">Desserts</h1>
      <ProductItem
        onAddToCart={onAddToCart}
        addToCart={addToCart}
        onRemove={onRemove}
        products={products}
      />
    </div>
  );
}
function ProductItem({ onAddToCart, addToCart, onRemove, products }) {
  return (
    <div className="grid grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product.id} className="max-w-64">
          <div className="relative w-full mb-8 ">
            <img
              src={product.images.desktop}
              alt={product.category}
              className={`rounded-xl  ${
                addToCart.some((item) => item.id === product.id)
                  ? "border-[3px] border-[#C73A0F]"
                  : ""
              }`}
            />
            <span
              className={`absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full flex justify-center items-center w-40 gap-2 bg-[#C73A0F] text-white`}
            >
              <Button onClick={() => onRemove(product)}>
                <CircleMinus size={20} />
              </Button>
              <span>
                {addToCart.find((item) => item.id === product.id)?.quantity ||
                  0}
              </span>
              <Button onClick={() => onAddToCart(product)}>
                <CirclePlus size={20} />
              </Button>
            </span>
          </div>
          <h1 className="font-semibold text-lg">{product.name}</h1>
          <p className="mb-2 text-sm">{product.category}</p>
          <p className="text-sm">Stock: {product.stock}</p>
          <p className="font-bold text-[#C73A0F]">
            ${(product.price / 100).toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
}

function CartProduct({ addToCart, setShowModal }) {
  return (
    <div className="flex-1 relative">
      <div className="bg-white p-6 rounded-xl sticky top-10">
        <h1 className="text-2xl font-semibold text-[#C73A0F] mb-5">
          You Cart(
          {addToCart.reduce((acc, curr) => (acc += curr.quantity), 0)})
        </h1>
        {addToCart.map((product) => (
          <div
            className="flex justify-between items-center border-b py-2"
            key={product.id}
          >
            <div>
              <h1 className="text-sm font-semibold">{product.name}</h1>
              <span className="mr-2 text-sm font-semibold text-[#C73A0F]">
                {product.quantity}x
              </span>
              <span className="mr-2 text-sm font-thin">
                @ ${(product.price / 100).toFixed(2)}
              </span>
              <span className=" text-sm">
                ${((product.price * product.quantity) / 100).toFixed(2)}
              </span>
            </div>
            <button>
              <CircleX color="#C73A0F" strokeWidth={1.2} />
            </button>
          </div>
        ))}

        <Total addToCart={addToCart} />
        <Button
          className={
            "bg-[#C73A0F] text-white w-full rounded-full hover:bg-[#a7310d]"
          }
          onClick={setShowModal}
        >
          Confirm Order
        </Button>
      </div>
    </div>
  );
}

function Total({ addToCart }) {
  return (
    <div className="flex justify-between items-center py-2 mb-5">
      <h1 className="text-xl font-semibold">Total</h1>
      <span className="mr-2  font-semibold text-[#C73A0F] text-xl">
        $
        {addToCart
          .reduce((acc, curr) => acc + (curr.quantity * curr.price) / 100, 0)
          .toFixed(2)}
      </span>
    </div>
  );
}

function Modal({ setShowModal, addToCart, onOrder }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        <button
          onClick={setShowModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
        <h1 className="text-xl font-bold text-center mb-4">Order Confirmed</h1>
        <p className="text-center text-gray-600 mb-6">
          We hope you enjoy your food!
        </p>

        <div className="divide-y divide-gray-200">
          {addToCart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center py-2"
            >
              <div className="flex items-center gap-2">
                <img src={item.images.thumbnail} alt="" className="w-20" />
                <div>
                  <h2 className="text-sm font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">
                    {item.quantity}x @ ${(item.price / 100).toFixed(2)}
                  </p>
                </div>
              </div>
              <span className="text-sm font-bold text-[#C73A0F]">
                ${((item.price * item.quantity) / 100).toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-between items-center">
          <h2 className="text-lg font-bold">Total</h2>
          <span className="text-lg font-bold text-[#C73A0F]">
            $
            {addToCart
              .reduce(
                (acc, curr) => acc + (curr.quantity * curr.price) / 100,
                0
              )
              .toFixed(2)}
          </span>
        </div>

        <button
          onClick={onOrder}
          className="mt-6 bg-[#C73A0F] text-white py-2 px-4 rounded-full w-full hover:bg-[#a7310d]"
        >
          Start Order
        </button>
      </div>
    </div>
  );
}

function Button({ children, className, onClick }) {
  return (
    <button className={`px-4 py-2 ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default App;
