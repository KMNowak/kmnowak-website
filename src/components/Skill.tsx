import React, { FC } from 'react'
import { skillStyles }  from './styles'

export const Skill: FC = () => (
    <div style={skillStyles.sk}>
        <div className="skill__text-section">
            text
            <div>
                Title
            </div>
            <div>
                lvl
            </div>
        </div>
        <div className="skill__progress-bar-section">
            progress bar
        </div>
    </div>
)
