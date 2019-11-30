import React, { FC } from 'react'
import { SkillGroupHeader } from './SkillGroupHeader'
import { skillGroup, skillGroupName } from './styles'

type Props = {
    name: string,
    imgWidth?: number,
    imgHeight?: number
    image: any
}

export const SkillGroup: FC<Props> = ({ children, name, image, imgWidth, imgHeight }) => (
    <div style={skillGroup}>
        <SkillGroupHeader
            image={image}
            imgWidth={imgWidth}
            imgHeight={imgHeight}
        />
        <div style={skillGroupName}>
            {name}
        </div>
        {children}
    </div>
)
