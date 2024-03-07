import { DiVim } from "react-icons/di";

const OurProcess = () => {
  const data = [
    {
      id: "01",
      title: "INITIAL CONSULTATION",
    },
    {
      id: "05",
      title: "CONSTRUCTION PLANNING",
    },
    {
      id: "02",
      title: "DESIGN DEVELOPMENT",
    },
    {
      id: "06",
      title: "CONSTRUCTION EXECUTION",
    },
    {
      id: "03",
      title: "DESIGN REFINEMENT",
    },
    {
      id: "07",
      title: "QUALITY CONTROL",
    },
    {
      id: "04",
      title: "MATERIAL SELECTION",
    },
   
   
   
    {
      id: "08",
      title: "FINAL INSPECTION",
    },
  ];
  return (
    <div className="p-16 bg-[#0F0F0F] flex flex-col gap-12">
      <div>
        <h1 className="text-2xl md:text-5xl floral-reg w-1/2">OUR PROCESS</h1>
      </div>
      <div className="grid  grid-cols-2 gap-12">
        {data?.map((item) => (
          <div className="border-b border-b-[#FFFFFF] pb-4 flex gap-6">
            <div className="bg-[#2E2E2E] rounded-full text-xl text-[#DDAE31] h-12 w-12 flex">
             <div className="m-auto">
               {item.id}
              </div>
            </div>
            <div className="my-auto text-2xl">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProcess;
