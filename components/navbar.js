import React from 'react';
import Link from 'next/link';

function Navbar(props) {
  return (
    <nav className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
      {/* <Link href="."> */}
      <a className="nav-link px-2 text-secondary">About</a>
      {/* </Link> */}
      {/* <Link href=".."> */}
      <a className="nav-link px-2 text-secondary">Artists</a>
      {/* </Link> */}
      {/* <Link href="..."> */}
      <a className="nav-link px-2 text-secondary">Venues</a>
      {/* </Link> */}
    </nav>
  );
}

export default Navbar;
