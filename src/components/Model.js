import React from "react";
import { closeModel } from "../features/model/modelSlice";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

const Model = () => {
  const dispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping carts?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModel());
            }}
          >
            confirm
          </button>

          <button
            type="button"
            className="btn clear-btn"
            onClick={() => {
              dispatch(closeModel());
            }}
          >
            cancle
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Model;
