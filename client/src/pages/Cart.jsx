import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CartItem from "../components/CartItem";
import { ToastContainer, toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const [totalAmt, setTotalAmt] = useState(null);
  const [payNow, setPayNow] = useState(false);
  const userInfo = useSelector((state) => state.bazar.userInfo);

  useEffect(() => {
    let price = 0;
    productData.map((product) => (price += product.price * product.quantity));
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const payment = async (token) => {
    await axios.post("https://eBazaar-api-backend/pay", {
      amount: totalAmt * 100,
      token: token,
    });
  };

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to Checkout");
    }
  };
  return (
    <div className="mt-24 flex flex-col items-center min-h-screen px-1">
      <div className="flex gap-3 flex-wrap sm:flex-nowrap justify-center sm:justify-start max-w-screen-xl p-4 my-1">
        <div className="w-5/6 sm:w-1/2  md:w-2/3">
          <CartItem />
        </div>
        <div className="w-5/6 sm:w-1/2 pl-5 md:pl-0 md:w-1/3 text-sm lg:text-base flex flex-col gap-3 items-center text-gray-800  pt-3">
          <h2 className="w-full font-titleFont font-semibold  text-gray-900 text-2xl mb-3">
            Cart Total
          </h2>
          <div className="w-full flex items-center gap-3 mb-1">
            <span className="w-1/5">Subtotal</span>
            <p className="w-4/5 text-lg">${totalAmt}</p>
          </div>
          <div className="flex gap-3 w-full mb-4">
            <span className="w-1/5">Shipping</span>
            <p className="w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              consequuntur hic unde porro culpa dolores reprehenderit provident{" "}
            </p>
          </div>
          <div className="border border-gray-600 w-full px-2 mb-4"></div>
          <div className="flex  justify-between w-full items-center">
            <span>Total</span>
            <p className="text-lg font-semibold">$ {totalAmt}</p>
          </div>

          <button
            className="bg-gray-900 text-white w-full py-2"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
          {payNow && (
            <div className="w-full mt-2 flex items-center justify-center">
              <StripeCheckout
                stripeKey="pk_test_51NPN6ZSAdCrwmZUXYsOcpBg6s7nFA90QIR1frvzXZKrHQo5wL5spmSyC6zVbqOWQEfAaPgeSLoviCfSmaCwUZvJT00Ufprot9c"
                name="Bazar Online Shopping"
                amount={totalAmt * 100}
                label="Pay to bazar"
                description={`Your Payment amount is $${totalAmt}`}
                token={payment}
                email={userInfo.email}
                className="w-full"
              />
            </div>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Cart;
