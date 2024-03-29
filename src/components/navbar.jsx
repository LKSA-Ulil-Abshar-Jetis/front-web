"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentRoute = usePathname();

  const linkStyle = "rounded-md px-3 py-2 text-sm font-medium";
  const activeLinkStyle = "bg-gray-900 text-white " + linkStyle;
  const nonActiveLinkStyle =
    "text-gray-300 hover:bg-gray-700 hover:text-white " + linkStyle;

  return (
    <>
      <nav className="bg-[#13263c]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <Image
                src="/logo.svg"
                alt="Logo Panti"
                width={50}
                height={50}
                priority
              />
              <div className="flex flex-grow sm:ml-6 justify-center items-center">
                <div className="flex space-x-4">
                  <a
                    href="/"
                    className={
                      currentRoute === "/"
                        ? activeLinkStyle
                        : nonActiveLinkStyle
                    }
                    aria-current="page"
                  >
                    Beranda
                  </a>
                  <Link
                    href="/tentang"
                    className={
                      currentRoute === "/tentang"
                        ? activeLinkStyle
                        : nonActiveLinkStyle
                    }
                  >
                    Tentang Kami
                  </Link>
                  <Link
                    href="/kontak"
                    className={
                      currentRoute === "/kontak"
                        ? activeLinkStyle
                        : nonActiveLinkStyle
                    }
                  >
                    Kontak Kami
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
