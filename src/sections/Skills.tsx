import React from 'react'
import { Skill, SkillGroup } from 'components'
import { bracketsIcon, storageIcon, webIcon, toolsLogo } from 'assets'
import { Element } from 'react-scroll'
import Radium from 'radium'
import { container } from 'lib/styles'
import { skills } from './styles'

const SkillsSection: React.FC = () => (
    <section style={container}>
        <Element name={'skills'}/>
        <div style={skills.skills}>
            <SkillGroup name={'Programming'} image={bracketsIcon} imgWidth={35} imgHeight={45}>
                <Skill fillPercent={88} skillLvl={'Advanced'} skillName={'JavaScript'} />
                <Skill fillPercent={70} skillLvl={'Intermediate'} skillName={'TypeScript'} />
                <Skill fillPercent={60} skillLvl={'Intermediate'} skillName={'NodeJS'} />
                <Skill fillPercent={62} skillLvl={'Intermediate'} skillName={'MySQL 5.6'} />
                <Skill fillPercent={52} skillLvl={'Familiar'} skillName={'HTML/CSS'} />
            </SkillGroup>
            <SkillGroup name={'Frameworks'} image={webIcon} imgWidth={35} imgHeight={30}>
                <Skill fillPercent={88} skillLvl={'Advanced'} skillName={'NestJS'} />
                <Skill fillPercent={70} skillLvl={'Intermediate'} skillName={'express.js'} />
                <Skill fillPercent={63} skillLvl={'Intermediate'} skillName={'Serverless'} />
                <Skill fillPercent={52} skillLvl={'Familiar'} skillName={'ReactNative'} />
                <Skill fillPercent={54} skillLvl={'Familiar'} skillName={'React/Redux'} />
            </SkillGroup>
            <SkillGroup name={'Databases'} image={storageIcon}>
                <Skill fillPercent={75} skillLvl={'Intermediate'} skillName={'MySQL'} />
                <Skill fillPercent={50} skillLvl={'Familiar'} skillName={'MongoDB'} />
                <Skill fillPercent={52} skillLvl={'Familiar'} skillName={'Redis'} />
                <Skill fillPercent={66} skillLvl={'Intermediate'} skillName={'DynamoDB'} />
            </SkillGroup>
            <SkillGroup name={'Others'} image={toolsLogo} imgWidth={35} imgHeight={30}>
                <Skill fillPercent={50} skillLvl={'Familiar'} skillName={'AWS'} />
                <Skill fillPercent={67} skillLvl={'Intermediate'} skillName={'git'} />
                <Skill fillPercent={55} skillLvl={'Familiar'} skillName={'webpack'} />
                <Skill fillPercent={67} skillLvl={'Intermediate'} skillName={'testing'} />
            </SkillGroup>
        </div>
    </section>
)

export const Skills = Radium(SkillsSection)
