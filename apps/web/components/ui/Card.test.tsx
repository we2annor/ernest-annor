import { render, screen, fireEvent } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  describe("rendering", () => {
    it("renders children correctly", () => {
      render(<Card>Card content</Card>);
      expect(screen.getByText("Card content")).toBeInTheDocument();
    });

    it("renders as a div element", () => {
      render(<Card>Content</Card>);
      const card = screen.getByText("Content");
      expect(card.tagName).toBe("DIV");
    });

    it("applies base styles", () => {
      render(<Card>Content</Card>);
      const card = screen.getByText("Content");
      expect(card).toHaveClass("bg-surface");
      expect(card).toHaveClass("rounded-xl");
      expect(card).toHaveClass("border-border");
    });

    it("accepts and applies additional className", () => {
      render(<Card className='custom-class'>Content</Card>);
      const card = screen.getByText("Content");
      expect(card).toHaveClass("custom-class");
    });
  });

  describe("hover behaviour", () => {
    it("does not apply hover styles by default", () => {
      render(<Card>Content</Card>);
      const card = screen.getByText("Content");
      expect(card).not.toHaveClass("cursor-pointer");
    });

    it("applies hover styles when hover is true", () => {
      render(<Card hover>Content</Card>);
      const card = screen.getByText("Content");
      expect(card).toHaveClass("cursor-pointer");
    });
  });

  describe("interactivity", () => {
    it("does not have role button when onClick is not provided", () => {
      render(<Card>Content</Card>);
      const card = screen.getByText("Content");
      expect(card).not.toHaveAttribute("role", "button");
    });

    it("has role button when onClick is provided", () => {
      render(<Card onClick={() => {}}>Content</Card>);
      const card = screen.getByText("Content");
      expect(card).toHaveAttribute("role", "button");
    });

    it("has tabIndex 0 when onClick is provided", () => {
      render(<Card onClick={() => {}}>Content</Card>);
      const card = screen.getByText("Content");
      expect(card).toHaveAttribute("tabIndex", "0");
    });

    it("does not have tabIndex when onClick is not provided", () => {
      render(<Card>Content</Card>);
      const card = screen.getByText("Content");
      expect(card).not.toHaveAttribute("tabIndex");
    });

    it("calls onClick when clicked", () => {
      const handleClick = vi.fn();
      render(<Card onClick={handleClick}>Content</Card>);
      fireEvent.click(screen.getByText("Content"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("keyboard accessibility", () => {
    it("calls onClick when Enter key is pressed", () => {
      const handleClick = vi.fn();
      render(<Card onClick={handleClick}>Content</Card>);
      fireEvent.keyDown(screen.getByText("Content"), { key: "Enter" });
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("calls onClick when Space key is pressed", () => {
      const handleClick = vi.fn();
      render(<Card onClick={handleClick}>Content</Card>);
      fireEvent.keyDown(screen.getByText("Content"), { key: " " });
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("does not call onClick when other keys are pressed", () => {
      const handleClick = vi.fn();
      render(<Card onClick={handleClick}>Content</Card>);
      fireEvent.keyDown(screen.getByText("Content"), { key: "Tab" });
      expect(handleClick).not.toHaveBeenCalled();
    });
  });
});
