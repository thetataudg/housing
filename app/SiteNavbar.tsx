'use client';

import Image from "next/image";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};

type Props = {
  brandText: string;
  items: NavItem[];
};

export default function SiteNavbar({ brandText, items }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <Image
            src="/coa.png"
            loading="eager"
            alt="Theta Tau Coat of Arms"
            width={30}
            height={30}
            className="d-inline-block align-top me-2"
          />
          {brandText}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isOpen ? "d-block" : "d-none"} d-lg-flex w-100`} id="navbarNav">
          <ul className="navbar-nav flex-column flex-lg-row gap-2 gap-lg-3 ms-lg-5">
            {items.map((item) => (
              <li key={item.href} className="nav-item">
                <a
                  className={`nav-link${item.active ? " active" : ""}`}
                  aria-current={item.active ? "page" : undefined}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
