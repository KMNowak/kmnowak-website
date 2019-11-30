import React from 'react'
import './styles/styles.sass'
import { Start, About, Skills, Footer, FixedNav } from './sections'

const App: React.FC = () => {
    return (
        <div>
            <FixedNav />
            <Start />
            <About />
            <Skills />
            <Footer />
        </div>
    )
}

export default App
