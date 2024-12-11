import { ShoppingCart } from "lucide-react";

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
      <div className="flex w-4/5 mx-auto gap-16 my-10">
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
    <div className="flex-1 ">
      <div className="bg-white p-5 rounded-xl ">
        <h1 className="text-2xl font-semibold text-[#C73A0F]">You Cart(1)</h1>
        <div>
          <h1>Brownie</h1>
          <span>2x</span>
          <span>$7.00</span>
          <span>$14.00</span>
        </div>
      </div>
    </div>
  );
}

function Button({ children, className }) {
  return <button className={`px-4 py-2 ${className}`}>{children}</button>;
}

export default App;
