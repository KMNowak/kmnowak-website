import React from 'react'
import { container } from 'lib/styles'
import { start } from './styles'

export const Start: React.FC = () => (
    <section style={start.start}>
        <div style={container}>
            <div style={start.startContent}>
                <h1 style={start.startName}>
                    Krzysztof Nowak
                </h1>
                <h2 style={start.startSoftDev}>
                    software developer
                </h2>
                <div style={start.startButtonsDiv}>
                    <div
                        style={start.startButtonGreen}
                    >
                        <b>About</b>
                    </div>
                    <div
                        style={start.startButtonBlue}
                    >
                        <b>Contact</b>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
