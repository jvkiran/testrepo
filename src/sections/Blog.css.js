import styled from 'styled-components'
import { colors, fonts, responsive } from '../styles'

export const StyledCard = styled.div`
    margin: 1rem 0;
    width: 100%;
    height: 100%;
    background: rgb(${colors.white});
    border-radius: 2px;
    box-shadow: 0 12px 30px 0 rgba(0, 0, 0, 0.07);
    color: rgb(${colors.grey});
`

export const StyledHeader = styled.div`
    width: 100%;
    height: 200px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

export const StyledContent = styled.div`
    width: 100%;
    padding: 0 2rem;

    @media screen and (${responsive.sm.max}) {
        padding: 0 1rem;
    }

    @media screen and (${responsive.sm.min}) {
        min-height: 260px;
    }
`

export const StyledAction = styled.div`
    text-align: center;
    margin-top: 4rem;
    opacity: ${({ fetching }) => (fetching ? 0 : 1)};
    pointer-events: ${({ fetching }) => (fetching ? 'none' : 'auto')};
    visibility: ${({ fetching }) => (fetching ? 'hidden' : 'visible')};

    @media screen and (${responsive.sm.max}) {
        margin-top: 2rem;
    }

    a {
        text-transform: uppercase;
        font-family: ${fonts.family.button};
        display: inline-block;
    }
`

export const StyledTitle = styled.h1`
    font-size: ${fonts.size.h4};
`

export const StyledSubtitle = styled.p`
    font-size: ${fonts.size.base};
`
