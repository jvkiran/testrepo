import styled from 'styled-components'
import SubscribeForm from '../components/SubscribeForm'
import Paragraph from '../components/Paragraph'
import { colors, responsive, fonts } from '../styles'

export const StyledSubTitle = styled.h5`
    color: rgb(${colors.lightGrey});
    margin-bottom: 1rem;

    &:first-of-type {
        margin-top: 0;
    }

    .page--newsletter & {
        &:first-of-type {
            display: none;
        }
    }
`

export const StyledActions = styled.div`
    width: 100%;
    display: flex;
`

export const StyledCopyright = styled(Paragraph)`
    opacity: .5;
    margin-top: 3rem;

    @media screen and (${responsive.sm.min}) {
        margin-bottom: -2rem;
    }

    a {
        color: inherit;
    }
`

export const StyledSocialLinks = styled.div`
    display: flex;
    justify-content: space-between;

    & a {
        margin-right: .75rem;
    }

    & img {
        border-radius: 2px;
        width: calc(2.5rem + 4px);
        height: calc(2.5rem + 4px);
    }

    @media screen and (${responsive.sm.max}) {
        width: 100%;
    }
`

export const StyledContact = styled.div`
    .address {
        color: rgb(${colors.lightGrey});
        text-align: right;
    }

    .address__title {
        font-size: ${fonts.size.h5};
        margin-top: 0;
        color: rgb(${colors.lightGrey});
    }
`

export const StyledSubscribeForm = styled(SubscribeForm)`
    .page--newsletter & {
        display: none;
    }
`
