import { render, screen, fireEvent } from "@testing-library/react";
import { Nav } from "./Nav";

//Mock Nex.js navigation
vi.mock("next/navigation", () => ({
  usePathname: vi.fn(() => "/"),
}));

//Mock Next.js Link
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

describe("Nav", () => {
  describe("rendering", () => {
    it("renders the full name logo by default", () => {
      render(<Nav />);
      expect(screen.getByText("Ernest Annor")).toBeInTheDocument();
    });

    it("renders EA monogram and full name based on scroll", () => {
      render(<Nav />);
      // By default at top of page — full name visible
      expect(screen.getByText("Ernest Annor")).toBeInTheDocument();
      // EA should not be visible by default
      expect(screen.queryByText("EA")).not.toBeInTheDocument();
    });

    it("renders all navigationlinks", () => {
      render(<Nav />);
      expect(screen.getAllByText("About")[0]).toBeInTheDocument();
      expect(screen.getAllByText("Experience")[0]).toBeInTheDocument();
      expect(screen.getAllByText("Projects")[0]).toBeInTheDocument();
      expect(screen.getAllByText("Blog")[0]).toBeInTheDocument();
      expect(screen.getAllByText("Uses")[0]).toBeInTheDocument();
      expect(screen.getAllByText("CV")[0]).toBeInTheDocument();
    });

    it("renders the Contact Me button", () => {
      render(<Nav />);
      expect(screen.getAllByText("Contact Me")[0]).toBeInTheDocument();
    });

    it("renders the hamburger menu button on mobile", () => {
      render(<Nav />);
      expect(
        screen.getByRole("button", { name: "Open menu" })
      ).toBeInTheDocument();
    });
  });

  describe("active link", () => {
    it("marks the current page link with aria-current", async () => {
      const { usePathname } = await import("next/navigation");
      vi.mocked(usePathname).mockReturnValue("/about");

      render(<Nav />);

      const aboutLinks = screen.getAllByText("About");
      const activeLink = aboutLinks.find(
        (link) => link.closest("a")?.getAttribute("aria-current") === "page"
      );
      expect(activeLink).toBeDefined();
    });

    it("does not mark non-current links with aria-current", async () => {
      const { usePathname } = await import("next/navigation");
      vi.mocked(usePathname).mockReturnValue("/about");

      render(<Nav />);

      const projectsLinks = screen.getAllByText("Projects");
      const inactiveLink = projectsLinks.find(
        (link) => link.closest("a")?.getAttribute("aria-current") === "page"
      );
      expect(inactiveLink).toBeUndefined();
    });
  });

  describe("mobile menu", () => {
    it("mobile menu is hidden by default", () => {
      render(<Nav />);
      const mobileMenu = document.getElementById("mobile-menu");
      expect(mobileMenu).toHaveClass("max-h-0");
    });

    it("opens mobile menu when hamburger menu is clicked", () => {
      render(<Nav />);
      const menuButton = screen.getByRole("button", { name: "Open menu" });
      fireEvent.click(menuButton);
      expect(
        screen.getByRole("button", { name: "Close menu" })
      ).toBeInTheDocument();
    });

    it("toggles aria-expanded on hamburger button", () => {
      render(<Nav />);
      const menuButton = screen.getByRole("button", { name: "Open menu" });
      expect(menuButton).toHaveAttribute("aria-expanded", "false");
      fireEvent.click(menuButton);
      expect(
        screen.getByRole("button", { name: "Close menu" })
      ).toHaveAttribute("aria-expanded", "true");
    });
  });

  describe("accessibility", () => {
    it("has correct aria-label on nav element", () => {
      render(<Nav />);
      expect(
        screen.getByRole("navigation", { name: "Main navigation" })
      ).toBeInTheDocument();
    });

    it("logo link has descriptive aria-label", () => {
      render(<Nav />);
      expect(
        screen.getByRole("link", { name: "Ernest Annor - Home" })
      ).toBeInTheDocument();
    });
  });
});
