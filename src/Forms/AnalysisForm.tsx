
import { useForm } from 'react-hook-form';
import { AnalysisForm as analysisFormZod , AnalysisFormSchema } from '../schemas/formsSchemas';
import { zodResolver } from '@hookform/resolvers/zod';

interface AnalysisProps {
  nextStep?: () => void;
  
}

export const AnalysisForm = ({nextStep}: AnalysisProps) => {

  const {handleSubmit,  register, formState: { errors } } = useForm<analysisFormZod>({
    resolver: zodResolver(AnalysisFormSchema)
  })

  const onSubmit = (data:analysisFormZod) => {
    console.log(data);
  }

  return (
    <>
      <div>
        <h2 className="text-3xl font-bold text-blue-800 text-center mt-9">
          Formulario Análisis
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="p-10 bg-white rounded-lg">
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row justify-center sm:gap-5">
              <div className="w-full sm:w-1/2">
                <label className="block mb-2 text-start font-serif text-gray-500 mt-2">
                  Indicador meta proceso afectado
                </label>
                <textarea
                  id="message"
                  className="block px-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                  {...register('GoalIndicator')}
                >
                  {errors['GoalIndicator'] &&
                    <p className="text-slate-400 inline-flex">{errors['GoalIndicator'].message as string}</p>
                  }
                </textarea>
              </div>

              <div className="w-full sm:w-1/2">
                <label className="block mb-2 font-serif text-start text-gray-500 mt-2">
                  Indicador real proceso afectado
                </label>
                <textarea
                  id="message"
                  className="block px-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                ></textarea>
              </div>
            </div>
          </div>
          <div>
            <label className="block mb-2 font-serif text-start text-gray-500 mt-2">
              GAP
            </label>
            <textarea
              id="message"
              className="block px-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
            ></textarea>
          </div>

          <h2 className="mt-4 font-bold text-xl text-slate-400">
            Análisis problema u oportunidad
          </h2>
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row justify-center sm:gap-5">
              <div className="w-full sm:w-1/2">
                <label className="block mb-2 text-start font-serif text-gray-500 mt-2">
                  Problema puntual
                </label>
                <textarea
                  id="message"
                  className="block px-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                ></textarea>
              </div>

              <div className="w-full sm:w-1/2">
                <label className="block mb-2 font-serif text-start text-gray-500 mt-2">
                  Puntualmente describe ¿Por qué pasa lo anterior?
                </label>
                <textarea
                  id="message"
                  className="block px-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                ></textarea>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center sm:gap-5">
              <div className="w-full sm:w-1/2">
                <label className="block mb-2 text-start font-serif text-gray-500 mt-2">
                  Problema puntual
                </label>
                <textarea
                  id="message"
                  className="block px-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                ></textarea>
              </div>

              <div className="w-full sm:w-1/2">
                <label className="block mb-2 font-serif text-start text-gray-500 mt-2">
                  Puntualmente describe ¿Por qué pasa lo anterior?
                </label>
                <textarea
                  id="message"
                  className="block px-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                ></textarea>
              </div>
            </div>
            <div>
              <label className="block mb-2 font-serif text-start text-gray-500 mt-2">
                Puntualmente describe ¿Por qué pasa lo anterior?
              </label>
              <textarea
                id="message"
                className="block px-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end mt-9 gap-5">
          <button className="border border-blue-800 text-blue-900 bg-white w-32 h-10 rounded">
            Limpiar
          </button>
          <button
            onClick={nextStep}
            className="border border-blue-800 text-white rounded bg-blue-900 w-32 h-10 mr-5"
          >
            Siguiente
          </button>

          </div>
        </form>
      </div>
    </>
  );
};
