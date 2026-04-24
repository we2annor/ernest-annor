import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Badge", () => {
  describe("rendering", () => {
    it("renders children correctly", () => {
      render(<Badge>React</Badge>);
      expect(screen.getByText("React")).toBeInTheDocument();
    });

    it("renders as a span element", () => {
      render(<Badge>React</Badge>);
      const badge = screen.getByText("React");
      expect(badge.tagName).toBe("SPAN");
    });

    it("applies accent variant by default", () => {
      render(<Badge>React</Badge>);
      const badge = screen.getByText("React");
      expect(badge).toHaveClass("bg-accent/10");
      expect(badge).toHaveClass("text-accent");
    });
  });

  describe("variants", () => {
    it("applies pink variant classes", () => {
      render(<Badge variant='pink'>GraphQL</Badge>);
      const badge = screen.getByText("GraphQL");
      expect(badge).toHaveClass("bg-pink/10");
      expect(badge).toHaveClass("text-pink");
    });

    it("applies blue variant classes", () => {
      render(<Badge variant='blue'>Node.js</Badge>);
      const badge = screen.getByText("Node.js");
      expect(badge).toHaveClass("bg-blue/10");
      expect(badge).toHaveClass("text-blue");
    });

    it("applies muted variant classes", () => {
      render(<Badge variant='muted'>Docker</Badge>);
      const badge = screen.getByText("Docker");
      expect(badge).toHaveClass("bg-surface");
      expect(badge).toHaveClass("text-text-muted");
    });
  });

  describe("customisation", () => {
    it("accepts and applies additional className", () => {
      render(<Badge className='custom-class'>React</Badge>);
      const badge = screen.getByText("React");
      expect(badge).toHaveClass("custom-class");
    });

    it("renders multiple badges correctly", () => {
      render(
        <div>
          <Badge>React</Badge>
          <Badge>TypeScript</Badge>
          <Badge>Node.js</Badge>
        </div>
      );
      expect(screen.getByText("React")).toBeInTheDocument();
      expect(screen.getByText("TypeScript")).toBeInTheDocument();
      expect(screen.getByText("Node.js")).toBeInTheDocument();
    });
  });
});
