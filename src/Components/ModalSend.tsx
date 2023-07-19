import { useState } from "react";

type ModalProps = {
  isModalOpen: boolean;
  onClose: () => void;
};

export const ModalSend = ({ isModalOpen, onClose }: ModalProps) => {
  const [isSending, setIsSending] = useState(false);

  const handleAccept = () => {
    setIsSending(true);
  };

  const handleFinish = () => {
    setIsSending(false);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isModalOpen ? "" : "hidden"
      }`}
    >
      <div className="fixed inset-0 bg-blue-950 opacity-90"></div>
      <div className="bg-white opacity-90 rounded p-8 border border-gray-200 ">
        {isSending ? (
          <div>
            <div className="rounded-full bg-gray-300 w-20 h-20 flex items-center justify-center">
              <i className="fa-solid fa-check text-5xl text-blue-950"></i>
            </div>
            <h2 className="text-blue-900 text-3xl font-bold mt-3">Enviar datos</h2>
          
            <p className="mt-3 text-gray-500">
              Toda la información suministrada se ha enviado exitósamente y será
              tomada
            </p>
            <p  className="text-gray-500">en cuenta, para llevarse a cabo.</p>
            <div className="flex justify-end mt-10 gap-5">
              <button
                onClick={handleFinish}
                className="border border-blue-800 text-white rounded bg-blue-950 w-32 h-10"
              >
                Finalizar
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="rounded-full bg-gray-300 w-20 h-20 flex items-center justify-center">
              <i className="fa-solid fa-triangle-exclamation text-5xl text-blue-950"></i>
            </div>
            <h2 className="text-blue-900 text-3xl font-bold">Enviar datos</h2>
            <p className="mt-3 text-gray-500">
              ¿Está seguro de enviar la información suministrada en los
              formularios?
            </p>
            <p className="mt-3 text-gray-500 ">
              Tener en cuenta que la información que va a ingresar, será
              utilizada para llevar a cabo el proceso.
            </p>
            <div className="flex justify-end mt-10 gap-5">
              <button
                onClick={onClose}
                className="border border-blue-800 text-blue-900 bg-white w-32 h-10 rounded"
              >
                Cancelar
              </button>
              <button
                onClick={handleAccept}
                className="border border-blue-800 text-white rounded bg-blue-950 w-32 h-10"
              >
                Aceptar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
