// src/components/Sidebar.tsx
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { ThemeToggle } from './theme-toggle';
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export function Sidebar() {
  return (
    <div>
      
    <Sheet>
    <div className="flex">
      {/* Bagian kiri: Logo */}
      <div className="fixed top-6 left-6 z-50 mr-16 py-2">
        <h1 className="text-md font-bold">👩🏻‍💻 Thesya Marcella</h1>
      </div>

      

        <div className="fixed top-6 right-6 z-50 mr-16 py-2">
          <ThemeToggle />
        </div>

    </div>
      <SheetTrigger asChild>
        <Button variant="outline" className="fixed top-6 right-6 z-50">
          <HamburgerMenuIcon/>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-64">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Explore the pages.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col space-y-4 py-4">
          {/* Navigation Links */}
          <div className="grid gap-4">
            <Link href="/" className="text-lg font-semibold hover:text-blue-500">
              Home
            </Link>
            <Link href="#about" className="text-lg font-semibold hover:text-blue-500">
              About
            </Link>
            <Link href="#projects" className="text-lg font-semibold hover:text-blue-500">
              Projects
            </Link>
            <Link href="#contact" className="text-lg font-semibold hover:text-blue-500">
              Contact
            </Link>
          </div>
        </div>
        <SheetFooter>
        
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </div>
  );
}
