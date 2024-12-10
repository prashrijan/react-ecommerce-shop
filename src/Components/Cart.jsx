import CartProduct from "./CartProduct";

const Cart = ({ datas }) => {
  return (
    <div className="mt-10 p-10 flex gap-6 flex-col">
      {datas.length === 0 ? (
        <h2 className="text-xl font-bold text-center text-orange-500 mt-10">
          No items added in cart yet.
        </h2>
      ) : (
        datas.map((data, index) => {
          return <CartProduct key={index} data={data} />;
        })
      )}
    </div>
  );
};

export default Cart;
