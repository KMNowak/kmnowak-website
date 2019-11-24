import React from 'react'

export const Start: React.FC = () => (
    <section id="start" className="start">
        <div className="container">
            <div className="start__content">
                <h1 className="start__name">
                    Krzysztof Nowak
                </h1>
                <h2 className="start__soft-dev">
                    software developer
                </h2>
                <div className="start__buttons-div">
                    <div
                        className="start__button start__button--green"
                    >
                        <b>About</b>
                    </div>
                    <div
                        className="start__button start__button--blue"
                    >
                        <b>Contact</b>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
