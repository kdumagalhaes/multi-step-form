import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Step from "./Step";

describe("Step", () => {
  it("should render step indicator properly", () => {
    render(<Step stepNumber="1" stepInfo="Summary" isActive />);
    const indicationElement = screen.getByTestId("step-indication");
    expect(indicationElement.textContent).toBe("step 1");
  });

  it("should render step info properly", () => {
    render(<Step stepNumber="1" stepInfo="Summary" isActive />);
    const infoElement = screen.getByTestId("step-info");
    expect(infoElement.textContent).toBe("Summary");
  });
});