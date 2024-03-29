"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) => {
//ver si esta activo entonces agregar las clases
const pathname=usePathname();

  return <Link href={href} className={`py-3 text-gray-100 hover:text-amber-600 transition-colors relative block after:block after:absolute after:left-0 after:h-0.5 after:bg-purple after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right after:hover:origin-left ${className} 
  ${pathname===href?"after:scale-x-100 after:origin-right":"after:scale-x-0 after:origin-left"}
  `}>{label}</Link>;
};

export default NavLink;
