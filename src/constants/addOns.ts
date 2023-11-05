export interface AddOns {
  id: number;
  title: string;
  description: string;
  yearPrice: number;
  monthPrice: number;
}

export const ADD_ONS: AddOns[] = [
  {
    id: 1,
    title: 'Online service',
    description: 'Access to multiplayer games',
    monthPrice: 1,
    yearPrice: 10,
  },
  {
    id: 2,
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    monthPrice: 2,
    yearPrice: 20,
  },
  {
    id: 3,
    title: 'Customizable profile',
    description: 'Custom theme on your profile',
    monthPrice: 2,
    yearPrice: 20,
  },
];
