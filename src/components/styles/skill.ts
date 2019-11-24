import { COLORS } from 'styles'
import { StyleObject } from 'lib/types'

// todo: createStyleObject to get hints
export const skillStyles: StyleObject = {
    skill: {
        alignItems: 'center',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '10px 15px 10px 10px',
        width: '300px'
    },
    textSection: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    textSkillName: {
        fontSize: '14px'
    },
    textSkillLvl: {
        fontStyle: 'italic',
        fontSize: '14px'
    },
    progressBarSection: {
        display: 'block',
        height: '18px',
        width: '100%'
    },
    progressBarBar: {
        backgroundColor: COLORS.GRAY_LIGHT,
        borderRadius: '18px',
        height: '18px',
        width: '100%'
    },
    progressBarFill: {
        backgroundColor: COLORS.PRIMARY,
        borderRadius: '18px',
        height: '18px',
        zIndex: 5
    }
}
