import { Properties } from 'csstype'
// @ts-ignore
export const createStyle = (obj: { [P in keyof Properties | string]: Properties[P] | string}) => obj
