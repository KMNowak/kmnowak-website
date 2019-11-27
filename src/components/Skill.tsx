import React, { FC } from 'react'
import { skillStyles } from './styles'

type SkillProps = {
    skillName: string,
    skillLvl: string,
    fillPercent: number
}

export const Skill: FC<SkillProps> = ({ fillPercent }) => (
    <div style={skillStyles.skill}>
        <div style={skillStyles.textSection}>
            <div style={skillStyles.textSkillName}>
                Title
            </div>
            <div style={skillStyles.textSkillLvl}>
                lvl
            </div>
        </div>
        <div style={skillStyles.progressBarSection}>
            <div style={skillStyles.progressBarBar}>
                <div style={skillStyles.progressBarFill(90)}>
                </div>
            </div>
        </div>
    </div>
)
