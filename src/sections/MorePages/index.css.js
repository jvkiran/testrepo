import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Title from '../../components/Title'
import SubTitle from '../../components/SubTitle'
import Section from '../../components/Section'
import { colors, fonts, layout, responsive } from '../../styles'

export const StyledSection = styled(Section)`
    &,
    > div {
        padding: 0;
    }

    > div {
        @media screen and (${responsive.sm.min}) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            flex-direction: row;
        }
    }
`

export const StyledLink = styled(Link)`
    flex: 1 1 100%;
    display: block;
    padding: 4rem 1rem;
    background-color: ${({ to }) =>
        to.state && to.state.backgroundColor
            ? `rgb(${to.state.backgroundColor})`
            : `rgb(${colors.darkGrey})`};

    background-image: ${({ to }) =>
        to.state && to.state.backgroundImage
            ? `url(${to.state.backgroundImage})`
            : null};
    background-repeat: no-repeat;
    background-size: center -60%;
    background-size: cover;
    margin-bottom: ${layout.pageFrame};

    &:last-child {
        margin-bottom: 0;
    }

    @media screen and (${responsive.sm.min}) {
        margin-bottom: 0;
        flex: 0 0 calc(50% - ${layout.pageFrame} / 2);
    }

    &:hover,
    &:focus {
        background-color: rgb(${colors.black});
    }
`

export const StyledTitle = styled(Title)`
    font-size: ${fonts.size.h2};
    margin-bottom: 1rem;
    margin-top: 0;
`

export const StyledSubTitle = styled(SubTitle)`
    font-size: ${fonts.size.h4};
    color: rgb(${colors.lightGrey});
    margin-bottom: 0;
`
