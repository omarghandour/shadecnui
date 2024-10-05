"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/app/components/DarkButton";

export function NavbarComponent() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <Link
      href={href}
      className="group relative text-sm font-medium transition-colors hover:text-primary"
    >
      {children}
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </Link>
  );

  const NavLinks = () => (
    <>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </>
  );

  return (
    <header className="sticky mb- top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-5">
      <div className="container flex h-16 items-center">
        <div className="flex flex-1 items-center justify-between space-x-4 md:justify-start">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">My Website</span>
          </Link>
          <nav className="hidden md:flex md:space-x-8 ml-10">
            <NavLinks />
          </nav>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden transition-transform duration-200 ease-in-out hover:scale-110"
              onClick={toggleMenu}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <nav className="flex flex-col space-y-4">
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Button
            variant="outline"
            className="transition-all duration-200 ease-in-out hover:bg-primary hover:text-primary-foreground transform hover:scale-105"
          >
            Sign In
          </Button>
          <Button className="transition-all duration-200 ease-in-out hover:bg-secondary hover:text-secondary-foreground transform hover:scale-105">
            Sign Up
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
