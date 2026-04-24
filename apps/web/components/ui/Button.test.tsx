import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  describe("rendering", () => {
    it("renders children correctly", () => {
      render(<Button>Click me</Button>);
      expect(
        screen.getByRole("button", { name: "Click me" })
      ).toBeInTheDocument();
    });

    it("renders as a button element by default", () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("renders as an anchor element when as='a'", () => {
      render(
        <Button as='a' href='/about'>
          About
        </Button>
      );
      expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    });

    it("renders correct href when as='a'", () => {
      render(
        <Button as='a' href='/about'>
          About
        </Button>
      );
      expect(screen.getByRole("link")).toHaveAttribute("href", "/about");
    });
  });

  describe("variants", () => {
    it("applies primary variant classes by default", () => {
      render(<Button>Primary</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-accent");
    });

    it("applies outline variant classes", () => {
      render(<Button variant='outline'>Outline</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("border-accent");
    });

    it("applies secondary variant classes", () => {
      render(<Button variant='secondary'>Secondary</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-pink");
    });
  });

  describe("sizes", () => {
    it("applies medium size by default", () => {
      render(<Button>Medium</Button>);
      expect(screen.getByRole("button")).toHaveClass("min-h-[44px]");
    });

    it("applies small size classes", () => {
      render(<Button size='sm'>Small</Button>);
      expect(screen.getByRole("button")).toHaveClass("min-h-[36px]");
    });

    it("applies large size classes", () => {
      render(<Button size='lg'>Large</Button>);
      expect(screen.getByRole("button")).toHaveClass("min-h-[52px]");
    });
  });

  describe("loading state", () => {
    it("shows loading text when isLoading is true", () => {
      render(<Button isLoading>Submit</Button>);
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    it("disables the button when isLoading is true", () => {
      render(<Button isLoading>Submit</Button>);
      expect(screen.getByRole("button")).toBeDisabled();
    });

    it("hides children when isLoading is true", () => {
      render(<Button isLoading>Submit</Button>);
      expect(screen.queryByText("Submit")).not.toBeInTheDocument();
    });
  });

  describe("interactions", () => {
    it("calls onClick when clicked", () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click me</Button>);
      fireEvent.click(screen.getByRole("button"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("does not call onClick when disabled", () => {
      const handleClick = vi.fn();
      render(
        <Button onClick={handleClick} disabled>
          Click me
        </Button>
      );
      fireEvent.click(screen.getByRole("button"));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe("accessibility", () => {
    it("has correct role as button", () => {
      render(<Button>Action</Button>);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("accepts and applies aria-label", () => {
      render(<Button aria-label='Close dialog'>X</Button>);
      expect(
        screen.getByRole("button", { name: "Close dialog" })
      ).toBeInTheDocument();
    });

    it("is focusable", () => {
      render(<Button>Focus me</Button>);
      const button = screen.getByRole("button");
      button.focus();
      expect(button).toHaveFocus();
    });
  });
});
