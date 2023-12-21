export interface AddOns {
  id: string;
  title: string;
  description: string;
  yearPrice: string;
  monthPrice: string;
}

export const ADD_ONS: AddOns[] = [
  {
    id: "2dbc2fd2358e1ea1b7a6bc08ea647b9a337ac92d",
    title: "Online service",
    description: "Access to multiplayer games",
    monthPrice: "+$1/mo",
    yearPrice: "+10/yr"
  },
  {
    id: "acd1be8c3d4ac2b6ee9cb359caad787d5526f06f",
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthPrice: "+$2/mo",
    yearPrice: "+$20/yr"
  },
  {
    id: "f9ac14b63a75faf57d8db6f919bfabb2502d273c",
    title: "Customizable profile",
    description: "Custom theme on your profile",
    monthPrice: "+$2/mo",
    yearPrice: "+$20/yr"
  }
];
