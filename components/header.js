import React from 'react';
import Navbar from './navbar';

function Header(props) {
  return (
    <div>
      <header className="p-3 mb-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <h3>Upcoming</h3>
            <Navbar />
            {/* prettier-ignore */}
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-aria-label="Search" />
            </form>
            <div className="text-end">
              <button type="button" className="btn btn-outline-dark me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
