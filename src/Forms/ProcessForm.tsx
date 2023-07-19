
import { useState } from "react";
import { ModalSend } from "../Components/ModalSend";

export const ProcessForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div>
        <h2 className="text-3xl font-bold text-blue-800 text-center mt-9">
          Formulario Proceso
        </h2>
        <div className="">
          <form className="p-10 bg-white rounded-lg display: block;">
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
              <div className="w-full">
                <label className="block font-serif text-gray-900">Fecha</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="border border-gray-300 text-gray-900 rounded w-full pt-1"
                />
              </div>
              <div className="w-full">
                <label className="block font-serif text-gray-900 sm:ml-5">
                  Dirección
                </label>
                <input type="text" name="2" id="inputCargo" className="border border-gray-300 text-gray-900 rounded w-full p-1"/>
              </div>
              <div className="w-full">
                <label className="block font-serif text-gray-900 sm:ml-5">
                  Proceso afectado
                </label>
                <input type="text" name="2" id="inputCargo" className="border border-gray-300 text-gray-900 rounded w-full p-1"/>
              </div>
            </div>

            <h2 className="mt-4 font-bold text-xl text-slate-400">
              Análisis solución propuesta
            </h2>
            <div className="flex flex-col">
              <div className="flex flex-col sm:flex-row justify-center sm:gap-5">
                <div className="w-full sm:w-1/2">
                  <label className="block mb-2 text-start font-serif text-gray-500 mt-2">
                    Describa brevemente la solución que usted propone
                  </label>
                  <textarea
                    id="message"
                    className="block px-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                  ></textarea>
                </div>

                <div className="w-full sm:w-1/2">
                  <label className="block mb-2 font-serif text-start text-gray-500 mt-2">
                    Para ejecutar esta mejora, ¿Qué recursos necesita?
                  </label>
                  <textarea
                    id="message"
                    className="block px-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                  ></textarea>
                </div>
              </div>
            </div>
            <h2 className="mt-4 font-bold text-xl text-slate-400">
              Indique la cantidad de recursos
            </h2>
            <div className="flex flex-col">
              <div className="flex flex-col sm:flex-row justify-center sm:gap-5">
                <div className="w-full sm:w-1/2">
                  <label className="block mb-2 text-start font-serif text-gray-500 mt-2">
                    Colaboradores
                  </label>
                  <textarea
                    id="message"
                    className="block px-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                  ></textarea>
                </div>

                <div className="w-full sm:w-1/2">
                  <label className="block mb-2 font-serif text-start text-gray-500 mt-2">
                    Actualización procesos
                  </label>
                  <textarea
                    id="message"
                    className="block px-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col sm:flex-row justify-center sm:gap-5">
                <div className="w-full sm:w-1/2">
                  <label className="block mb-2 text-start font-serif text-gray-500 mt-2">
                    Actualización recursos tecnológicos
                  </label>
                  <textarea
                    id="message"
                    className="block px-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                  ></textarea>
                </div>

                <div className="w-full sm:w-1/2">
                  <label className="block mb-2 font-serif text-start text-gray-500 mt-2">
                    Nuevas herramientas tecnológicas
                  </label>
                  <textarea
                    id="message"
                    className="block px-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
          <div className="flex justify-end mt-10 mb-3 gap-5">
          <button className="border border-blue-800 text-blue-900 bg-white w-32 h-10 rounded">
              Limpiar
            </button>
            <button
              onClick={handleModal}
              className="border border-blue-800 text-white rounded bg-blue-900 w-32 h-10 mr-5 "
            >
              Enviar datos
            </button>
            
            {isModalOpen && (
              <ModalSend isModalOpen={isModalOpen} onClose={handleModal} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
