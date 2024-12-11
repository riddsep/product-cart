import { CircleX, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Pistachio Baklava",
    images: {
      desktop: "image-baklava-desktop.jpg",
      thumbnail: "image-baklava-thumbnail.jpg",
    },
    category: "Middle Eastern Pastry",
    price: 15.99,
  },
  {
    id: 2,
    name: "Salted Caramel Brownie",
    images: {
      desktop: "image-brownie-desktop.jpg",
      thumbnail: "image-brownie-thumbnail.jpg",
    },
    category: "Chocolate Dessert",
    price: 3.99,
  },
  {
    id: 3,
    name: "Red Velvet Cake",
    images: {
      desktop: "image-cake-desktop.jpg",
      thumbnail: "image-cake-thumbnail.jpg",
    },
    category: "Layered Cake",
    price: 20.0,
  },
  {
    id: 4,
    name: "Vanilla Bean Crème Brûlée",
    images: {
      desktop: "image-creme-brulee-desktop.jpg",
      thumbnail: "image-creme-brulee-thumbnail.jpg",
    },
    category: "French Dessert",
    price: 8.5,
  },
];

function App() {
  return (
    <>
      <div className="flex w-4/5 mx-auto gap-10 my-10">
        <ProductList />
        <CartProduct />
      </div>
    </>
  );
}

function ProductList() {
  return (
    <div>
      <h1 className="text-4xl mb-10 font-bold">Desserts</h1>
      <ProductItem />
    </div>
  );
}
function ProductItem() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {products.map(({ id, name, images, category, price }) => (
        <div key={id} className="max-w-64">
          <div className="relative w-full mb-8 ">
            <img src={images.desktop} alt={category} className="rounded-xl" />
            <Button className="absolute -bottom-5 left-1/2 -translate-x-1/2 border border-black bg-white rounded-full flex justify-center items-center w-40 gap-2">
              <ShoppingCart size={20} color="#C73A0F" />
              Add to Cart
            </Button>
          </div>
          <h1 className="font-semibold text-lg">{name}</h1>
          <p className="mb-2 text-sm">{category}</p>
          <p className="font-bold text-[#C73A0F]">${price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

function CartProduct() {
  return (
    <div className="flex-1">
      <div className="bg-white p-5 rounded-xl ">
        <h1 className="text-2xl font-semibold text-[#C73A0F] mb-5">
          You Cart(1)
        </h1>
        <div className="flex justify-between items-center border-b py-2">
          <div>
            <h1 className="text-sm font-semibold">Vanilla Bean Crème Brûlée</h1>
            <span className="mr-2 text-sm font-semibold text-[#C73A0F]">
              2x
            </span>
            <span className="mr-2 text-sm font-thin">@ $7.00</span>
            <span className=" text-sm">$14.00</span>
          </div>
          <button>
            <CircleX color="#C73A0F" strokeWidth={1.2} />
          </button>
        </div>

        <Total />
        <Button
          className={
            "bg-[#C73A0F] text-white w-full rounded-full hover:bg-[#a7310d]"
          }
        >
          Confirm Order
        </Button>
      </div>
    </div>
  );
}

function Total() {
  return (
    <div className="flex justify-between items-center py-2 mb-5">
      <h1 className="text-xl font-semibold">Total</h1>
      <span className="mr-2  font-semibold text-[#C73A0F] text-xl">$14.00</span>
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
