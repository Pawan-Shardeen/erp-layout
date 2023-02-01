import React from 'react';
import logo from '../../assets/images/Shardeen_ERP.png';
import { Link } from 'react-router-dom';
import './style.navbar.css';

export default function Navbar() {
    return (
        <nav className="bg-white navbar navbar-expand navbar-light py-0 shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Shardeen ERP" height={35} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#erpNavbar"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="erpNavbar">
                    <section id="sec-user-engagement">
                        <button type="button" className="border btn btn-light rounded-circle" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i className='bx bxs-user'></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end m-0 ">
                            <Link className="dropdown-item btn" to="/login">
                                <i className="bx bx-log-in" title="Login"></i>
                                <span className="sidebar-option-text">Login</span>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </nav>
    )
}
