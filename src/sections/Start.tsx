import React from 'react'
import { Element, Link } from 'react-scroll'
import Radium from 'radium'
import { container, FIXED_NAV_HEIGHT } from 'lib/styles'
import { start } from './styles'

const StartSection: React.FC = () => (
    <section style={start.start}>
        <Element name={'start'} />
        <div style={container}>
            <div style={start.startContent}>
                <h1 style={start.startName}>
                    Krzysztof Nowak
                </h1>
                <h2 style={start.startSoftDev}>
                    software developer
                </h2>
                <div style={start.startButtonsDiv}>
                    <Link
                        to={'about'}
                        smooth={true}
                        offset={-FIXED_NAV_HEIGHT}
                    >
                        <div
                            style={start.startButtonBlue}
                        >
                            <b>About</b>
                        </div>
                    </Link>
                    <Link
                        to={'contact'}
                        smooth={true}
                        offset={-FIXED_NAV_HEIGHT}
                    >
                        <div
                            style={start.startButtonGreen}
                        >
                            <b>Contact</b>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </section>
)

export const Start = Radium(StartSection)
