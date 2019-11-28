import { createStyle } from '../utils'

export const shadowLight = createStyle({
    WebkitBoxShadow: '0 3px 10px 0 rgba(0, 0, 0, 0.25)',
    MozBoxShadow: '0 3px 10px 0px rgba(0, 0, 0, 0.25)',
    boxShadow: '0 3px 10px 0px rgba(0, 0, 0, 0.25)'
})
