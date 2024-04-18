import React from 'react';
import {Outlet} from "react-router-dom";

import './layout.scss'
import HeaderNav from "../../features/HeaderNav/HeaderNav";

const Layout = () => {
    return (
        <>
            <header>
                <HeaderNav />
                {/*<ScrollSubjectsBar />*/}
            </header>

            <main>
                <Outlet />
            </main>

        </>
    );
};

export default Layout;