import { useState } from "react";
import { useForm } from 'react-hook-form';
import { CharacterizationForm as characterizationFormZod, CharacterizationFormSchema } from '../schemas/formsSchemas';
import { zodResolver } from '@hookform/resolvers/zod';


interface CharacterizationProps {
  nextStep?: () => void;
}

export const CharacterizationForm = ({ nextStep }: CharacterizationProps) => {
  const [inputs, setInputs] = useState([{ id: 1 }]);

  const handleAddInput = () => {
    const newInput = { id: inputs.length + 1 };
    setInputs([...inputs, newInput]);
  };

  const handleRemoveInput = () => {
    if (inputs.length > 1) {
      const updatedInputs = inputs.slice(0, -1);
      setInputs(updatedInputs);
    }
  };

  const {handleSubmit,  register, formState: { errors } } = useForm<characterizationFormZod>({
    resolver: zodResolver(CharacterizationFormSchema)
  })

  const onSubmit = (data:characterizationFormZod) => {
    console.log(data);
  }

  return (
    <>
      <div>
        <h2 className="text-3xl  font-bold text-blue-800 text-center mt-9">
          Formulario Caracterización
        </h2>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}
             className="p-10 bg-white rounded-lg display: block;">
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
              <div className="w-full">
                <label className="block font-serif text-gray-500">Fecha</label>
                <input
                  type="date"
                  // {...register('Date')}
                  id="date"
                  className="border border-gray-300 text-gray-900 rounded w-full pt-1"
                />
                {/* {errors['Date'] &&
                  <p className="text-slate-400 inline-flex">{errors['Date'].message as string}</p>
                } */}
              </div>
              <div className="w-full ">
                <label className="block font-serif text-gray-500">
                  Dirección
                </label>
                <input
                  type="text"
                  id="inputCargo"
                  className="border border-gray-300 text-gray-900 rounded w-full p-1"
                  {...register('Address')}
                />
                {errors['Address'] &&
                <p className="text-red-500 inline-flex">{errors['Address'].message as string}</p>
                }
              </div>
              <div className="w-full">
                <label className="block font-serif text-gray-500">
                  Proceso afectado
                </label>
                <input
                  type="text"
                  id="inputCargo"
                  className="border border-gray-300 text-gray-900 rounded w-full p-1"
                  {...register('AffectedProcess')}
                />
                 {errors['AffectedProcess'] &&
                <p className="text-red-500 inline-flex">{errors['AffectedProcess'].message as string}</p>
                }
              </div>
            </div>
            <h2 className="mt-4 font-bold text-xl text-slate-400">
              Equipo de trabajo
            </h2>
            <div className="flex card border border-gray-200 mt-5 ml-1 mb-5 rounded w-[32rem] sm:w-[87rem] ">
              <div className="flex bg-white sm:mr-10 mr-6 rounded mt-4 ml-2 sm:ml-3  w-[99%]">
                <table className="table-auto w-full sm:ml-1 -ml-1 mb-2">
                  <thead>
                    <tr className="bg-slate-200">
                      <th className="px-4 py-3">Nombre Funcionario</th>
                      <th className="px-4 py-3">Cargo</th>
                      <th className="px-4 py-3">Correo</th>
                    </tr>
                  </thead>
                  <tbody id="tbody">
                    {inputs.map((input) => (
                      <tr key={input.id}>
                        <td>
                          <input
                            type="text"
                            id="inputFuncionario"
                            className="border border-gray-200 text-gray-900 py-2 rounded sm:w-full w-[9rem] p-1"
                            {...register('OfficialName')}
                          />
                          {errors['OfficialName'] &&
                            <p className="text-red-500 inline-flex">{errors['OfficialName'].message as string}</p>
                          }
                        </td>
                        <td>
                          <input
                            type="text"
                            id="inputCargo"
                            className="border border-gray-200 text-gray-900 py-2 rounded sm:w-full w-[9rem] p-1"
                            {...register('Post')}
                          />
                          {errors['Post'] &&
                            <p className="text-red-500 inline-flex">{errors['Post'].message as string}</p>
                          }
                        </td>
                        <td>
                          <input
                            type="text"
                            id="inputCorreo"
                            className="border border-gray-200 text-gray-900 py-2 rounded sm:w-full w-[9rem] p-1"
                            {...register('Email')}
                          />
                          {errors['Email'] &&
                            <p className="text-red-500 inline-flex">{errors['Email'].message as string}</p>
                          }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col gap-1 items-end mr-3 mb-2 mt-4 w-[1%] ml-4">
                <button
                  className="bg-blue-900 text-white sm:w-11 w-10 sm:h-12 h-10  rounded mb-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddInput();
                  }}
                >
                  <i className="fa-sharp fa-solid fa-plus"></i>
                </button>
                <button
                  className="bg-red-600 text-white sm:w-11 w-10 sm:h-10 h-10 rounded"
                  onClick={handleRemoveInput}
                >
                  <i className="fa-sharp fa-solid fa-minus"></i>
                </button>
              </div>
            </div>

            <h2 className="mt-4 font-bold text-xl text-slate-400">
              Caracterización del problema u oportunidad de mejora
            </h2>
            <div className="flex flex-col">
              <div className="flex flex-col sm:flex-row justify-center sm:gap-5">
                <div className="w-full sm:w-1/2">
                  <label className="block mb-2 text-start font-serif text-gray-500 mt-2">
                    Describa brevemente el problema u oportunidad de mejora
                  </label>
                  <textarea
                    id="message"
                    className="block px-2 w-full text-sm text-gray-900 bg-white rounded-lg border "
                    {...register('DescriptionProblem')}
                  >
                   {errors['DescriptionProblem'] && 
                    <p className="text-red-500 inline-flex">{errors['DescriptionProblem'].message as string}</p>
                   } 
                  </textarea>
                </div>

                <div className="w-full sm:w-1/2">
                  <label className="block mb-2 font-serif text-start text-gray-500 mt-2">
                    ¿En qué parte del proceso se encuentra el problema u
                    oportunidad de mejora?
                  </label>
                  <textarea
                    id="message"
                    className="block px-2 w-full text-sm text-gray-900 bg-white rounded-lg border"
                    {...register('ProcessProblem')}
                  >
                    {errors['ProcessProblem'] && 
                      <p className="text-red-500 inline-flex">{errors['ProcessProblem'].message as string}</p>
                    }
                  </textarea>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row ">
                <div className="sm:w-1/3">
                  <div>
                    <label className="block mt-2 font-serif text-start text-gray-500">
                      ¿Por qué motivo se presenta el problema?
                    </label>
                    <select className="border py-2 w-full mt-3 rounded-lg">
                      <option></option>
                      <option>Ausencia de herramientas tecnológicas</option>
                      <option>Infraestructura tecnológica deficiente</option>
                      <option>Falta de capacidad operativa</option>
                      <option>Otros</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className="text-center">
                    <label className="block mb-2 text-start font-serif text-gray-500 mt-3 sm:ml-20">
                      ¿Cuál?
                    </label>
                    <textarea
                      id="message"
                      className="block w-full px-2 text-sm text-gray-900 bg-white rounded-lg border sm:ml-20"
                      {...register('WhatProblem')}
                    >
                      {errors['WhatProblem'] && 
                        <p className="text-red-500 inline-flex">{errors['WhatProblem'].message as string}</p>
                      }
                    </textarea>
                  </div>
                </div>
                <div className="sm:w-1/3">
                  <label className="block mt-2 font-serif text-start text-gray-500 sm:ml-32">
                    ¿Qué tipo de impacto genera el problema?
                  </label>
                  <select className="border py-2 w-full mt-3 rounded-lg sm:ml-32">
                    <option></option>
                    <option>Incumplimiento de los tiempos establecidos</option>
                    <option>Vulneración de la seguridad</option>
                    <option>Aumento de costos</option>
                    <option>Deterioro de la calidad</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center sm:gap-5">
                <div className="w-full sm:w-1/2">
                  <label className="block mb-2 text-start font-serif text-gray-500 mt-2">
                    ¿Cual?
                  </label>
                  <textarea
                    id="message"
                    className="block px-2 w-full text-sm text-gray-900 bg-white rounded-lg border "
                    {...register('WhatImpact')}
                  >
                    {errors['WhatImpact'] && 
                      <p className="text-red-500 inline.flex">{errors['WhatImpact'].message as string}</p>
                    }
                  </textarea>
                </div>
                <div className="w-full sm:w-1/2">
                  <label className="block mb-2 font-serif text-start text-gray-500 mt-2">
                    Describa el funcionanmiento ideal del proceso afectado
                  </label>
                  <textarea
                    id="message"
                    className="block px-2 w-full text-sm text-gray-900 bg-white rounded-lg border "
                    {...register('OperationProcess')}
                  >
                    {errors['OperationProcess'] &&
                      <p className="text-red-500 inline-flex">{errors['OperationProcess'].message as string}</p>
                    }
                  </textarea>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-9 gap-5">
              <button className="border border-blue-800 text-blue-900 bg-white w-32 h-10 rounded">
                Limpiar
              </button>
              <button
              // onClick={nextStep}
                type="submit"
                className="border border-blue-800 text-white rounded bg-blue-900 w-32 h-10 mr-5"
              >
                Siguiente
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
