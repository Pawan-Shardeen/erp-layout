import React from 'react'
import { Link } from 'react-router-dom';
import companyLogo from '../../assets/images/Shardeen.png';

export default function Sidebar() {
    function toggleSidebar() {
        document.getElementById("sec-sidebar").classList.toggle("open");
    }
    return (
        <section id="sec-sidebar">
            <div className="border-end d-flex h-100 overflow-hidden position-relative">
                <section id="cntnr-sidebar" className="mb-4 pb-2">
                    <div className="align-items-center d-flex overflow-hidden mt-2">
                        <span className="project-logo d-flex align-items-center justify-content-center">
                            <img src={companyLogo} alt="Project" />
                        </span>
                        <div className="project-title">
                            Project Name
                        </div>
                    </div>
                    <section id="sec-sidebar-menu">
                        <div className="position-absolute top-0 w-100">
                            <div className="mb-5 p-0 pb-4 text-left">
                                <div className="accordion accordion-flush" id="base-accordion">
                                    <div className="accordion-item">
                                        <div className="accordion-header sidebar-menu-item" id="menu-opt-item_1">
                                            <button className="accordion-button collapsed w-auto" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#item_1"
                                                aria-expanded="false" aria-controls="item_1">
                                            </button>
                                            <a href="/"
                                                className="h-100 w-100 d-flex align-items-center text-decoration-none rounded"
                                                title="Home">
                                                <i className="bx bx-home-alt sidebar-option-icon"></i>
                                                <span className="sidebar-option-text">Item 1</span>
                                            </a>
                                        </div>
                                        <div id="item_1" className="accordion-collapse collapse"
                                            aria-labelledby="menu-opt-item_1" data-bs-parent="#base-accordion">
                                            <div className="accordion-body">
                                                <div className="accordion accordion-flush" id="inner-accordion">
                                                    <div className="accordion-item">
                                                        <div className="accordion-header sidebar-menu-item"
                                                            id="menu-opt-item_1_A">
                                                            <button className="accordion-button collapsed w-auto"
                                                                type="button" data-bs-toggle="collapse"
                                                                data-bs-target="#item_1_A" aria-expanded="false"
                                                                aria-controls="item_1_A">
                                                            </button>
                                                            <a href="/"
                                                                className="h-100 w-100 d-flex align-items-center text-decoration-none rounded"
                                                                title="Home">
                                                                <i className="bx bx-home-alt sidebar-option-icon"></i>
                                                                <span className="sidebar-option-text">Item
                                                                    1.A</span>
                                                            </a>
                                                        </div>
                                                        <div id="item_1_A" className="accordion-collapse collapse"
                                                            aria-labelledby="menu-opt-item_1_A"
                                                            data-bs-parent="#inner-accordion">
                                                            <div className="accordion-body">
                                                                <div>
                                                                    <a href="/"
                                                                        className="h-100 w-100 d-flex align-items-center text-decoration-none rounded sidebar-menu-item">
                                                                        <i className="bx bx-log-in sidebar-option-icon"
                                                                            title="Login"></i>
                                                                        <span className="sidebar-option-text">Item
                                                                            1.A.i</span>
                                                                    </a>
                                                                </div>
                                                                <div>
                                                                    <a href="/"
                                                                        className="h-100 w-100 d-flex align-items-center text-decoration-none rounded sidebar-menu-item">
                                                                        <i className="bx bx-log-in sidebar-option-icon"
                                                                            title="Login"></i>
                                                                        <span className="sidebar-option-text">Item
                                                                            1.A.ii</span>
                                                                    </a>
                                                                </div>
                                                                <div>
                                                                    <a href="/"
                                                                        className="h-100 w-100 d-flex align-items-center text-decoration-none rounded sidebar-menu-item">
                                                                        <i className="bx bx-log-in sidebar-option-icon"
                                                                            title="Login"></i>
                                                                        <span className="sidebar-option-text">Item
                                                                            1.A.iii</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="accordion-item">
                                                        <div className="accordion-header sidebar-menu-item"
                                                            id="menu-opt-item_1_B">
                                                            <button className="accordion-button collapsed w-auto"
                                                                type="button" data-bs-toggle="collapse"
                                                                data-bs-target="#item_1_B" aria-expanded="false"
                                                                aria-controls="item_1_B">
                                                            </button>
                                                            <a href="/"
                                                                className="h-100 w-100 d-flex align-items-center text-decoration-none rounded"
                                                                title="Home">
                                                                <i className="bx bx-home-alt sidebar-option-icon"></i>
                                                                <span className="sidebar-option-text">Item
                                                                    1.B</span>
                                                            </a>
                                                        </div>
                                                        <div id="item_1_B" className="accordion-collapse collapse"
                                                            aria-labelledby="menu-opt-item_1_B"
                                                            data-bs-parent="#inner-accordion">
                                                            <div className="accordion-body">
                                                                <div>
                                                                    <a href="/"
                                                                        className="h-100 w-100 d-flex align-items-center text-decoration-none rounded sidebar-menu-item">
                                                                        <i className="bx bx-log-in sidebar-option-icon"
                                                                            title="Login"></i>
                                                                        <span className="sidebar-option-text">Item
                                                                            1.B.i</span>
                                                                    </a>
                                                                </div>
                                                                <div>
                                                                    <a href="/"
                                                                        className="h-100 w-100 d-flex align-items-center text-decoration-none rounded sidebar-menu-item">
                                                                        <i className="bx bx-log-in sidebar-option-icon"
                                                                            title="Login"></i>
                                                                        <span className="sidebar-option-text">Item
                                                                            1.B.ii</span>
                                                                    </a>
                                                                </div>
                                                                <div>
                                                                    <a href="/"
                                                                        className="h-100 w-100 d-flex align-items-center text-decoration-none rounded sidebar-menu-item">
                                                                        <i className="bx bx-log-in sidebar-option-icon"
                                                                            title="Login"></i>
                                                                        <span className="sidebar-option-text">Item
                                                                            1.B.iii</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header d-flex sidebar-menu-item"
                                            id="flush-headingTwo">
                                            <button className="accordion-button collapsed w-auto" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                                aria-expanded="false" aria-controls="flush-collapseTwo">
                                            </button>
                                            <a href="/"
                                                className="h-100 w-100 d-flex align-items-center text-decoration-none rounded"
                                                title="Home">
                                                <i className="bx bx-home-alt sidebar-option-icon"></i>
                                                <span className="sidebar-option-text">Item 2</span>
                                            </a>
                                        </div>
                                        <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                            aria-labelledby="flush-headingTwo" data-bs-parent="#base-accordion">
                                            <div className="accordion-body">
                                                <div>
                                                    <a href="/login"
                                                        className="h-100 w-100 d-flex align-items-center text-decoration-none rounded sidebar-menu-item">
                                                        <i className="bx bx-log-in sidebar-option-icon"
                                                            title="Login"></i>
                                                        <span className="sidebar-option-text">Login</span>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a href="/register-org"
                                                        className="h-100 w-100 d-flex align-items-center text-decoration-none rounded sidebar-menu-item">
                                                        <i className="bx bx-add-to-queue sidebar-option-icon"
                                                            title="Register Organisation"></i>
                                                        <span className="sidebar-option-text">Register
                                                            Organisation</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div>
                                    <a href="/jquery-datatable"
                                        className="h-100 w-100 d-flex align-items-center text-decoration-none rounded sidebar-menu-item">
                                        <i className="bx bxl-jquery sidebar-option-icon" title="Jquery Table"></i>
                                        <span className="sidebar-option-text">Jquery Table</span>
                                    </a>
                                </div>
                                <div>
                                    <Link to="/table"
                                        className="h-100 w-100 d-flex align-items-center text-decoration-none rounded sidebar-menu-item">
                                        <i className="bx bx-table sidebar-option-icon"
                                            title="Custom Table"></i>
                                        <span className="sidebar-option-text">Table</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <div className="cursor-pointer sidebar-menu-item d-flex position-absolute bottom-0 justify-content-between align-items-center w-100 bg-light"
                    onClick={toggleSidebar}>
                    <i className='bx bx-cog fs-4 btn border-0 sidebar-option-icon pe-0' style={{ minWidth: 'auto' }}></i>
                    <i className='btn bx bx-chevrons-right fs-5 p-1 sidebar-toggle text-secondary border-0'></i>
                </div>
            </div>
        </section>
    )
}
