import React from 'react'
import './navsidebar.css'
import Logo from "../assets/img/logo.png"
import Search from "../components/Search"

function NavSideBar() {
    return (
        <div>
            <header className="navbar sticky-top flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-1" href="/">
                    <img src={Logo} alt="" width="150" height="57" />
                </a>
                <Search />
                <button className="navbar-toggler position-absolute d-md-none collapsed mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </header>

            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div className="position-sticky pt-5">
                        <ul className="nav flex-column">
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/dashboard">
                            <i className="bi bi-layout-wtf text-success px-1"></i>
                            <span data-feather="home"></span>
                            Dashboard
                            </a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="/signup">
                            <span data-feather="file"></span>
                            <i className="bi bi-pencil-square text-success px-1"></i>
                            Sign Up
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/registration">
                            <span data-feather="shopping-cart"></span>
                            <i className="bi bi-calendar2-check text-success px-1"></i>
                            Registration
                            </a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link" href="/attendance">
                            <span data-feather="users"></span>
                            <i className="bi bi-person-check-fill text-success px-1"></i>
                            Attendance
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="visits">
                            <span data-feather="bar-chart-2"></span>
                            <i className="bi bi-house-fill text-success px-1"></i>
                            Visits
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/counseling">
                            <span data-feather="layers"></span>
                            <i className="bi bi-house-fill text-success px-1"></i>
                            Counseling
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/education">
                            <span data-feather="layers"></span>
                            <i className="bi bi-book-half text-success px-1"></i>
                            Education
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="lifeskills">
                            <span data-feather="layers"></span>
                            <i className="bi bi-house-fill text-success px-1"></i>
                            Lifeskills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/profile">
                            <span data-feather="layers"></span>
                            <i className="bi bi-people-fill text-success px-1"></i>
                            Profiles
                            </a>
                        </li>
                        </ul>

                        {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-1 mt-4 mb-1 text-muted">
                        <span>ACCOUNT</span>
                        <a className="link-secondary" href="/" aria-label="Add a new report">
                            <span data-feather="plus-circle"></span>
                        </a>
                        </h6> */}
                        <ul className="nav flex-column mb-2">
                        {/* <li className="nav-item">
                            <a className="nav-link" href="settings">
                            <span data-feather="file-text"></span>
                            <i className="bi bi-gear-fill text-success px-1"></i>
                            Settings
                            </a>
                        </li> */}
                        {/* <li className="nav-item">
                            <a className="nav-link" href="admin">
                            <span data-feather="file-text"></span>
                            <i className="bi bi-file-earmark-lock2 text-success px-1"></i>
                            Admin
                            </a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                            <span data-feather="file-text"></span>
                            <i className="bi bi-file-earmark-lock2 text-success px-1"></i>
                            Log Out
                            </a>
                        </li>
                        </ul>
                    </div>
                    {/* <div className="input-group w-15 px-1">
                        <input className="form-control-search" type="text" placeholder="Search for..." aria-label="Search for..."
                                aria-describedby="btnNavbarSearch"
                        />
                        <button className="btn btn-success" id="btnNavbarSearch" type="button">
                                <i className="bi bi-search"></i>
                        </button>
                    </div> */}
                    </nav>
                </div>
                <footer className="py-2 fixed-bottom bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; SRF 2022</div>
                            <div>
                                <a href="/privacy-policy">Privacy Policy</a>
                                &middot;
                                <a href="/terms-and-conditions">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default NavSideBar