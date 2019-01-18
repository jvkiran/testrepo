import React from 'react'
import { ReactComponent as DotsLeft } from '../../assets/graphics/data-dots-left.svg'
import { ReactComponent as DotsRight } from '../../assets/graphics/data-dots-right.svg'
import {
    StyledData,
    StyledCard,
    StyledDataTransfer,
    StyledDataDots
} from './DataGraphic.css'
import Pulse from './Pulse'
import { intro } from '../../data/pages/protocol.json'

const isProduction = process.env.NODE_ENV === 'production'
let shouldAnimate

if (isProduction) {
    shouldAnimate = true
} else {
    shouldAnimate = process.env.REACT_APP_ANIMATE_PROJECT === 'true'
}

const DataGraphic = () => (
    <StyledData>
        {intro.infographic.map(copy => (
            <StyledCard key={copy.title}>
                <h4>{copy.title}</h4>
                <p>{copy.text}</p>
            </StyledCard>
        ))}
        <StyledDataTransfer>
            <StyledDataDots shouldAnimate={shouldAnimate}>
                <DotsLeft />
            </StyledDataDots>
            <StyledDataDots shouldAnimate={shouldAnimate}>
                <DotsRight />
            </StyledDataDots>
            <Pulse className="pulse" shouldAnimate={shouldAnimate} />
        </StyledDataTransfer>
    </StyledData>
)

export default DataGraphic
