import { render, screen } from "@testing-library/react";
import Link from "..";

describe("testing Link component", () => {
  it("should render a Link component", () => {
    render(<Link>testing the link </Link>);
    const renderedLink = screen.getByText("testing the link");
    expect(renderedLink).toBeInTheDocument();
  });

  it("should render a Link component with href attribute", () => {
    render(<Link href="#">testing the link </Link>);
    const renderedLink = screen.getByText("testing the link");
    expect(renderedLink).toHaveAttribute("href");
  });
});
