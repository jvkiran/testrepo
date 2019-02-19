import styled, { keyframes } from 'styled-components'
import fadeInUp from 'react-animations/lib/fade-in-up'
import { HashLink as Link } from 'react-router-hash-link'
import { colors, layout, fonts } from '../styles'
import ContentRow from '../components/ContentRow'

export const animation = keyframes`
    ${fadeInUp}
`

export const StyledBanner = styled.section`
    color: rgb(${colors.white});
    background-color: ${({ backgroundColor }) =>
        backgroundColor ? `rgb(${backgroundColor})` : `rgb(${colors.black})`};
    background-image: ${({ backgroundImage }) =>
        backgroundImage && `url(${backgroundImage})`};
    background-position: calc(50% - 14rem) calc(0px - 3rem);
    background-size: 20rem;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    padding: 2rem calc(${layout.pageFrame} * 2) 2rem
        calc(${layout.pageFrame} * 2);
    margin-bottom: ${layout.pageFrame};
    position: relative;

    &:before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(${colors.darkPurple}, 0.5);
    }

    ${({ light }) =>
        light &&
        `
        background-color: rgb(${colors.white});
        &:before {
            background: rgba(${colors.white}, 0.5);
        }
        `}
`
export const FlexContentRow = styled(ContentRow)`
    display: flex;
    justify-content: center;
`

export const StyledLink = styled(Link)`
    margin-bottom: 0;
    margin-top: 0;
    font-size: ${fonts.size.h4};
    font-weight: ${fonts.fontWeight.title};
    font-family: ${fonts.family.title};
    text-align: 'center';
    color: rgb(${colors.white});

    ${({ light }) =>
        light &&
        `& {
            color: rgb(${colors.black});
        }`}
`
