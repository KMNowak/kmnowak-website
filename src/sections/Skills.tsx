import React from 'react'
import { Skill, SkillGroup } from 'components'
import { bracketsIcon, storageIcon, webIcon } from 'assets'
import { Element } from 'react-scroll'
import { container } from 'lib/styles'
import { skills } from './styles'

export const Skills: React.FC = () => (
    <section style={container}>
        <Element name={'skills'}/>
        <div style={skills.skills}>
            <SkillGroup name={'Programming'} image={bracketsIcon} imgWidth={35} imgHeight={45}>
                <Skill fillPercent={65} skillLvl={'Advanced'} skillName={'JavaScript'} />
                <Skill fillPercent={33} skillLvl={'Familiar'} skillName={'NestJS'} />
            </SkillGroup>
            <SkillGroup name={'Databases'} image={storageIcon}>
                <Skill fillPercent={65} skillLvl={'Advanced'} skillName={'JavaScript'} />
                <Skill fillPercent={33} skillLvl={'Familiar'} skillName={'NestJS'} />
            </SkillGroup>
            <SkillGroup name={'Frameworks'} image={webIcon} imgWidth={35} imgHeight={30}>
                <Skill fillPercent={65} skillLvl={'Advanced'} skillName={'JavaScript'} />
                <Skill fillPercent={33} skillLvl={'Familiar'} skillName={'NestJS'} />
            </SkillGroup>
        </div>
    </section>
)
