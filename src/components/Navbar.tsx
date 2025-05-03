"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { HomeIcon, UserIcon, ZapIcon, CompassIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";


const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--sidebar)]/80 backdrop-blur-md border-b border-[var(--border)] py-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1 bg-[var(--accent)] rounded">
            <ZapIcon className="w-4 h-4 text-[var(--primary)]" />
          </div>
          <span className="text-xl font-bold font-mono text-[var(--sidebar-foreground)]">
            travel<span className="text-[var(--accent)]">pal</span>
          </span>
        </Link>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-5">
          {isSignedIn ? (
            <>
              <Link
                href="/"
                className="flex items-center gap-1.5 text-sm text-[var(--sidebar-foreground)] hover:text-[var(--primary)] transition-colors"
              >
                <HomeIcon size={16} />
                <span>Home</span>
              </Link>

              <Link
                href="/plan"
                className="flex items-center gap-1.5 text-sm …"
              >
                <CompassIcon size={16} />
                <span>Plan</span>
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-1.5 text-sm text-[var(--sidebar-foreground)] hover:text-[var(--primary)] transition-colors"
              >
                <UserIcon size={16} />
                <span>Profile</span>
              </Link>

              <Button
                asChild
                variant="outline"
                className="ml-2 border-[var(--accent)] text-[var(--sidebar-foreground)] hover:text-white hover:bg-[var(--primary)]"
              >
                <Link href="/generate-trip">Get Started</Link>
              </Button>

              <UserButton />
            </>
          ) : (
            <>
              <SignInButton>
                <Button
                  variant="outline"
                  className="border-[var(--accent)] text-[var(--sidebar-foreground)] hover:text-white hover:bg-[var(--primary)]"
                >
                  Sign In
                </Button>
              </SignInButton>

              <SignUpButton>
                <Button className="bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90">
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
