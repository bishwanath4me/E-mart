import React, { useEffect } from "react";
import AdreessCard from "../AdressCard/AdreessCard";
import { Button } from "@mui/material";
import Cartitem from "../Cart/Cartitem";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getOrderById } from "../../../State/Order/Action";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get("order_id");
  console.log("order id from summary ", orderId);
  useEffect(() => {
    if (orderId) {
      dispatch(getOrderById(orderId));
    }
  }, [dispatch, orderId]);

  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AdreessCard address={order.order?.shippingAddress} />
      </div>
      <div className="mt-5">
        <div className="lg:grid grid-cols-3  relative">
          <div className="lg:col-span-2 lg:px-5 bg-white">
            <div className=" space-y-3">
              {order.order?.orderItems.map((item) => (
                <>
                  <Cartitem item={item} showButton={false} />
                </>
              ))}
            </div>
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
            <div className="border p-5 bg-white shadow-lg rounded-md">
              <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
              <hr />

              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black ">
                  <span>Price ({order.order?.totalItem} item)</span>
                  <span>₹{order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-700">-₹{order.order?.discounte}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-green-700">Free</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span className="text-green-700">₹{order.order?.totalDiscountedPrice}</span>
                </div>
              </div>

              <Button
                variant="contained"
                type="submit"
                sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
              >
                Payment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
