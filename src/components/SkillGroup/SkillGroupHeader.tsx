import React, { FC } from 'react'
import { skillGroupHeader } from './styles'

type SkillProps = {
    image: any,
    imgWidth?: number,
    imgHeight?: number
}

export const SkillGroupHeader: FC<SkillProps> = ({ image, imgHeight = 50, imgWidth = 50 }) => (
    <div style={skillGroupHeader}>
        <img src={image} alt={"Skill group icon"} height={`${imgHeight}px`} width={`${imgWidth}px`} />
    </div>
)
