
import { useEffect, useState } from "react";
import { CharacterizationForm } from '../Forms/CharacterizationForm';
import { AnalysisForm } from "../Forms/AnalysisForm";
import { ProcessForm } from "../Forms/ProcessForm";

export const FormGroup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <>
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mt-4 sm:text-left ml-5">
        Tarjeta Oportunidad
      </h2>

      {/* Pasos Step */}
      <div className={`flex ${isSmallScreen ? "flex-col" : "flex-row"} card border border-gray-200 mt-4`}>
        <div className={`bg-slate-200 ${isSmallScreen ? "w-full h-20" : "w-32 sm:w-56"} shadow-xl flex ${isSmallScreen ? "flex-row" : "flex-col"}`}>
          <button className={`sm:mt-20 mt-1 ml-10 text-white border-2 border-blue-950 w-5 h-5 rounded-full ${
                currentStep === 1 ? "text-blue-950 font-bold " : "text-gray-400 bg-blue-950"
              }`}>
            <p
              className={`text-sm ml-6 ${
                currentStep === 1 ? "text-blue-950 font-bold " : "text-gray-400 "
              }`}
            >
              Caracterización
            </p>
          </button>
          
          <div
            className={`mt-20 ml-10 text-white border-2 border-blue-950 w-5 h-5 rounded-full ${
              currentStep === 1 ? "text-blue-950 font-bold " : "text-gray-400 bg-blue-950"
            }`}
            style={{
              width: "2px",
              background: "gray",
              height: "10%",
              marginLeft: "26%",
              marginTop: "3%",
              marginBottom: "3%",
            }}
          ></div>

          <button 
          className={` ml-10 text-white border-2 border-blue-950 w-5 h-5 rounded-full  ${
                (currentStep === 2 ? "text-blue-950 font-bold bg-gray-200" : 
                  currentStep === 3 ? "text-gray-400 bg-blue-950" : "")
              }`}
          >
            <p
              className={`text-sm ml-6 ${
                currentStep === 2 ? "text-blue-950 font-bold" : "text-gray-400 "
              }`}
            >
              Análisis
            </p>
          </button>
          
          <div
           className={` ml-10 text-white border-2 border-blue-950 w-5 h-5 rounded-full  ${
            (currentStep === 2 ? "text-blue-950 font-bold bg-gray-200" : 
              currentStep === 3 ? "text-gray-400 bg-blue-950" : "")
          }`}
            style={{
              width: "2px",
              background: "gray",
              height: "10%" ,
              marginLeft: "26%",
              marginTop: "3%",
              marginBottom: "3%",
            }}

            
          ></div>

          <button className="ml-10 text-white border-2 border-blue-950 w-5 h-5 rounded-full">
            <p
              className={`text-sm ml-6 ${
                currentStep === 3 ? "text-blue-950 font-bold" : "text-gray-400 "
              }`}
            >
              Proceso
            </p>
          </button>
          

          {currentStep === 2 && (
            <button
            onClick={handlePrevStep}
            className={`border border-blue-950 text-blue-950 bg-slate-300 sm:w-32 w-20 sm:h-10 h-10 rounded ${
              isSmallScreen ? "mt-8 -ml-60 h-9" : "mt-[20rem] ml-[2rem]"
            }`}
          >
            Regresar
          </button>
          )}

          {currentStep === 3 && (
            <button
            onClick={handlePrevStep}
            className={`border border-blue-950 text-blue-950 bg-slate-300 sm:w-32 w-20 sm:h-10 h-10 rounded ${
              isSmallScreen ? "mt-10 -ml-64 h-7" : "mt-[20rem] ml-[2rem]"
            }`}
          >
            Regresar
          </button>
          )}
        </div>
        <div className="card border border-gray-200 mt-4 ml-9 mb-4 rounded w-full mx-5">
          {currentStep === 1 && <CharacterizationForm nextStep={handleNextStep}/>}
          {currentStep === 2 && <AnalysisForm  nextStep={handleNextStep}/>}
          {currentStep === 3 && <ProcessForm  />}
        </div>
      </div>
    </>
  );
};
