import { checkPointSix } from "@/constants";
import { FormProps } from "@/types";
import { YellowButton } from "../../button_old/YellowButton";

const CheckPointFormSix = ({
  handleStepChange,
  handleOptionSelect,
}: FormProps) => {
  return (
    <div className="contact_form_step_wrapper">
      <h1 className="contact_form_step_wrapper_h1">{checkPointSix[0].title}</h1>

      {/* OPTIONS */}
      <div className="contact_form_step_list_wrapper">
        {checkPointSix.map((item, index) => (
          <button
            // type="button"
            key={`${index}`}
            className="contact_form_step_list_button"
            onClick={() => {
              handleStepChange("checkPointFormSeven");
              handleOptionSelect(item.label, item.title || "");
            }}>
            <span className="contact_form_step_list_button_text">
              {item?.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CheckPointFormSix;
