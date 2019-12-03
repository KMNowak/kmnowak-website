import React from 'react'
import Radium from 'radium'
import { Element } from 'react-scroll'
import { COLORS, invisible } from 'lib/styles'
import { contact } from './styles'

const ContactSection: React.FC = () => (
    <section style={contact.contact}>
        <Element name={'contact'} />
        <h2 style={invisible}>Contact</h2>
        <h4 style={{color: COLORS.WHITE}}>
            {'Interested? Write to me:'}
        </h4>
        <h3 style={contact.email}>
            {'contact@kmnowak.com'}
        </h3>
    </section>
)

export const Contact = Radium(ContactSection)
