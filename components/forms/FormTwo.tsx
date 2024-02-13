import { YellowButton } from "../button/YellowButton";
// import { helpSelectItems } from "@/constants";

// Define the type for each item in helpSelectItems
export interface HelpSelectItem {
  id: number;
  label: string;
}

interface FormOneProps {
  stepOne: HelpSelectItem[];
  handleStepChange: (step: string) => void;
  handleOptionSelect: (option: string) => void;
}



const FormTwo = ({
  stepOne,
  handleStepChange,
  handleOptionSelect,
}: FormOneProps) => {

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
      <h1 className="bold text-5xl xl:text-7xl"> WHAT TYPE OF PROJECT? </h1>
      {/* OPTIONS */}
      <div className="flex sm:flex-wrap flex-col sm:flex-row   sm:gap-10 justify-center items-center">
        {stepOne.map((item, index) => (
          <div key={index} className="mb-4 relative">
            <div
              // type="button"
              className="contact-bg thin flex items-center gap-2 text-lg xl:text-3xl   px-12 py-3 xl:py-6 text-white rounded-full relative"
              onClick={() => {
                // handleStepChange("formThree");
                const nextForm = getNextForm(index);
                handleStepChange(nextForm);
                handleOptionSelect(item.label);
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
