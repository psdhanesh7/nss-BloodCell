import React from 'react';
import MobileNav from './MobileNav/MobileNav';
import DesktopNav from './DesktopNav/DesktopNav';

export default function NavLinks({
    hamburgerStatus,
    changeHamburgerStatus,
    onLogout
}) {
    if (hamburgerStatus) {
        return (
            <MobileNav
                changeHamburgerStatus={changeHamburgerStatus}
                onLogout={onLogout}
            />
        );
    }
    return <DesktopNav onLogout={onLogout} />;
}
