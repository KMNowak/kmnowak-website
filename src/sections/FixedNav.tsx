import React from 'react'
import { Link } from 'react-scroll'
import { container, FIXED_NAV_HEIGHT } from 'lib/styles'
import { fixedNav } from './styles'

export const FixedNav: React.FC = () => (
    <header>
        <nav>
            <div style={fixedNav.fixedNav}>
                <div style={container}>
                    <div style={fixedNav.fixedNavContent}>
                        <Link
                            to={'start'}
                            smooth={true}
                        >
                            <div
                                style={{
                                    ...fixedNav.fixedNavItem,
                                    fontWeight: 'bold'
                                }}
                            >
                                kmnowak
                            </div>
                        </Link>
                        <div style={fixedNav.fixedNavList}>
                            <Link
                                to={'start'}
                                smooth={true}
                                offset={-FIXED_NAV_HEIGHT}
                            >
                                <div style={fixedNav.fixedNavItem}>
                                    Start
                                </div>
                            </Link>
                            <Link
                                to={'about'}
                                smooth={true}
                                offset={-FIXED_NAV_HEIGHT}
                            >
                                <div style={fixedNav.fixedNavItem}>
                                    About
                                </div>
                            </Link>
                            <Link
                                to={'experience'}
                                smooth={true}
                                offset={-FIXED_NAV_HEIGHT}
                            >
                                <div style={fixedNav.fixedNavItem}>
                                    Experience
                                </div>
                            </Link>
                            <Link
                                to={'skills'}
                                smooth={true}
                                offset={-FIXED_NAV_HEIGHT}
                            >
                                <div style={fixedNav.fixedNavItem}>
                                    Skills
                                </div>
                            </Link>
                            <Link
                                to={'contact'}
                                smooth={true}
                                offset={-FIXED_NAV_HEIGHT}
                            >
                                <div style={fixedNav.fixedNavItem}>
                                    Contact
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
)
