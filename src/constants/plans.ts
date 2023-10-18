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
    yearPrice: "$90/yr",
    monthPrice: "$9/mo",
    selected: true
  },
  {
    id: 2,
    planName: PlansNames.ADVANCED,
    planIcon: PlansNames.ADVANCED,
    yearPrice: "$120/yr",
    monthPrice: "$12/mo",
    selected: false
  },
  {
    id: 3,
    planName: PlansNames.PRO,
    planIcon: PlansNames.PRO,
    yearPrice: "$150/yr",
    monthPrice: "$15/mo",
    selected: false
  },
];
