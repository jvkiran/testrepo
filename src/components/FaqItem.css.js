import styled from 'styled-components'
import { colors, fonts } from '../styles'

export const Container = styled.div`
    margin-bottom: 1.5rem;
`

export const StyledQuestion = styled.div`
    font-size: ${fonts.size.base};
    font-family: ${fonts.family.button};
    padding-left: 1.5rem;
    cursor: pointer;
    position: relative;

    &:before {
        content: '+';
        color: rgb(${colors.pink});
        font-family: ${fonts.family.base};
        font-size: ${fonts.size.h3};
        font-weight: ${fonts.fontWeight.base};
        position: absolute;
        line-height: .8;
        left: 0;
    }

    &.expanded {
        &:before {
            content: '-';
            line-height: .6;
        }
    }
`

export const StyledParagraph = styled.div`
    overflow: hidden;
    transition: .3s ease all;
    max-height: 0;
    padding-left: 1.5rem;

    &.visible {
        max-height: 1000px;
        padding-bottom: 1rem;
        padding-top: 1rem;
    }
`
