
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { describe, it, vi, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Toggle, { ToggleProps } from "./Toggle";

const MockToggle = ({onClick, toggled}: ToggleProps) => {
  return (
    <Provider store={store}>
      <Toggle onClick={onClick} toggled={toggled}/>
    </Provider>
  );
};

const mockOnClickFn = vi.fn();

describe("Toggle", () => {
  it("should render Monthly as first term", () => {
    render(<MockToggle onClick={mockOnClickFn} toggled />);
  
    const paragraphElement = screen.getAllByRole("paragraph");
    expect(paragraphElement[0].textContent).toBe("Monthly");
  });

  it("should render Yearly as second term", () => {
    render(<MockToggle onClick={mockOnClickFn} toggled />);
  
    const paragraphElement = screen.getAllByRole("paragraph");
    expect(paragraphElement[1].textContent).toBe("Yearly");
  });
});
