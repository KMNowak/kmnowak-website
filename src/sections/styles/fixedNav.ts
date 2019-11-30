import { createStyle } from 'lib/utils'
import { COLORS, selectNone, shadowLight } from 'lib/styles'

export const fixedNav = createStyle({
    backgroundColor: COLORS.WHITE,
    position: 'fixed',
    width: '100vw',
    zIndex: 2,
    ...selectNone,
    ...shadowLight
})

export const fixedNavContent = createStyle({
    alignItems: 'center',
    display: 'flex',
    height: '60px',
    justifyContent: 'space-between',
    padding: '1vh'
})

export const fixedNavList = createStyle({
    alignItems: 'center',
    display: 'flex',
    minWidth: '40vw',
    justifyContent: 'space-around'
})

export const fixedNavItem = createStyle({
    color: COLORS.TYPOGRPHY,
    cursor: 'pointer',
    fontSize: '20px',
    fontWeight: 400,
    padding: '10px'
})
