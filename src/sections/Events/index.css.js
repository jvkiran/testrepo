import styled from 'styled-components'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import jellyfish from '@oceanprotocol/art/jellyfish/jellyfish-back.svg'

export const StyledTitle = styled(Title)`
    margin-bottom: 2rem;
    z-index: 1;
    position: relative;

    span {
        opacity: 0.5;
    }
`

export const StyledParagraph = styled(Paragraph)`
    margin-bottom: 0;
    text-align: center;
    z-index: 1;
    position: relative;
`

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
