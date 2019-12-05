import React from 'react'
import Radium from 'radium'
import { Link } from 'react-scroll'
import { container, FIXED_NAV_HEIGHT } from 'lib/styles'
import { fixedNav } from './styles'

const Nav: React.FC = () => (
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
                                    start
                                </div>
                            </Link>
                            <Link
                                to={'about'}
                                smooth={true}
                                offset={-FIXED_NAV_HEIGHT}
                            >
                                <div style={fixedNav.fixedNavItem}>
                                    about
                                </div>
                            </Link>
                            <Link
                                to={'experience'}
                                smooth={true}
                                offset={-FIXED_NAV_HEIGHT}
                            >
                                <div style={fixedNav.fixedNavItem}>
                                    experience
                                </div>
                            </Link>
                            <Link
                                to={'skills'}
                                smooth={true}
                                offset={-FIXED_NAV_HEIGHT}
                            >
                                <div style={fixedNav.fixedNavItem}>
                                    skills
                                </div>
                            </Link>
                            <Link
                                to={'contact'}
                                smooth={true}
                                offset={-FIXED_NAV_HEIGHT}
                            >
                                <div style={fixedNav.fixedNavItem}>
                                    contact
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
)

export const FixedNav = Radium(Nav)
