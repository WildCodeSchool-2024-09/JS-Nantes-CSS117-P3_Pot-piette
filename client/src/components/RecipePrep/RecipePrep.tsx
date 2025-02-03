import { type Dispatch, type SetStateAction, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import "./RecipePrep.css";

function RecipePrep({
  setSteps,
  steps,
}: {
  setSteps: Dispatch<
    SetStateAction<{ id: number; content: string; nb_step: number }[]>
  >;
  steps: { id: number; content: string; nb_step: number }[];
}) {
  const dialogStep = useRef<HTMLDialogElement>(null);

  function handleStep() {
    dialogStep.current?.showModal();
  }

  function handleCloseStep() {
    dialogStep.current?.close();
  }
  const [stepContent, setStepContent] = useState("");

  const handleDialogClose = () => {
    setStepContent("");
    handleCloseStep();
    setSteps((e) => {
      const copy = structuredClone(e);
      const previousStep = steps[steps.length - 1] ?? {};
      const nextStep = {
        id: previousStep.id ? previousStep.id + 1 : 1,
        nb_step: previousStep.nb_step ? previousStep.nb_step + 1 : 1,
        content: stepContent,
      };
      copy.push(nextStep);
      return copy;
    });
  };

  return (
    <>
      <h2>Préparation de la recette</h2>
      <button type="button" className="add-step" onClick={handleStep}>
        <FaPlus className="more-ingredient" />
        <div className="modal" />
      </button>
      <dialog ref={dialogStep} id="dial-box-step">
        <button id="close-modal-button" type="button" onClick={handleCloseStep}>
          X
        </button>
        <section id="dialog-content">
          <section id="data">
            <h2>Etape</h2>
            <section className="dialog-step">
              <textarea
                id="etape"
                name="content"
                placeholder="Renseignez les étapes de votre recette"
                value={stepContent}
                onChange={(e) => setStepContent(e.target.value)}
              />
            </section>
          </section>
        </section>
        <button onClick={handleDialogClose} type="button">
          Valider
        </button>
      </dialog>
      {steps.map((el) => {
        return (
          <p key={el.id}>
            {el.nb_step} : {el.content}
          </p>
        );
      })}
    </>
  );
}
export default RecipePrep;
