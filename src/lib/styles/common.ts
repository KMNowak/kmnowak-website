import { createStyle } from 'lib/utils'

export const container = createStyle({
    margin: 'auto',
    maxWidth: '1170px',
    padding: '0 15px'
})

export const selectNone = createStyle({
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    KhtmlUserSelect: 'none',
    userSelect: 'none'
})

export const invisible = createStyle({ height: 0, visibility: 'hidden' })
