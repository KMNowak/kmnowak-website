import React from 'react'
import { contact } from './styles'

export const Contact: React.FC = () => (
    <section style={contact.contact}>
        <div>
            {'Interested? Write to me:'}
        </div>
        <div style={contact.email}>
            {'contact@kmnowak.com'}
        </div>
    </section>
)
