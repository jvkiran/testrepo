import styled from 'styled-components'
import Cell from '../components/Cell'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import { colors, fonts, layout } from '../styles'

export const StyledWhitepaper = styled(Cell)`
    border-radius: ${layout.borderRadius};
    padding: ${layout.spacer};
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

    &:first-child {
        margin-bottom: ${layout.spacer};
    }
`

export const StyledTitle = styled(Title)`
    margin-top: 0;
    margin-bottom: ${layout.spacer};
    font-size: ${fonts.size.h3} !important;
    word-spacing: 100vw; /* make sure every word is on its own line */
`

export const StyledFooter = styled.div`
    margin-bottom: 0;
    margin-top: auto;
`

export const FileType = styled.span`
    font-size: ${fonts.size.small};
    opacity: 0.7;
    margin-left: 0.3rem;
`

export const StyledComments = styled(SubTitle)`
    color: rgb(${colors.lightGrey});
    margin-top: ${layout.spacer};
    margin-bottom: 0;
`
