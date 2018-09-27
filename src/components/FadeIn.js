import React from 'react'
import { FadeInAnimation, timeout } from './FadeIn.css'

const FadeIn = (props) => (
    <FadeInAnimation
        appear
        in
        offset={100}
        timeout={timeout}
        {...props} />
)

export default FadeIn
