import styled from 'styled-components'
import Cell from '../components/Cell'
import Button from '../components/Button'
import Title from '../components/Title'
import { colors, fonts, responsive } from '../styles'

export const StyledWhitepaper = styled(Cell)`
    border-radius: .2rem;
    padding: 2rem;
    background: rgb(${colors.white});
    color: rgb(${colors.grey});
    hyphens: auto;
    position: relative;
    flex: 1 0 auto;

    &:before {
        content: '';
        width: 3rem;
        height: 3rem;
        background: rgb(${colors.black});
        position: absolute;
        right: -1.5rem;
        top: -1.5rem;
        transform: rotate(45deg);
    }

    @media screen and (${responsive.sm.min}) {
        min-height: 540px;
    }

    @media screen and (${responsive.sm.min}) and (${responsive.tablet.max}) {
        min-height: 0;
    }

    &:first-child {
        margin-bottom: 2rem;
    }

    @media screen and (${responsive.sm.max}) {
        margin: 0;
        padding: 2rem !important; /* stylelint-disable-line declaration-no-important */
    }
`

export const StyledTitle = styled(Title)`
    margin-top: 0;
    margin-bottom: 2rem;
    font-size: ${fonts.size.h3};
    word-spacing: 100vw; /* make sure every word is on its own line */
`

export const StyledIntro = styled.div`
    margin-bottom: 1rem;
`

export const StyledAbstract = styled.div`
    margin-bottom: 2rem;
`

export const StyledFooter = styled.div`
    margin-bottom: 0;
    margin-top: auto;
`

export const StyledDownload = styled(Button)`
    margin-left: auto;
    margin-right: auto;
`

export const FileType = styled.span`
    font-size: ${fonts.size.small};
    opacity: .7;
    margin-left: .3rem;
`

export const StyledComments = styled.h4`
    color: rgb(${colors.lightGrey});
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 0;
`

export const StyledRow = styled.div`
    margin-top: 4rem;
    margin-bottom: 0;
`
