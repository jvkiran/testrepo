import styled from 'styled-components'
import { responsive, layout } from '../styles'

export const StyledSection = styled.section`
    width: 100%;
    background-color: ${({ background }) =>
        background ? `rgb(${background})` : 'none'};
    background-image: ${({ backgroundImage }) =>
        backgroundImage ? `url(${backgroundImage})` : 'none'};
    background-size: cover;
    background-repeat: no-repeat;
    min-height: ${({ viewport }) => (viewport ? '100vh' : 'auto')};
    margin: 0;
    margin-bottom: ${layout.pageFrame};
    padding-left: 1rem;
    padding-right: 1rem;
    position: relative;
`

export const StyledColumn = styled.div`
    width: 100%;
    min-height: ${({ minHeight }) => (minHeight ? `${minHeight}px` : 'auto')};
    padding: 6rem calc(${layout.pageFrame} * 2);
    position: relative;
    display: flex;
    color: ${({ fontColor }) => `rgb(${fontColor})`};
    flex-direction: column;

    @media screen and (${responsive.sm.max}) {
        padding: 2rem ${layout.pageFrame};
    }
`
