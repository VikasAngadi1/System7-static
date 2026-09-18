"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (path: string) =>
    `relative inline-block transition ${
      pathname === path
        ? "text-red-500 font-semibold"
        : "text-gray-700 hover:text-red-500"
    }`;

  return (
    <header
  className="w-full sticky top-0 z-50 bg-white shadow-md"
>
      {/* <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"> */}
      <div className="w-full px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/nav-logo.png"
              alt="System 7 Logo"
              width={270}
              height={50}
              className="object-contain cursor-pointer"
              priority
            />
          </Link>
        </div>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {[
            { label: "About", href: "/about" },
            { label: "Solutions", href: "/solutions-main" },
            { label: "Services", href: "/services" },
            { label: "Case Study", href: "/case-study" },
            { label: "Contact", href: "/contact" },
          ].map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link key={item.href} href={item.href} className="group relative">
                <span className={linkClass(item.href)}>
                  {item.label}

                  {/* UNDERLINE EFFECT */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </span>
              </Link>
            );
          })}
        </nav>
        <button
  className="md:hidden text-2xl"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</button>
      </div>
      {menuOpen && (
  <div className="md:hidden px-6 pb-4 space-y-4 bg-white shadow-md">
    {[
      { label: "About", href: "/about" },
      { label: "Solutions", href: "/solutions-main" },
      { label: "Services", href: "/services" },
      { label: "Case Study", href: "/case-study" },
      { label: "Contact", href: "/contact" },
    ].map((item) => (
      <Link
        key={item.href}
        href={item.href}
        onClick={() => setMenuOpen(false)}
        className={`block text-sm transition ${
          pathname === item.href
            ? "text-red-500 font-semibold"
            : "text-gray-700 hover:text-red-500"
        }`}
      >
        {item.label}
      </Link>
    ))}
  </div>
)}
    </header>
  );
};

export default Navbar;