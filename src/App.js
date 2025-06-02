import "./App.css";
import { useState } from "react";

function App() {
  const [originalPrice, setOriginalPrice] = useState("");
  const [porcentDiscount, setPorcentDiscount] = useState("");
  const [discount, setDiscount] = useState("");
  const [finalPrice, setFinalPrice] = useState("");

  const handleValues = (price, disc) => {
    //Actualizacion de valores
    setOriginalPrice(price);
    setPorcentDiscount(disc);

    //si algun input esta vacío no muestra ningun resultado
    if (price === "" || disc === "") {//si un input esta vacío devuelve un string vacío
      setDiscount("");
      setFinalPrice("");
    } else {      
      setDiscount((price * disc) / 100);
      setFinalPrice(price - ( (price * disc) / 100 ));
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div><i class="fa-solid fa-bookmark"></i></div>
      </header>
      <main>
        <div className="title-description">
          <h1>Título</h1>
          <p>Descripción de uso</p>
        </div>
        <div className="functional-app">
          <div className="inputs-box">
            <input
              className="original-price"
              type="number"
              min={0}
              placeholder="$ Precio"
              onInput={(e) => handleValues(e.target.value, porcentDiscount)}
            />
            <input
              className="porcent-to-discount"
              type="number"
              min={0}
              max={100}
              placeholder="% Descuento"
              onInput={(e) => handleValues(originalPrice, e.target.value)}
            />
            %
          </div>
          <p className="discount">Descuento: {discount}</p>
          <p className="final-price">Precio final: {finalPrice}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
