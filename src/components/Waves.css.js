import styled from 'styled-components'
import wavesStatic from '../assets/misc/waves.png'

export const StyledWaves = styled.div`
    background: url(${wavesStatic}) no-repeat center bottom;
    background-size: cover;

    &,
    > div,
    canvas {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    canvas {
        max-width: 100%;
        width: 100%;
        top: 10vh;
        z-index: 1;
        transition: opacity .3s ease-out;
    }
`
