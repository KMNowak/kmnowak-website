import React from 'react'
import { Helmet } from 'react-helmet'
import Radium from 'radium'
import './styles/styles.sass'
import { Start, About, Skills, Footer, FixedNav, Contact, Experience } from './sections'

const App: React.FC = () => {
    return (
        <div>
            <Helmet>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <meta name="Keywords" content="kmnowak, Krzysztof Nowak, javascript, webdeveloper, nodejs, ReactNative, React" />
                <title>kmnowak - JavaScript developer</title>
                <link rel="icon" href="./public/favicon.ico" />
                <meta name="theme-color" content="#000000" />
                <link rel="apple-touch-icon" href="./public/icon-152.png" />
                <link rel="manifest" href="./public/manifest.json" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <title>kmnowak - JavaScript developer</title>
            </Helmet>
            <FixedNav />
            <Start />
            <About />
            <Experience />
            <Skills />
            <Contact />
            <Footer />
        </div>
    )
}

export default Radium(App)
