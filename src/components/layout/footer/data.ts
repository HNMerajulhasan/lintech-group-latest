import { pages_data } from "@/data/pages_data";

export const quickLinks = [
  {
    hideInSmallScreen: false,
    title: "Quick Link",
    children: [
      {
        id: "11",
        title: "Home",
        link: "/",
      },
      {
        title: "Testimonials",
        link: "/testimonial",
      },
      // {
      //   title: "Portfolio",
      //   link: "/portfolio",
      // },
      {
        title: "Gallery",
        link: "/gallery",
      },
      {
        title: "Contact Us",
        link: "/contact",
      },
      {
        title: "Privacy Policy",
        link: "/cookie-policy",
      },
    ],
  },

  {
    hideInSmallScreen: true,
    title: "Development Renovation",
    children: [
      ...pages_data
        .filter((item) => item.type === "Development")
        .map((item, index) => {
          return {
            id: `0${index + 1}`,
            title: item?.label,
            link: item?.link,
          };
        }),
    ],
  },

  {
    hideInSmallScreen: true,
    title: "Marketing Renovation",
    children: [
      ...pages_data
        .filter((item) => item.type === "Marketing")
        .map((item, index) => {
          return {
            id: `0${index + 1}`,
            title: item?.label,
            link: item?.link,
          };
        }),
    ],
  },
];
