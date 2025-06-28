export const Confirm = ({ setIsOpenIn, action }) => {
  return (
    <div className="confirm-content">
      <p>Esta seguro de que quiere borrar el contenido del carrito?</p>

      <div className="modal-box-btns">
        <button onClick={() => action()}>Confirmar</button>
        <button onClick={() => setIsOpenIn("")}>Cancelar</button>
      </div>
    </div>
  );
};
