import { createStyle } from 'lib/utils'
import { COLORS, selectNone, shadowLight } from 'lib/styles'

export const experience = createStyle({
    alignItems: 'center',
    backgroundColor: COLORS.GRAY_LIGHT,
    color: COLORS.WHITE,
    display: 'flex',
    flexDirection: 'column',
    fontSize: '25px',
    justifyContent: 'center',
    zIndex: 1
})

export const img = createStyle({
    height: '100%',
    objectFit: 'contain',
    width: '100%'
})

export const experienceItemContent = createStyle({
    backgroundColor: COLORS.WHITE,
    color: COLORS.TYPOGRPHY,
    ...shadowLight
})

export const experienceItemArrow = createStyle({
    borderRight: '10px solid  rgb(255, 255, 255)'
})

export const experienceIcon = createStyle({
    ...shadowLight
})
