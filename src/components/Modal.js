import "../styles/Modal.css";
import { NewProductForm } from "./ModalContent/NewProductForm";

export const Modal = ({ isOpenIn, setIsOpenIn, saveNewProduct }) => {
  switch (isOpenIn) {
    case "NewProductForm":
      return (
      <NewProductForm setIsOpenIn={setIsOpenIn} saveNewProduct={saveNewProduct} />
    );  
    //case "":
    default:
      break;
  }
};
