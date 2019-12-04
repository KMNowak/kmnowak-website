import { createStyle } from 'lib/utils'
import { COLORS, selectNone, shadowLight, Media } from 'lib/styles'

export const about = createStyle({
    minHeight: '300px',
    zIndex: 1,
    ...shadowLight
})

export const aboutContent = createStyle({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '60px',
    width: '100%',
    [Media.phone]: {
        flexDirection: 'column-reverse',
    }
})

export const aboutText = createStyle({
    color: COLORS.TYPOGRPHY,
    textJustify: 'inter-word',
    padding: '20px',
    ...selectNone
})

export const aboutPhoto = createStyle({
    height: '200px',
    margin: '20px',
    objectFit: 'contain',
    ...selectNone,
    ...shadowLight,
    [Media.phone]: {
        height: '150px',
    }
})
