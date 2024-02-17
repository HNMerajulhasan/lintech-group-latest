import { stepOne } from "@/constants";
import { YellowButton } from "../button/YellowButton";
import { FormProps } from "@/types";

const FormTwo = ({ handleStepChange, handleOptionSelect }: FormProps) => {
  const getNextForm = (index: number) => {
    switch (index) {
      case 0:
        return "formThree";
      case 1:
        return "formFour";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col gap-10 text-center" data-aos="fade-left">
      <h1 className="bold text-2xl sm:text-4xl xl:text-7xl">{stepOne[0].title}</h1>
      <div className="flex sm:flex-wrap flex-col sm:flex-row   sm:gap-10 justify-center items-center">
        {stepOne.map((item, index) => (
          <div key={index} className="btn mb-4 relative">
            <div
              className="contact-bg hover:bg-gray-800 text-center thin flex items-center gap-2 text-lg xl:text-3xl   px-12 py-3 xl:py-6 text-white rounded-full relative"
              onClick={() => {
                const nextForm = getNextForm(index);
                handleStepChange(nextForm);
                handleOptionSelect(item.label, item.title || "");  

              }}
            >
              <span>
                <YellowButton />
              </span>
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormTwo;
