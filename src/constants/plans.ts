export enum PlansNames {
  ADVANCED = "Advanced",
  ARCADE = "Arcade",
  PRO = "Pro"
}

export enum PlansModes {
  YEARLY = "yearly",
  MONTHLY = "monthly",
}

export interface Plan {
  id: string;
  planName: PlansNames;
  planIcon: PlansNames;
  yearPrice: string;
  monthPrice: string;
  selected: boolean;
}

export const DEFAULT_SELECTED_PLAN_TYPE_ID = "c16c6aeeed290415006babae333a79ab4d26aba6";

export const PLANS: Plan[] = [
  {
    id: "c16c6aeeed290415006babae333a79ab4d26aba6",
    planName: PlansNames.ARCADE,
    planIcon: PlansNames.ARCADE,
    yearPrice: "$90/yr",
    monthPrice: "$9/mo",
    selected: true
  },
  {
    id: "e62854369199d65b6a66cd90fe8203ac4d5be26c",
    planName: PlansNames.ADVANCED,
    planIcon: PlansNames.ADVANCED,
    yearPrice: "$120/yr",
    monthPrice: "$12/mo",
    selected: false
  },
  {
    id: "3b40f38967952a3fcd286e1c6b5790d84ff40893",
    planName: PlansNames.PRO,
    planIcon: PlansNames.PRO,
    yearPrice: "$150/yr",
    monthPrice: "$15/mo",
    selected: false
  }
];
