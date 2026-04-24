"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const routeGradients: Record<string, string> = {
  "/": "home",
  "/about": "about",
  "/experience": "experience",
  "/projects": "projects",
  "/blog": "blog",
  "/contact": "contact",
  "/cv": "cv",
  "/uses": "uses",
};

export function GradientBackground() {
  const pathname = usePathname();

  useEffect(() => {
    const gradient = routeGradients[pathname] ?? "home";
    document.body.setAttribute("data-gradient", gradient);
  }, [pathname]);

  return null;
}
