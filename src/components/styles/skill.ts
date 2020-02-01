import { createStyle } from 'lib/utils'
import { shadowLight, COLORS, Media } from 'lib/styles'

export const skill = createStyle({
    ...shadowLight,
    alignItems: 'center',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    height: '50px',
    justifyContent: 'space-around',
    margin: '10px',
    padding: '10px 15px 10px 10px',
    width: '100%'
})
export const textSection = createStyle({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
})
export const textSkillName = createStyle({
    fontSize: '19px',
    [Media.phone]: {
        fontSize: '14px'
    }
})
export const textSkillLvl = createStyle({
    fontStyle: 'italic',
    fontSize: '16px',
    [Media.phone]: {
        fontSize: '14px'
    }
})
export const progressBarSection = createStyle({
    display: 'block',
    height: '13px',
    width: '100%'
})
export const progressBarBar = createStyle({
    backgroundColor: COLORS.GRAY_LIGHT,
    borderRadius: '13px',
    height: '13px',
    width: '100%'
})
export const progressBarFill= (fillPercent: number) => createStyle({
    backgroundColor: COLORS.PRIMARY,
    borderRadius: '13px',
    height: '13px',
    zIndex: 5,
    width: `${fillPercent}%`
})

