import { render, screen } from "@testing-library/react";
import Button from "..";

describe("testing button component", () => {
  it("should render a button component", () => {
    render(<Button>hi</Button>);
    const renderedButton = screen.getByRole("button", { text: "hi" });
    expect(renderedButton).toBeInTheDocument();
  });

  it("should have proper classes for variants", () => {
    render(<Button variant="outline"> hi </Button>);
    const renderedButton = screen.getByRole("button", { text: "hi" });
    expect(renderedButton).toHaveClass("btn-outline");
  });
});
