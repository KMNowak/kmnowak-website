import React from 'react'
import Radium from 'radium'
import './styles/styles.sass'
import { Start, About, Skills, Footer, FixedNav, Contact, Experience } from './sections'

const App: React.FC = () => {
    return (
        <div>
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
