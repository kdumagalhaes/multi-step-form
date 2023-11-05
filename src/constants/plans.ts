export enum PlansNames {
  ADVANCED = 'Advanced',
  ARCADE = 'Arcade',
  PRO = 'Pro',
}

export enum PlansModes {
  YEARLY = 'yearly',
  MONTHLY = 'monthly',
}

export interface Plan {
  id: number;
  planName: PlansNames;
  planIcon: PlansNames;
  yearPrice: number;
  monthPrice: number;
  selected: boolean;
}

export const PLANS: Plan[] = [
  {
    id: 1,
    planName: PlansNames.ARCADE,
    planIcon: PlansNames.ARCADE,
    yearPrice: 90,
    monthPrice: 9,
    selected: false,
  },
  {
    id: 2,
    planName: PlansNames.ADVANCED,
    planIcon: PlansNames.ADVANCED,
    yearPrice: 120,
    monthPrice: 12,
    selected: false,
  },
  {
    id: 3,
    planName: PlansNames.PRO,
    planIcon: PlansNames.PRO,
    yearPrice: 150,
    monthPrice: 15,
    selected: false,
  },
];
