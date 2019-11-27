import { Properties } from 'csstype'

export const createStyle = (obj: { [P in keyof Properties]: Properties[P]}) => obj
