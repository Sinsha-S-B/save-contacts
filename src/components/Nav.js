import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav class="  navbar navbar-dark bg-dark navbar-expand-lg">
        <div class="container-fluid">
          <Link className="navbar-brand" to="#">
            Private Contact
          </Link>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="container-fluid">
              {/* <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
            </div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-40 ">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/favourite
                "
                >
                  Favourite
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
