import React from 'react'
import { FadeInAnimation, timeout } from './FadeIn.css'

const FadeIn = (props) => (
    <FadeInAnimation
        {...props}
        appear
        in
        offset={100}
        timeout={timeout} />
)

export default FadeIn
