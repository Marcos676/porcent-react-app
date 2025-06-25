import "../styles/SidebarShoppingCart.css";
import { useState } from "react";

import {
  getDiscount,
  getFinalPrice,
  getTotalPrice,
  getTotalDiscount,
} from "../utils/priceCalculation";

export const SidebarShoppingCart = ({ setShow }) => {
  const [showDetail, setShowDetail] = useState(false);

  let products = [
    {
      id: 1,
      name: "Yerba mate",
      originalPrice: 1000,
      porcentDiscount: 25,
    },
    {
      id: 2,
      name: "Yerba mate con limon",
      originalPrice: 1000,
      porcentDiscount: 20,
    },
    {
      id: 3,
      name: "Yerba mate con limon",
      originalPrice: 1000,
      porcentDiscount: 20,
    },
    {
      id: 4,
      name: "Yerba mate con limon",
      originalPrice: 1000,
      porcentDiscount: 20,
    },
    {
      id: 5,
      name: "Yerba mate con limon",
      originalPrice: 1000,
      porcentDiscount: 20,
    },
  ];

  const handleDropdownDetail = (id) => {
    let detailBox = document.querySelector(
      `.sidebar-shopping-cart .item-${id}`
    );

    if (!showDetail) {
      setShowDetail(true);
      detailBox.style.height = "71px";
    } else {
      setShowDetail(false);
      detailBox.style.height = "0px";
    }
  };

  return (
    <div className="sidebar-shopping-cart">
      <header className="sidebar-shopping-cart-header">
        <div className="header-row-container">
          <i className="fa-solid fa-cart-shopping cart-shopping-class "></i>
          <h2>Carrito de compras</h2>
          <i
            className="fa-solid fa-xmark xmark-class"
            onClick={() => setShow(false)}
          ></i>
        </div>
        <i className="fas fa-info-circle info-circle-class"></i>
      </header>
      <div className="cart-content">
        <div className="items-list">
          {products.map(({ id, name, originalPrice, porcentDiscount }) => {
            return (
              <div className="item-container" key={id}>
                <div
                  className="name-price-item"
                  onClick={() => handleDropdownDetail(id)}
                >
                  <span>
                    <i className="fa-solid fa-caret-right result-icons"></i>
                    {name}
                  </span>
                  <span>${getFinalPrice(originalPrice, porcentDiscount)}</span>
                </div>
                <div className={`dropdown-detail-item item-${id}`}>
                  <div className="detail-item">
                    <span>{`Precio original: $ ${originalPrice}`} </span>
                    <span> {`Descuento: ${porcentDiscount}%`} </span>
                    <span>
                      {" "}
                      {`Ahorro: $ ${getDiscount(
                        originalPrice,
                        porcentDiscount
                      )}`}
                    </span>
                  </div>
                  <div className="action-buttons-container">
                    <i className="fa-solid fa-pen"></i>
                    <i className="fa-solid fa-trash"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total-button-box">
          <div className="total-container">
            <p className="total-price">
              <i className="fa-solid fa-sack-dollar result-icons"></i>{" "}
              {`Total con descuento: $ ${getTotalPrice(products)}`}
            </p>
            <p className="">
              <i className="fa-solid fa-tag result-icons"></i>
              {`Total ahorrado: $ ${getTotalDiscount(products)}`}
            </p>
          </div>
          <button className="clean-cart" type="button">
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-solid fa-arrow-left"></i>
            Vaciar
          </button>
        </div>
      </div>
    </div>
  );
};
