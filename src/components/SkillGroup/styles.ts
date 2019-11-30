import { createStyle } from 'lib/utils'
import { shadowLight, COLORS } from 'lib/styles'

export const skillGroup = createStyle({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: '40px 30px 15px 30px',
    position: 'relative',
    margin:'30px',
    width: '400px',
    ...shadowLight
})

export const skillGroupName = createStyle({
    color: COLORS.TYPOGRPHY,
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '20px',
})

export const skillGroupHeader = createStyle({
    alignItems: 'center',
    backgroundColor: COLORS.SECONDARY,
    borderRadius: '50px',
    color: COLORS.WHITE,
    display: 'flex',
    fontSize: '40px',
    fontWeight: 'bold',
    justifyContent: 'center',
    height: '70px',
    top: '-50px',
    width: '70px',
    position: 'absolute',
    textAlign: 'justify',
    ...shadowLight
})
