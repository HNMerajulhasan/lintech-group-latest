import { pages_data } from "@/data/pages_data";

export const tabs = [
  {
    id: "1",
    title: "Development",
    items: [
      ...pages_data
        .filter((item) => item.type === "Development")
        .map((item, index) => {
          return {
            id: `0${index + 1}`,
            label: item?.label,
            link: item?.link,
          };
        }),
    ],
  },

  {
    id: "2",
    title: "Marketing",
    items: [
      ...pages_data
        .filter((item) => item.type === "Marketing")
        .map((item, index) => {
          return {
            id: `0${index + 1}`,
            label: item?.label,
            link: item?.link,
          };
        }),
    ],
  },
];
