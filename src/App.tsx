import React from 'react'
import './styles/styles.sass'
import { Start, About, Skills, Footer } from './sections'

const App: React.FC = () => {
    return (
        <div>
            <Start />
            <About />
            <Skills />
            <Footer />
        </div>
    )
}

export default App
