import React from 'react'

export default function Header() {
  return (
    <>
      <header class="p-3 text-bg-dark">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          ></a>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="/Home" class="nav-link px-2 text-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="/Features" class="nav-link px-2 text-white">
                Features
              </a>
            </li>
            <li>
              <a href="/Pricing" class="nav-link px-2 text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="/FAQ's" class="nav-link px-2 text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="/About" class="nav-link px-2 text-white">
                About
              </a>
            </li>
          </ul>

          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              class="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
            ></input>
          </form>

          <div class="text-end">
            <button type="button" class="btn btn-outline-light me-2">
              Login
            </button>
            <button type="button" class="btn btn-warning">
              Sign-up
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
