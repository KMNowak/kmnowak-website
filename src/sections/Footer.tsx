import React from 'react'
import Radium from 'radium'
import { container } from 'lib/styles'
import { footer } from './styles'
import { stackOverflowIcon, gitHubIcon, linkedInIcon } from '../assets'

const FooterSection: React.FC = () => (
    <section style={footer.footer}>
        <div style={container}>
            <div style={footer.footerContent}>
                <div style={footer.footerList}>
                    <a href="https://www.linkedin.com/in/kmnowak" style={footer.footerItem}>
                        <img
                            src={linkedInIcon}
                            alt="LinkedId kmnowak"
                            height="30px"
                        />
                    </a>
                    <a href="https://github.com/kmnowak" style={footer.footerItem}>
                        <img
                            src={gitHubIcon}
                            alt="Github kmnowak"
                            height="30px"
                        />
                    </a>
                    <a href="https://stackoverflow.com/users/8240531/kmnowak" style={footer.footerItem}>
                        <img
                            src={stackOverflowIcon}
                            alt="StackOverflow kmnowak"
                            height="40px"
                        />
                    </a>
                </div>
                <div style={footer.footerText}>
                    Copyright Krzysztof Nowak 2020<br />
                    All rights reserved
                </div>
            </div>
        </div>
    </section>
)

export const Footer = Radium(FooterSection)
