import { CircleMinus, CirclePlus } from "lucide-react";
import { Button } from "./Button";

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
              } ${product.stock === 0 ? "grayscale" : ""}`}
            />
            <span
              className={`${
                product.stock === 0 ? "grayscale" : ""
              } absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full flex justify-center items-center w-40 gap-2 bg-[#C73A0F] text-white`}
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
export default ProductItem;
