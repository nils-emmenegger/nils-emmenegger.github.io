"use client";

import Bars3 from "@/components/icons/bars-3-icon";
import Logo from "@/components/icons/logo";
import XMark from "@/components/icons/x-mark-icon";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const links = [
    ["Home", "/"],
    ["Projects", "/projects"],
    ["Contact", "/contact"],
    ["Resume", "resume.pdf"],
  ];

  return (
    <header>
      {/* so the fixed div below doesn't cover content */}
      <div className="h-20"></div>

      <div className="fixed top-0 w-full h-20 flex justify-between bg-onedark-black shadow-md">
        <div className="w-10 mx-5 py-3 text-onedark-white self-center">
          <Logo />
        </div>

        <nav className="flex">
          <div
            className={`w-11 text-onedark-white mx-4 self-center ${
              menuActive ? "hidden" : ""
            } sm:hidden`}
            onClick={() => setMenuActive(true)}
          >
            <Bars3 />
          </div>

          <div
            className={`max-sm:min-h-screen max-sm:bg-onedark-white/20 ${
              !menuActive ? "hidden" : ""
            } sm:block`}
          >
            <ul className="flex flex-col text-onedark-blue sm:flex-row sm:h-full sm:items-center">
              <li className="flex justify-end items-center h-20 mx-4 sm:hidden">
                <div
                  className="w-11 text-onedark-white"
                  onClick={() => setMenuActive(false)}
                >
                  <XMark />
                </div>
              </li>

              {links.map(([name, href]) => (
                <li
                  key={name}
                  className="pl-6 pr-16 py-6 bg-black/60 sm:bg-transparent sm:px-8"
                >
                  <Link href={href}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
