import React from 'react'
import { container, invisible } from 'lib/styles'
import { facePhoto } from 'assets'
import Radium from 'radium'
import { Element } from 'react-scroll'
import { about } from './styles'

const AboutSection: React.FC = () => (
    <section style={about.about}>
        <div style={container}>
            <Element name={'about'} />
            <h2 style={invisible}>About</h2>
            <div style={about.aboutContent}>
                <h4 style={about.aboutText}>
                    Developer in love with JavaScript, NodeJS and NestJS.
                    Cheating on them after hours with React Native. Provider of scalable,
                    secure and reliable solutions. Experienced in building apps from scratch.
                    <br/>
                    <br/>
                    Responsible, highly communicative and usually smiled (do not let the photo deceive you).
                </h4>
                <div style={about.aboutPhoto}>
                    <img src={facePhoto} alt="Krzysztof Nowak photo" height="100%" />
                </div>
            </div>
        </div>
    </section>
)

export const About = Radium(AboutSection)
