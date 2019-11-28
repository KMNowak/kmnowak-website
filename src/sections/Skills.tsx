import React from 'react'
import { Skill } from 'components'

export const Skills: React.FC = () => (
    <section className="skills">
        <Skill fillPercent={65} skillLvl={'Advanced'} skillName={'JavaScript'} />
        <Skill fillPercent={33} skillLvl={'Familiar'} skillName={'NestJS'} />
    </section>
)
