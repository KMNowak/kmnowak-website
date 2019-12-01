import { createStyle } from 'lib/utils'
import { shadowLight, COLORS } from 'lib/styles'

export const skillGroup = createStyle({
    alignItems: 'center',
    borderRadius: '5px',
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
    height: '60px',
    justifyContent: 'center',
    position: 'absolute',
    textAlign: 'justify',
    top: '-50px',
    width: '60px',
    ...shadowLight
})
