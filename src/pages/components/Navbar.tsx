import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <ul>
        <li>
          <Link href="/">Main </Link>
        </li>

        <li>
          <Link href="/movies">Movies </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
