import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import PlanCard from "./PlanCard";
import { PlansModes, PlansNames } from "../../constants/plans";

describe("PlanCard", () => {
  it("should render the plan name", () => {
    render(<PlanCard 
              planName={PlansNames.ADVANCED} 
              monthPrice={12} 
              id="1234" 
              planIcon={PlansNames.ADVANCED} 
              selected={false} 
              yearPrice={120} 
              planMode={PlansModes.MONTHLY} 
              handleSelectPlan={vi.fn()}
           />);
    const planCardNameElement = screen.getByTestId("plan-card-name");
    expect(planCardNameElement.textContent).toBe("Advanced");       
  });

  it("should render the monthly price", () => {
    render(<PlanCard 
      planName={PlansNames.ADVANCED} 
      monthPrice={12} 
      id="1234" 
      planIcon={PlansNames.ADVANCED} 
      selected={false} 
      yearPrice={120} 
      planMode={PlansModes.MONTHLY} 
      handleSelectPlan={vi.fn()}
   />);
   const planCardMonthlyPriceElement = screen.getByTestId("plan-card-monthly-price");
   expect(planCardMonthlyPriceElement.textContent).toBe("$12/mo");
  });

  it("should render the yearly price", () => {
    render(<PlanCard 
      planName={PlansNames.ADVANCED} 
      monthPrice={12} 
      id="1234" 
      planIcon={PlansNames.ADVANCED} 
      selected={false} 
      yearPrice={120} 
      planMode={PlansModes.YEARLY} 
      handleSelectPlan={vi.fn()}
   />);
   const planCardYearlyPriceElement = screen.getByTestId("plan-card-yearly-price");
   expect(planCardYearlyPriceElement.textContent).toBe("$120/yr");
  });

    it("should render the promotion message if plan mode is 'yearly'", () => {
      render(<PlanCard 
        planName={PlansNames.ADVANCED} 
        monthPrice={12} 
        id="1234" 
        planIcon={PlansNames.ADVANCED} 
        selected={false} 
        yearPrice={120} 
        planMode={PlansModes.YEARLY} 
        handleSelectPlan={vi.fn()}
     />);
     const promotionMessageElement = screen.getByTestId("plan-card-promotion");
     expect(promotionMessageElement.textContent).toBe("2 months free");
    });
  });