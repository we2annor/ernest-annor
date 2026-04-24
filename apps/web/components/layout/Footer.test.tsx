import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("Footer", () => {
  describe("rendering", () => {
    it("renders the EA logo", () => {
      render(<Footer />);
      expect(screen.getByText("EA")).toBeInTheDocument();
    });

    it("renders the tagline", () => {
      render(<Footer />);
      expect(screen.getByText(/Senior Software Engineer/i)).toBeInTheDocument();
    });

    it("renders the copyright with current year", () => {
      render(<Footer />);
      const year = new Date().getFullYear();
      expect(
        screen.getByText(new RegExp(`© ${year} Ernest Annor`))
      ).toBeInTheDocument();
    });

    it("renders the built with text", () => {
      render(<Footer />);
      expect(screen.getByText(/Built with/i)).toBeInTheDocument();
    });
  });

  describe("navigation links", () => {
    it("renders all footer navigation links", () => {
      render(<Footer />);
      expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: "Projects" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: "Experience" })
      ).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
    });

    it("navigation links have correct hrefs", () => {
      render(<Footer />);
      expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
        "href",
        "/about"
      );
      expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute(
        "href",
        "/projects"
      );
    });
  });

  describe("social links", () => {
    it("renders GitHub link with correct aria-label", () => {
      render(<Footer />);
      expect(screen.getByRole("link", { name: "GitHub" })).toBeInTheDocument();
    });

    it("renders LinkedIn link with correct aria-label", () => {
      render(<Footer />);
      expect(
        screen.getByRole("link", { name: "LinkedIn" })
      ).toBeInTheDocument();
    });

    it("renders Email link with correct aria-label", () => {
      render(<Footer />);
      expect(screen.getByRole("link", { name: "Email" })).toBeInTheDocument();
    });

    it("external links open in new tab", () => {
      render(<Footer />);
      expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
        "target",
        "_blank"
      );
      expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
        "target",
        "_blank"
      );
    });

    it("external links have noopener noreferrer", () => {
      render(<Footer />);
      expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
        "rel",
        "noopener noreferrer"
      );
    });
  });

  describe("accessibility", () => {
    it("has correct role contentinfo", () => {
      render(<Footer />);
      expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    });

    it("has correct aria-label on footer", () => {
      render(<Footer />);
      expect(
        screen.getByRole("contentinfo", { name: "Site footer" })
      ).toBeInTheDocument();
    });
  });
});
