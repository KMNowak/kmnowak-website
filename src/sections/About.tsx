import React from 'react'
import { container } from 'lib/styles'
import { facePhoto } from 'assets'
import { about } from './styles'

export const About: React.FC = () => (
    <section style={about.about}>
        <div style={container}>
            <div style={about.aboutContent}>
                <div style={about.aboutText}>
                    <h3>
                        Doggo ipsum tungg such treat heckin very taste wow clouds hemade many woofs,
                        fat boi adorable doggo borkdrive. Smol borking doggo with a long snoot for
                        pats blep heckin good boys much rui diet, very hand that feed shibe lotsa
                        pats borkdrive shoober, wow diet, very hand that feed shibe lotsa pats borkdrive shoober,
                    </h3>
                </div>
                <div style={about.aboutPhoto}>
                    <img src={facePhoto} alt="Krzysztof Nowak photo" height="200px" />
                </div>
            </div>
        </div>
    </section>
)
