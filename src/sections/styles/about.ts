import { createStyle } from 'lib/utils'
import { COLORS, selectNone, shadowLight } from 'lib/styles'

export const about = createStyle({
    zIndex: 1,
    ...shadowLight
})

export const aboutContent = createStyle({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '60px',
    height: '300px',
    width: '100%'
})

export const aboutText = createStyle({
    color: COLORS.TYPOGRPHY,
    fontSize: '14px',
    padding: '20px',
    ...selectNone
})

export const aboutPhoto = createStyle({
    height: '200px',
    margin: '20px',
    ...selectNone,
    ...shadowLight
})
