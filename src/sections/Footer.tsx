import React from 'react'
import { stackOverflowIcon, gitHubIcon, linkedInIcon } from '../assets'

export const Footer: React.FC = () => (
    <section id="footer" className="footer">
        <div className="container">
            <div className="footer__content">
                <div className="footer__list">
                    <a href="https://www.linkedin.com/in/kmnowak" className="footer__item">
                        <img
                            src={linkedInIcon}
                            alt="LinkedId kmnowak"
                            height="30px"
                        />
                    </a>
                    <a href="https://github.com/kmnowak" className="footer__item">
                        <img
                            src={gitHubIcon}
                            alt="Github kmnowak"
                            height="30px"
                        />
                    </a>
                    <a href="https://stackoverflow.com/users/8240531/kmnowak" className="footer__item">
                        <img
                            src={stackOverflowIcon}
                            alt="StackOverflow kmnowak"
                            height="40px"
                        />
                    </a>
                </div>
                <div className="footer__text">
                    Copyright Krzysztof Nowak 2019<br />
                    All rights reserved
                </div>
            </div>
        </div>
    </section>
)
