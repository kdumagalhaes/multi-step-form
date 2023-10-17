export enum PlansNames {
  ADVANCED = 'Advanced',
  ARCADE = 'Arcade',
  PRO = 'Pro',
}

export const PLANS = [
  {
    id: 1,
    planName: PlansNames.ARCADE,
    planIcon: PlansNames.ARCADE,
    yearPrice: 90,
    monthPrice: 9,
  },
  {
    id: 2,
    planName: PlansNames.ADVANCED,
    planIcon: PlansNames.ADVANCED,
    yearPrice: 12,
    monthPrice: 120,
  },
  {
    id: 3,
    planName: PlansNames.PRO,
    planIcon: PlansNames.PRO,
    yearPrice: 15,
    monthPrice: 150,
  },
];
