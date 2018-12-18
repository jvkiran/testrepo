import styled from 'styled-components'
import jellyfish from '@oceanprotocol/art/jellyfish/jellyfish-back.svg'

export const JellyfishBack = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
    opacity: 0.8;
    background: url(${jellyfish}) no-repeat center center;
    background-size: contain;
`
