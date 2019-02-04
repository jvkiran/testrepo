import styled from 'styled-components'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import { colors, fonts, layout } from '../styles'

export const StyledWhitepaper = styled.article`
    border-radius: ${layout.borderRadius};
    padding: ${layout.spacer};
    background: rgb(${colors.white});
    color: rgb(${colors.grey});
    hyphens: auto;
    position: relative;
    flex: 1 0 auto;
    max-width: 100%;
    width: 27rem;
    min-height: 35rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: calc(${layout.spacer} * 2);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

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

    > * {
        width: 100%;
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
    align-self: flex-end;
`

export const FileType = styled.span`
    font-size: ${fonts.size.small};
    opacity: 0.7;
    margin-left: 0.3rem;
`

export const PaperMeta = styled.div`
    text-align: center;
    margin-top: calc(${layout.spacer} / 2);
    font-size: ${fonts.size.mini};
    color: rgb(${colors.lightGrey});
`

export const StyledComments = styled(SubTitle)`
    color: rgb(${colors.lightGrey});
    margin-bottom: 0;
`

export const BlockedPaper = styled.div`
    text-align: center;
    margin-top: 40%;

    h3 {
        font-size: ${fonts.size.large};
        text-align: center;
    }

    button {
        display: inline-block;
        margin: 0 calc(${layout.spacer} / 2);
    }
`
