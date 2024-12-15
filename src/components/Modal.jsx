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
                <img src={item.thumbnail} alt="" className="w-20" />
                <div>
                  <h2 className="text-sm font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-500">
                    {item.quantity}x @ ${((item.price * 100) / 100).toFixed(2)}
                  </p>
                </div>
              </div>
              <span className="text-sm font-bold text-[#00AA5B]">
                ${((item.price * item.quantity * 100) / 100).toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-between items-center">
          <h2 className="text-lg font-bold">Total</h2>
          <span className="text-lg font-bold text-[#00AA5B]">
            $
            {addToCart
              .reduce(
                (acc, curr) => acc + (curr.quantity * curr.price * 100) / 100,
                0
              )
              .toFixed(2)}
          </span>
        </div>

        <button
          onClick={onOrder}
          className="mt-6 bg-[#00AA5B] text-white py-2 px-4 rounded-full w-full hover:bg-[#00AA5B]"
        >
          Start Order
        </button>
      </div>
    </div>
  );
}
export default Modal;
