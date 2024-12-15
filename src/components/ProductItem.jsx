import { CircleMinus, CirclePlus } from "lucide-react";
import { Button } from "./Button";

function ProductItem({ onAddToCart, addToCart, onRemove, products }) {
  return (
    <div className="grid grid-cols-3 gap-y-10 gap-x-5">
      {products.map((product) => (
        <div key={product.id} className="">
          <div
            className={`relative w-full mb-8 bg-green-50 rounded-xl ${
              addToCart.some((item) => item.id === product.id)
                ? "outline-[3px] outline-[#00AA5B] outline rounded-xl"
                : ""
            }`}
          >
            <img
              src={
                Array.isArray(product.images)
                  ? product.images[0]
                  : product.images
              }
              alt={product.category}
              className={`h-64 max-w-64 mx-auto ${
                product.stock === 0 ? "grayscale" : ""
              }`}
              height={208}
              loading="lazy"
            />
            <span
              className={`${
                product.stock === 0 ? "grayscale" : ""
              } absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full flex justify-center items-center w-40 gap-2 bg-[#00AA5B] text-white`}
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
          <h1 className="font-semibold text-lg">
            {product.title.length > 25
              ? product.title.slice(0, 25) + "..."
              : product.title}
          </h1>
          <p className="mb-2 text-sm">{product.category}</p>
          <p className="text-sm">Stock: {product.stock}</p>
          <p className="font-bold text-[#00AA5B]">
            ${((product.price * 100) / 100).toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
}
export default ProductItem;
