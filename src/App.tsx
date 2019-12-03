import React from 'react'
import { Helmet } from 'react-helmet'
import Radium from 'radium'
import './styles/styles.sass'
import { Start, About, Skills, Footer, FixedNav, Contact, Experience } from './sections'

const App: React.FC = () => {
    return (
        <div>
            <Helmet>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="description" content="" />
                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <meta name="Keywords" content="kmnowak, nodejs, developer, webdeveloper, react, reactnative" />
                <title>kmnowak - NodeJS developer</title>
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
