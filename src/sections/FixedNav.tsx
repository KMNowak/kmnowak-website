import React from 'react'
import { container } from 'lib/styles'
import { fixedNav } from './styles'

export const FixedNav: React.FC = () => (
    <header>
        <nav>
            <div style={fixedNav.fixedNav}>
                <div style={container}>
                    <div style={fixedNav.fixedNavContent}>
                        <div
                            style={{
                                ...fixedNav.fixedNavItem,
                                fontWeight: 'bold'
                            }}
                        >
                            kmnowak
                        </div>
                        <div style={fixedNav.fixedNavList}>
                            <div style={fixedNav.fixedNavItem}>
                                Start
                            </div>
                            <div style={fixedNav.fixedNavItem}>
                                About
                            </div>
                            <div style={fixedNav.fixedNavItem}>
                                Experience
                            </div>
                            <div style={fixedNav.fixedNavItem}>
                                Contact
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
)
