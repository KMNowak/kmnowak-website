import { createStyle } from 'lib/utils'
import { COLORS, selectNone } from 'lib/styles'

export const footer = createStyle({
    backgroundColor: COLORS.PRIMARY,
    width: '100vw',
    zIndex: 2
})

export const footerContent = createStyle({
    alignItems: 'center',
    display: 'flex',
    height: '60px',
    justifyContent: 'space-between',
    padding: '1vh'
})

export const footerList = createStyle({
    alignItems: 'center',
    display: 'flex',
    minWidth: '40vw',
    justifyContent: 'flex-start'
})

export const footerItem = createStyle({
    color: COLORS.WHITE,
    cursor: 'pointer',
    marginLeft: '40px'
})

export const footerText = createStyle({
    color: COLORS.WHITE,
    fontSize: '12px',
    padding: '10px',
    ...selectNone
})
