import React from 'react';
import {Link, Outlet} from "react-router-dom";

import './layout.scss'
import HeaderNav from "../../features/HeaderNav/HeaderNav";
import ScrollSubjectsBar from "../../features/ScrollSubjectsBar/ScrollSubjectsBar";

const Layout = () => {
    return (
        <>
            <header>
                <HeaderNav />
                <ScrollSubjectsBar />
            </header>

            <main>
                <Outlet />
            </main>

        </>
    );
};

export default Layout;