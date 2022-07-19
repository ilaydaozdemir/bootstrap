import React from "react";
import { useCallback } from "react";
import { useCart } from "react-use-cart";

import "./Cart.css";
const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <h5 className="text-center py-5">My Cart is Empty</h5>;
  return (
    <div className="container-fluid py-3">
      <div className="row">
        <h4 className="text-center py-3 text-decoration-underline">My Cart</h4>
        <div className="col-12 py-4 shadow">
          <div className="d-flex justify-content-center ">
            <p className="position-relative fw-bolder text-title ">
              {" "}
              Cart{" "}
              <span className="position-absolute translate-middle rounded-pill badge bg-danger mx-1">
                {totalUniqueItems}
              </span>
            </p>
            <p className="fw-bolder text-title  mx-4">
              Total Items
              <span className="position-absolute translate-middle rounded-pill badge bg-success mx-1">
                {" "}
                {totalItems}
              </span>
            </p>
          </div>
          <div>
            <table className="table table-light table-hover m-0">
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img
                          src={item.img}
                          className="img-cart"
                          alt={item.title}
                        />
                      </td>
                      <td>{item.title}</td>
                      <td>${item.price}</td>
                      <td>Quantity: {item.quantity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
