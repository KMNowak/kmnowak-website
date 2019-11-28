import React, { FC } from 'react'
import { skillStyles } from './styles'

type SkillProps = {
    skillName: string,
    skillLvl: string,
    fillPercent: number
}

export const Skill: FC<SkillProps> = ({ fillPercent, skillLvl, skillName }) => (
    <div style={skillStyles.skill}>
        <div style={skillStyles.textSection}>
            <div style={skillStyles.textSkillName}>
                {skillName}
            </div>
            <div style={skillStyles.textSkillLvl}>
                {skillLvl}
            </div>
        </div>
        <div style={skillStyles.progressBarSection}>
            <div style={skillStyles.progressBarBar}>
                <div style={skillStyles.progressBarFill(fillPercent)}>
                </div>
            </div>
        </div>
    </div>
)
