import React from 'react';
import Navbar from '../../layouts/Navbar/Navbar';
import Footer from '../../layouts/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../layouts/Sidebar/Sidebar';

export default function Home() {

    window.onload = (event) => {
        //Initializing Bootstrap tooltips
        let navbar = document.getElementById("sec-main-navbar");
        document.querySelector(':root').style.setProperty('--navbar-height', `${navbar.offsetHeight}px`);
    }
    return (
        <>
            {
                //#region Navbar
            }
            <section id="sec-main-navbar">
                <Navbar />
            </section>
            {
                //#endregion
            }

            <section id="sec-main-body">
                {
                    //#region Sidebar
                }
                <Sidebar />
                {
                    //#endregion
                }

                <section id="sec-page-wrapper">
                    <Outlet />
                </section>
            </section>

            {
                //#region Footer
            }
            <section id="sec-main-footer">
                <Footer />
            </section>
            {
                //#endregion
            }
        </>
    )
}
