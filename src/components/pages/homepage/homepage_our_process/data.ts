export const processes = [
  {
    id: "1",
    title: "Planning Phase",
    children: [
      { id: "1.1", label: "Client Consultation" },
      { id: "1.2", label: "Strategy Formulation" },
      { id: "1.3", label: "Scope & Timeline Establishment" },
      { id: "1.4", label: "Design & User Experience Planning" },
      { id: "1.5", label: "Content and Technology Mapping" },
    ],
    leftBorder: false,
  },

  {
    id: "2",
    title: "Development Phase",
    children: [
      { id: "2.1", label: "Platform Configuration" },
      { id: "2.2", label: "Feature Integration" },
      { id: "2.3", label: "Continuous Feedback Loop" },
      { id: "2.4", label: "Testing & Refinement" },
      { id: "2.5", label: "Finalization & Quality Control" },
    ],
    leftBorder: true,
  },

  {
    id: "3",
    title: "Launch Phase",
    children: [
      { id: "3.1", label: "Implementation & Go-Live" },
      { id: "3.2", label: "Optimization & Handover" },
    ],
    leftBorder: true,
  },
  {
    id: "4",
    title: "Post-Launch Phase",
    children: [
      { id: "4.1", label: "Performance Review" },
      { id: "4.2", label: "Iterative Enhancements" },
      { id: "4.3", label: "Maintenance & Upgrades" },
    ],
    leftBorder: true,
  },
];
