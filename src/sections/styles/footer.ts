import { createStyle } from 'lib/utils'
import { COLORS, selectNone, Media } from 'lib/styles'

export const footer = createStyle({
    backgroundColor: COLORS.PRIMARY,
    width: '100vw',
    zIndex: 2
})

export const footerContent = createStyle({
    alignItems: 'center',
    display: 'flex',
    minHeight: '60px',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '1vh',
    [Media.phone]: {
        justifyContent: 'center'
    }
})

export const footerList = createStyle({
    alignItems: 'center',
    display: 'flex',
    minWidth: '300px',
    justifyContent: 'space-around'
})

export const footerItem = createStyle({
    color: COLORS.WHITE,
    cursor: 'pointer',
})

export const footerText = createStyle({
    color: COLORS.WHITE,
    fontSize: '12px',
    padding: '10px',
    ...selectNone
})
