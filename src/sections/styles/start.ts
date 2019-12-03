import { createStyle } from 'lib/utils'
import { COLORS, selectNone, shadowLight, Media } from 'lib/styles'

export const start = createStyle({
    background: 'rgb(77, 60, 245)',
    //@ts-ignore
    background: 'linear-gradient(120deg, rgba(77, 60, 245, 1) 14%, rgba(92, 193, 249, 1) 73%, rgba(144, 255, 144, 1) 100%)',
    height: '100vh',
    zIndex: 1
})

export const startContent = createStyle({
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingTop: '60px',
    paddingLeft: '20px',
    height: '80vh'
})

export const startName = createStyle({
    ...selectNone,
    color: COLORS.WHITE,
    fontSize: '7em',
    paddingTop: '15vh',
    [Media.phone]: {
        fontSize: '4em'
    }
})

export const startSoftDev = createStyle({
    color: COLORS.WHITE,
    fontSize: '3em',
    marginBottom: '10px',
    ...selectNone,
    [Media.phone]: {
        fontSize: '2em'
    }
})

export const startButtonsDiv = createStyle({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    ...selectNone
})

const startButton = createStyle({
    alignItems: 'center',
    borderRadius: '45px',
    color: COLORS.WHITE,
    display: 'flex',
    justifyContent: 'center',
    fontSize: '1em',
    margin: '5px',
    height: '45px',
    width: '200px',
    cursor: 'pointer',
    ...shadowLight
})

export const startButtonGreen = createStyle({
    ...startButton,
    backgroundColor: COLORS.SECONDARY
})

export const startButtonBlue = createStyle({
    ...startButton,
    backgroundColor: COLORS.PRIMARY
})
