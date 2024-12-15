import { CircleX } from "lucide-react";
import Total from "./Total";
import { Button } from "./Button";

function CartProduct({ addToCart, setShowModal }) {
  const isCartEmpty = addToCart.length === 0;
  return (
    <div className="flex-1 relative">
      <div className="bg-white p-6 rounded-xl sticky top-10">
        <h1 className="text-2xl font-semibold text-[#00AA5B] mb-5">
          You Cart(
          {addToCart.reduce((acc, curr) => (acc += curr.quantity), 0)})
        </h1>
        {isCartEmpty && (
          <div className="grid place-items-center">
            <img src="illustration-empty-cart.svg" />
            <h1>Your added items will appear here</h1>
          </div>
        )}
        {addToCart.map((product) => (
          <div
            className="flex justify-between items-center border-b py-2"
            key={product.id}
          >
            <div>
              <h1 className="text-sm font-semibold">{product.title}</h1>
              <span className="mr-2 text-sm font-semibold text-[#00AA5B]">
                {product.quantity}x
              </span>
              <span className="mr-2 text-sm font-thin">
                @ ${((product.price * 100) / 100).toFixed(2)}
              </span>
              <span className=" text-sm">
                ${((product.price * product.quantity * 100) / 100).toFixed(2)}
              </span>
            </div>
            <button>
              <CircleX color="#00AA5B" strokeWidth={1.2} />
            </button>
          </div>
        ))}

        {addToCart.length > 0 && <Total addToCart={addToCart} />}
        {addToCart.length > 0 && (
          <Button
            className={
              "bg-[#00AA5B] text-white w-full rounded-full hover:bg-[#17774a]"
            }
            onClick={setShowModal}
          >
            Confirm Order
          </Button>
        )}
      </div>
    </div>
  );
}
export default CartProduct;
