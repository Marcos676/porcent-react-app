import "../styles/Modal.css";
import { NewProductForm } from "./ModalContent/NewProductForm";
import { Confirm } from "./ModalContent/Confirm";

export const Modal = ({ isOpenIn, setIsOpenIn, saveNewProduct }) => {
  let content;
  switch (isOpenIn) {
    case "NewProductForm":
      content = <NewProductForm
          setIsOpenIn={setIsOpenIn}
          saveNewProduct={saveNewProduct}
        />;
      break;
    case "Confirm":
      content = <Confirm setIsOpenIn={setIsOpenIn} />
      break;
    default:
      return
  }

  return (
    <div className="modal-background">
      <div className="modal-content">{content}</div>
    </div>
  );
};
