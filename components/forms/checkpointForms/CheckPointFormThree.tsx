import { checkPointThree } from "@/constants";
import { FormProps } from "@/types";
import { YellowButton } from "../../button/YellowButton";


const CheckPointFormThree = ({
  handleStepChange,
  handleOptionSelect,
}: FormProps) => {
  return (
    <div className="flex flex-col gap-10 text-center" data-aos="fade-left">
      <h1 className="bold text-4xl xl:text-7xl">
        {checkPointThree[0].title}
      </h1>
      {/* OPTIONS */}
      <div className="flex sm:flex-wrap flex-col sm:flex-row   sm:gap-10 justify-center items-center">
        {checkPointThree.map((item, index) => (
          <div key={index} className="mb-4 relative">
            <div
              // type="button"
              className="contact-bg thin flex  items-center gap-2 text-lg xl:text-3xl   px-12 py-3 xl:py-6 text-white rounded-full relative"
              onClick={() => {
                handleStepChange("checkPointFormFour");
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

export default CheckPointFormThree;
