import styled from 'styled-components'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'
import { colors, fonts, responsive, layout } from '../styles'

export const StyledHeader = styled.header`
    margin-bottom: calc(${layout.spacer} * 2);
`

export const StyledTitle = styled(Title)`
    margin-bottom: 0;
    z-index: 1;
    position: relative;
`

export const StyledParagraph = styled(Paragraph)`
    margin-top: ${layout.spacer};
    margin-bottom: 0;
    color: ${({ white }) =>
        white ? `rgb(${colors.white})` : `rgb(${colors.black})`};
    z-index: 1;
    position: relative;

    @media screen and (${responsive.sm.min}) {
        font-size: ${fonts.size.large};
    }
`

export const Line = styled.div`
    width: 100%;
    margin-top: ${layout.spacer};
    border-bottom: 1px solid rgba(${colors.lightGrey}, 0.3);

    @media screen and (${responsive.sm.min}) {
        margin-top: calc(${layout.spacer} * 2);
    }
`
