import { createStyle } from 'lib/utils'
import { COLORS, selectNone, shadowLight } from 'lib/styles'

export const contact = createStyle({
    alignItems: 'center',
    backgroundColor: COLORS.SECONDARY,
    color: COLORS.WHITE,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '250px',
    zIndex: 1
})

export const email = createStyle({
    fontWeight: 'bold',
    fontSize: '35px',
    marginTop: '40px'
})

