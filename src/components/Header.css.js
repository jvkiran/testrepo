import styled, { keyframes } from 'styled-components'
import fadeInUp from 'react-animations/lib/fade-in-up'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import OceanJeyllyfishBack from '@oceanprotocol/art/jellyfish/jellyfish-back.svg'
import { colors, layout } from '../styles'

export const animation = keyframes`
    ${fadeInUp}
`

export const StyledHeader = styled.header`
    background-color: ${({ backgroundColor }) =>
        backgroundColor ? `rgb(${backgroundColor})` : `rgb(${colors.black})`};
    background-image: ${({ backgroundImage }) =>
        backgroundImage
            ? `url(${backgroundImage})`
            : `url(${OceanJeyllyfishBack})`};
    background-position: center 3rem;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: ${({ viewport }) =>
        viewport ? `calc(100vh - ${layout.pageFrame} * 2)` : 'auto'};
    display: flex;
    align-items: center;
    padding: 10rem calc(${layout.pageFrame} * 2) 6rem
        calc(${layout.pageFrame} * 2);
    margin-bottom: ${layout.pageFrame};
    text-align: ${({ left }) => (left ? 'left' : 'center')};
    position: relative;

    ${({ light }) =>
        light &&
        `&:before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(${colors.white}, 0.5);
        }`}

    p {
        margin-bottom: 0;
        color: rgb(${colors.white});
        animation: ${animation} 1.5s backwards;
    }
`

export const StyledTitle = styled(Title)`
    margin-bottom: 1rem;
    margin-top: 0;
    text-align: inherit;
    animation: ${animation} 1s backwards;
`

export const StyledSubTitle = styled(SubTitle)`
    color: rgb(${colors.lightGrey});
    text-align: inherit;
    animation: ${animation} 1.25s backwards;
`
