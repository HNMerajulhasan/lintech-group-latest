import { commercialFormFive } from "@/constants";
import { YellowButton } from "../../button_old/YellowButton";
import { FormProps } from "@/types";

const CommercialFormFive = ({
  handleStepChange,
  handleOptionSelect,
}: FormProps) => {
  return (
    <div className="contact_form_step_wrapper">
      <h1 className="contact_form_step_wrapper_h1">
        {commercialFormFive[0].title}
      </h1>

      <div className="contact_form_step_list_wrapper">
        {commercialFormFive.map((item, index) => (
          <button
            key={`${index}`}
            className="contact_form_step_list_button"
            onClick={() => {
              handleStepChange("formSeven");
              handleOptionSelect(item.label, item.title || "");
            }}>
            <span className="contact_form_step_list_button_text">
              {item?.label}
            </span>
          </button>
        ))}
      </div>
    </div>

    // <div className="flex flex-col gap-10 text-center"  >
  );
};

export default CommercialFormFive;
