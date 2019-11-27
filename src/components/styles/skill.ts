import { COLORS } from 'styles'
import { createStyle } from 'lib/utils'

export const skill = createStyle({
    alignItems: 'center',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '10px 15px 10px 10px',
    width: '300px'
})
export const textSection = createStyle({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
})
export const textSkillName = createStyle({
    fontSize: '14px'
})
export const textSkillLvl = createStyle({
    fontStyle: 'italic',
    fontSize: '14px'
})
export const progressBarSection = createStyle({
    display: 'block',
    height: '18px',
    width: '100%'
})
export const progressBarBar = createStyle({
    backgroundColor: COLORS.GRAY_LIGHT,
    borderRadius: '18px',
    height: '18px',
    width: '100%'
})
export const progressBarFill= (fillPercent: number) => createStyle({
    backgroundColor: COLORS.PRIMARY,
    borderRadius: '18px',
    height: '18px',
    zIndex: 5,
    width: `${fillPercent}%`
})

