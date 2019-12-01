import React from 'react'
import { COLORS, invisible } from 'lib/styles'
import { contact } from './styles'

export const Contact: React.FC = () => (
    <section style={contact.contact}>
        <h2 style={invisible}>Contact</h2>
        <h4 style={{color: COLORS.WHITE}}>
            {'Interested? Write to me:'}
        </h4>
        <h3 style={contact.email}>
            {'contact@kmnowak.com'}
        </h3>
    </section>
)
