
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("Title", () => {
  it("should render primary title properly", () => {
    render(<Title primaryTitle="Primary" secondaryTitle="Secondary" />);
    const h1Element = screen.getByRole("heading", {level: 1});
    expect(h1Element.textContent).toBe("Primary");
  });

  it("should render secondary title properly", () => {
    render(<Title primaryTitle="Primary" secondaryTitle="Secondary" />);
    const h2Element = screen.getByRole("heading", {level: 2});
    expect(h2Element.textContent).toBe("Secondary");
  });
});